package com.Justin.networkTester.secureweb;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecureWebConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
				.antMatchers("/css/**", "/images/**", "/js/**").permitAll()
				.anyRequest().authenticated();
			
		http.formLogin()
				.loginPage("/login")
				.permitAll();
				
		http.logout()
			.deleteCookies("JSESSIONID")
			.invalidateHttpSession(true)
			.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
			.logoutSuccessUrl("/login");
	}

	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		List<UserDetails> userDetailsList = new ArrayList<>();
		
		//initialize the csv reader
		CsvReader csvReader = new CsvReader();
		HashMap<String, String> useraccounts = csvReader.loadUserPassList("users.csv");		
		HashMap<String, String> userRoles = csvReader.loadUserRoleList("users.csv");

		//loop through the user information
		Iterator iterateAccounts = useraccounts.entrySet().iterator();
		
		while (iterateAccounts.hasNext()) {
	        Map.Entry pair = (Map.Entry)iterateAccounts.next();
	        
	        userDetailsList.add(
					User.withDefaultPasswordEncoder()
						.username((String) pair.getKey())
						.password((String) pair.getValue())
						.roles(userRoles.get((String) pair.getKey()))
						.build());
	        
	        iterateAccounts.remove(); // avoids a ConcurrentModificationException
	    }
		
		//authorize each of the users. 
		auth.userDetailsService(new InMemoryUserDetailsManager(userDetailsList));
	}
	
	@Bean
	public SessionRegistry sessionRegistry() {
	    return new SessionRegistryImpl();
	}
	
	
}
