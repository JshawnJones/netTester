package com.Justin.networkTester.serverInfo;

import java.util.Map;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;


public class ServerHandshakeInterceptor implements HandshakeInterceptor{
	
	 public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response,
	            WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {

	        // Set ip attribute to WebSocket session		 
	        attributes.put("ip", request.getRemoteAddress().getAddress().toString().replace("/", ""));
	        
	        return true;
	    }

	    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response,
	            WebSocketHandler wsHandler, Exception exception) {          
	    }
	
}
