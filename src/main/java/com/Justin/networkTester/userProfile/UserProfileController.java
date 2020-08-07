package com.Justin.networkTester.userProfile;

import java.io.IOException;
import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.Justin.networkTester.secureweb.CsvReader;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;

@Controller
public class UserProfileController {

	@GetMapping("/")
	public String mainInfo(Model model) throws IOException {
		
		//get the user name from the session 
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String username = "";
		if(auth.getPrincipal() instanceof java.lang.String) {
			
			username = (String) auth.getPrincipal();
			
		} else if (auth.getPrincipal() instanceof org.springframework.security.core.userdetails.UserDetails) {
			UserDetails userDetails = (UserDetails) auth.getPrincipal();
			
			username = userDetails.getUsername();
		}
	
		//get the profile pic from the csv file
		//initialize the csv reader
		CsvReader csvReader = new CsvReader();
		HashMap<String, String> userPics = csvReader.loadUserPicList("userProfile.csv");		
		
		model.addAttribute("username", username);
		model.addAttribute("profilePic", userPics.get(username));

		
		return "main";
	}
	
	@GetMapping("/profile")
	public String profileInfo(Model model) throws IOException {
		//get the user name from the session 
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String username = "";
		if(auth.getPrincipal() instanceof java.lang.String) {
			
			username = (String) auth.getPrincipal();
			
		} else if (auth.getPrincipal() instanceof org.springframework.security.core.userdetails.UserDetails) {
			UserDetails userDetails = (UserDetails) auth.getPrincipal();
			
			username = userDetails.getUsername();
		}
	
		//get the profile pic from the csv file
		//initialize the csv reader
		CsvReader csvReader = new CsvReader();
		HashMap<String, String> userPics = csvReader.loadUserPicList("userProfile.csv");		
		
		
		
		
		model.addAttribute("username", username);
		model.addAttribute("profilePic", userPics.get(username));

		
		return "profile";
	}
	
	@PostMapping("/profileName")
	public String changeProfilename(@RequestParam("usernameP") String newName, Model model) throws IOException {
		//get the name of the current user. 
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String currentName = "";
		if(auth.getPrincipal() instanceof java.lang.String) {
			
			currentName = (String) auth.getPrincipal();
			
		} else if (auth.getPrincipal() instanceof org.springframework.security.core.userdetails.UserDetails) {
			UserDetails userDetails = (UserDetails) auth.getPrincipal();
			
			currentName = userDetails.getUsername();
		}

		//initialize the csv reader
		CsvReader csvReader = new CsvReader();
		csvReader.rewriteProfileCsv("userProfile.csv", currentName, newName);
		csvReader.rewriteUsersCsv("users.csv", currentName, newName);
		
		
		
		HashMap<String, String> userPics = csvReader.loadUserPicList("userProfile.csv");
		
		model.addAttribute("username", newName);
		model.addAttribute("profilePic", userPics.get(newName));
		
		return "profile";
	}
	
}
