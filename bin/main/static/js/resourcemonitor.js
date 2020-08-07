var stompClient = null;

$( document ).ready(function() {
	connect();

});

function connect() {
    var socket = new SockJS('/server-websocket');
    stompClient = Stomp.over(socket);

    
    stompClient.connect({

    }, function () {
	
		var websocketUrl = socket.url.replace("http://", "");
    	var transportUrl = socket._transport.url.replace("ws://", "");
    	var parsedUrl = transportUrl.replace(websocketUrl, "");
    	
    	var sessionid = parsedUrl.split("/")[2];
	
		stompClient.subscribe('/server/resourcesresults' + sessionid, function (result) {
			var jsonresult = JSON.parse(result.body);
			
			$("#resourcesTable").empty();
			$('#resourcesTable').append("<tr>" +
    			"<th>PID</th>" +
		    	"<th>Name</th>" +
  				"</tr>");

			Object.keys(jsonresult).forEach(function(key) {
				if(key !== "bufferindex"){
					$('#resourcesTable').append("<tr>" +
		    			"<td>"+key+"</td>"+
		    			"<td>"+jsonresult[key]+"</td>" +
		  				"</tr>");
				} 
					
	
			});			

			
		});
    });


}



function sendReadySignal() {
    
	stompClient.send("/app/resources", {}, JSON.stringify({'status': "OK"}));
}


$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });

    $( "#send" ).click(function() { 
	
	
		
		sendReadySignal(); 
	});
	
	$( "#profilePic" ).click(function() { 
    	var dropClasses = $( "#dropDownMenu" ).attr('class');
    	if (dropClasses.indexOf("displayNone") >= 0){
    		$( "#dropDownMenu" ).removeClass('displayNone');
    	} else {
    		$( "#dropDownMenu" ).addClass('displayNone');
    	}

    });

	$( "#dashboard" ).click(function() { 
    	window.location.href = "/";
    });
    
    $( "#resourcemonitor" ).click(function() { 

    	window.location.href = "/resourcemonitor";
    });

});


