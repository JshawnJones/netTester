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

      stompClient.subscribe('/server/cpuresults' + sessionid, function (result) {
			var jsonresult = JSON.parse(result.body);
			
			//Main CPU
			var cpuPercentage = jsonresult.CPUload / 100;
			var lineheightfromTop = Math.round(cpuPercentage * $("#cpuoutput").height());
			var lineheight = $("#cpuoutput").height() - lineheightfromTop;
			
			var prePoints = $("#cpuLine").attr("points");
			var prePointsArray = prePoints.split(" ");
			
			var newPoints = "00,295 00,"+lineheight+" ";
			for (var $i = 1; $i < prePointsArray.length -1; $i++) {
				  
				var value = prePointsArray[$i].split(",")[1];
				var test = parseInt(prePointsArray[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 400){
					newPoints = newPoints.concat(position+","+value+" ");
				}
		
			}
			newPoints = newPoints.concat("400,295");
			$("#cpuLine").attr("points",newPoints);
			
			$("#cpuload").text("CPU Load: " + jsonresult.CPUload + "%");
			
			//Core 1
			var core1Percentage = jsonresult.Core1 / 100;
			var lineheightfromTop1 = Math.round(core1Percentage * $("#core1output").height());
			var lineheight1 = $("#core1output").height() - lineheightfromTop1;
			
			var prePoints1 = $("#cpuLine1").attr("points");
			var prePointsArray1 = prePoints1.split(" ");
			
			var newPoints1 = "00,125 00,"+lineheight1+" ";
			for (var $i = 1; $i < prePointsArray1.length -1; $i++) {
				  
				var value = prePointsArray1[$i].split(",")[1];
				var test = parseInt(prePointsArray1[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints1 = newPoints1.concat(position+","+value+" ");
				}
		
			}
			newPoints1 = newPoints1.concat("200,125");
			$("#cpuLine1").attr("points",newPoints1);
			
			$("#cpuCore1load").text("Core 1: " + jsonresult.Core1 + "%");
			
			//Core 2
			var core2Percentage = jsonresult.Core2 / 100;
			var lineheightfromTop2 = Math.round(core2Percentage * $("#core2output").height());
			var lineheight2 = $("#core2output").height() - lineheightfromTop2;
			
			var prePoints2 = $("#cpuLine2").attr("points");
			var prePointsArray2 = prePoints2.split(" ");
			
			var newPoints2 = "00,125 00,"+lineheight2+" ";
			for (var $i = 1; $i < prePointsArray2.length -1; $i++) {
				  
				var value = prePointsArray2[$i].split(",")[1];
				var test = parseInt(prePointsArray2[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints2 = newPoints2.concat(position+","+value+" ");
				}
		
			}
			newPoints2 = newPoints2.concat("200,125");
			$("#cpuLine2").attr("points",newPoints2);
			
			$("#cpuCore2load").text("Core 2: " + jsonresult.Core2 + "%");
			
			//Core 3
			var core3Percentage = jsonresult.Core3 / 100;
			var lineheightfromTop3 = Math.round(core3Percentage * $("#core3output").height());
			var lineheight3 = $("#core3output").height() - lineheightfromTop3;
			
			var prePoints3 = $("#cpuLine3").attr("points");
			var prePointsArray3 = prePoints3.split(" ");
			
			var newPoints3 = "00,125 00,"+lineheight3+" ";
			for (var $i = 1; $i < prePointsArray3.length -1; $i++) {
				  
				var value = prePointsArray3[$i].split(",")[1];
				var test = parseInt(prePointsArray3[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints3 = newPoints3.concat(position+","+value+" ");
				}
		
			}
			newPoints3 = newPoints3.concat("200,125");
			$("#cpuLine3").attr("points",newPoints3);
			
			$("#cpuCore3load").text("Core 3: " + jsonresult.Core3 + "%");
			
			//Core 4
			var core4Percentage = jsonresult.Core4 / 100;
			var lineheightfromTop4 = Math.round(core4Percentage * $("#core4output").height());
			var lineheight4 = $("#core4output").height() - lineheightfromTop4;
			
			var prePoints4 = $("#cpuLine4").attr("points");
			var prePointsArray4 = prePoints4.split(" ");
			
			var newPoints4 = "00,125 00,"+lineheight4+" ";
			for (var $i = 1; $i < prePointsArray4.length -1; $i++) {
				  
				var value = prePointsArray4[$i].split(",")[1];
				var test = parseInt(prePointsArray4[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints4 = newPoints4.concat(position+","+value+" ");
				}
		
			}
			newPoints4 = newPoints4.concat("200,125");
			$("#cpuLine4").attr("points",newPoints4);
			
			$("#cpuCore4load").text("Core 4: " + jsonresult.Core4 + "%");
			
			
			//Core 5
			var core5Percentage = jsonresult.Core5 / 100;
			var lineheightfromTop5 = Math.round(core5Percentage * $("#core5output").height());
			var lineheight5 = $("#core5output").height() - lineheightfromTop5;
			
			var prePoints5 = $("#cpuLine5").attr("points");
			var prePointsArray5 = prePoints5.split(" ");
			
			var newPoints5 = "00,125 00,"+lineheight5+" ";
			for (var $i = 1; $i < prePointsArray5.length -1; $i++) {
				  
				var value = prePointsArray5[$i].split(",")[1];
				var test = parseInt(prePointsArray5[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints5 = newPoints5.concat(position+","+value+" ");
				}
		
			}
			newPoints5 = newPoints5.concat("200,125");
			$("#cpuLine5").attr("points",newPoints5);
			
			$("#cpuCore5load").text("Core 5: " + jsonresult.Core5 + "%");
			
			//Core 6
			var core6Percentage = jsonresult.Core6 / 100;
			var lineheightfromTop6 = Math.round(core6Percentage * $("#core6output").height());
			var lineheight6 = $("#core6output").height() - lineheightfromTop6;
			
			var prePoints6 = $("#cpuLine6").attr("points");
			var prePointsArray6 = prePoints6.split(" ");
			
			var newPoints6 = "00,125 00,"+lineheight6+" ";
			for (var $i = 1; $i < prePointsArray6.length -1; $i++) {
				  
				var value = prePointsArray6[$i].split(",")[1];
				var test = parseInt(prePointsArray6[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints6 = newPoints6.concat(position+","+value+" ");
				}
		
			}
			newPoints6 = newPoints6.concat("200,125");
			$("#cpuLine6").attr("points",newPoints6);
			
			$("#cpuCore6load").text("Core 6: " + jsonresult.Core6 + "%");
			
			//Core 7
			var core7Percentage = jsonresult.Core7 / 100;
			var lineheightfromTop7 = Math.round(core7Percentage * $("#core7output").height());
			var lineheight7 = $("#core7output").height() - lineheightfromTop7;
			
			var prePoints7 = $("#cpuLine7").attr("points");
			var prePointsArray7 = prePoints7.split(" ");
			
			var newPoints7 = "00,125 00,"+lineheight7+" ";
			for (var $i = 1; $i < prePointsArray7.length -1; $i++) {
				  
				var value = prePointsArray7[$i].split(",")[1];
				var test = parseInt(prePointsArray7[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints7 = newPoints7.concat(position+","+value+" ");
				}
		
			}
			newPoints7 = newPoints7.concat("200,125");
			$("#cpuLine7").attr("points",newPoints7);
			
			$("#cpuCore7load").text("Core 7: " + jsonresult.Core7 + "%");
			
			//Core 8
			var core8Percentage = jsonresult.Core8 / 100;
			var lineheightfromTop8 = Math.round(core8Percentage * $("#core8output").height());
			var lineheight8 = $("#core8output").height() - lineheightfromTop8;
			
			var prePoints8 = $("#cpuLine8").attr("points");
			var prePointsArray8 = prePoints8.split(" ");
			
			var newPoints8 = "00,125 00,"+lineheight8+" ";
			for (var $i = 1; $i < prePointsArray8.length -1; $i++) {
				  
				var value = prePointsArray8[$i].split(",")[1];
				var test = parseInt(prePointsArray8[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= 200 + 20){
					newPoints8 = newPoints8.concat(position+","+value+" ");
				}
		
			}
			newPoints8 = newPoints8.concat("200,125");
			$("#cpuLine8").attr("points",newPoints8);
			
			$("#cpuCore8load").text("Core 8: " + jsonresult.Core8 + "%");
			
			//physical memory
			$("#phymemload").text("Physical Memory: " + jsonresult.PhysicalMemory);
			
			var memUsed = jsonresult.PhysicalMemory.replace(" GiB", "").split("/")[0];
			var memAvailable = jsonresult.PhysicalMemory.replace(" GiB", "").split("/")[1].replace(" GiB", "");

			//memory usage percentage
			var phyMemPercentage = (memUsed / memAvailable).toFixed(2);
			
			var prePointsPhyMem = $("#physicalMemLine").attr("points");
			var prePointsArrayPhyMem = prePointsPhyMem.split(" ");
			
			var lineheightfromTopPhyMem = Math.round(phyMemPercentage * $("#physicalMemOutput").height());
			var lineheightPhyMem = $("#physicalMemOutput").height() - lineheightfromTopPhyMem;
			
			var phyMemWidth = Math.round($("#physicalMemOutput").width());
			
			//points to display
			var newPointsPhyMem = "00,125 00,"+lineheightPhyMem+" ";
			var lastPoint = "";
			for (var $i = 1; $i < prePointsArrayPhyMem.length -1; $i++) {
				  
				var value = prePointsArrayPhyMem[$i].split(",")[1];
				var test = parseInt(prePointsArrayPhyMem[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= phyMemWidth +20){
					newPointsPhyMem = newPointsPhyMem.concat(position+","+value+" ");
				}
				lastPoint = position;
			}
			lastPoint = lastPoint + 20;
			
			newPointsPhyMem = newPointsPhyMem.concat(lastPoint+",125");
			
			$("#physicalMemLine").attr("points",newPointsPhyMem);
			
			//virtual memory
			$("#virmemload").text("Virtual Memory: " + jsonresult.VirtualMemory);
			
			var virmemUsed = jsonresult.VirtualMemory.replace(" GiB", "").split("/")[0];
			var virmemAvailable = jsonresult.VirtualMemory.replace(" GiB", "").split("/")[1].replace(" GiB", "");

			//memory usage percentage
			var virMemPercentage = (virmemUsed / virmemAvailable).toFixed(2);
			
			var prePointsVirMem = $("#virtualMemLine").attr("points");
			var prePointsArrayVirMem = prePointsVirMem.split(" ");
			
			var lineheightfromTopVirMem = Math.round(virMemPercentage * $("#virtualMemOutput").height());
			var lineheightVirMem = $("#virtualMemOutput").height() - lineheightfromTopVirMem;
			
			var phyMemWidth = Math.round($("#physicalMemOutput").width());
			
			//points to display
			var newPointsVirMem = "00,125 00,"+lineheightVirMem+" ";
			var virlastPoint = "";
			for (var $i = 1; $i < prePointsArrayVirMem.length -1; $i++) {
				  
				var value = prePointsArrayVirMem[$i].split(",")[1];
				var test = parseInt(prePointsArrayVirMem[$i].split(",")[0].replace(" ", ""));
				var position = test + 20;
				
				if(position <= phyMemWidth + 20){
					newPointsVirMem = newPointsVirMem.concat(position+","+value+" ");
				}
				virlastPoint = position;
			}
			virlastPoint = virlastPoint + 20;
			
			newPointsVirMem = newPointsVirMem.concat(virlastPoint+",125");
			
			$("#virtualMemLine").attr("points",newPointsVirMem);
			
			//storage loader
			$("#storageName").text("Disk: " + jsonresult.diskName1);
			
			var storageStr = "Storage Available: " + jsonresult.diskUsable1 +
			" / "+jsonresult.diskTotal1 + " (" +
			parseFloat(jsonresult.diskPercentage1).toFixed(2)+ "%)";
			$("#storageUsage").text(storageStr);
			
			var usedPercent = 100 - Math.round(parseInt(jsonresult.diskPercentage1).toFixed(2));
			$("#storageUsed").attr("width",usedPercent + "%");
			
    	});
    });

}



function sendReadySignal() {
    
	stompClient.send("/app/status", {}, JSON.stringify({'status': "OK"}));
}

function sendStopSignal() {
    
	stompClient.send("/app/status", {}, JSON.stringify({'status': "STOP"}));
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    
    console.log("Disconnected");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });

    $( "#send" ).click(function() { 
	
	
		$("#disconnect").removeAttr("disabled");
		$("#disconnect").removeClass("disabled");
		$("#disconnect").removeClass("displayNone");
		$("#disconnect").addClass("enabled");
		
		
		$( "#send" ).attr("disabled", true);
		$( "#send" ).removeClass("send");
		$( "#send" ).addClass("disabled");
		$( "#send" ).addClass("displayNone");
		
		sendReadySignal(); 
	});
	
	$( "#disconnect" ).click(function() {
		$("#disconnect").addClass("displayNone");
		$("#disconnect").addClass("disabled");
		$("#disconnect").removeClass("enabled");
		$("#disconnect").attr("disabled", true);
		
		$( "#send" ).removeAttr("disabled");
		$( "#send" ).addClass("send");
		$( "#send" ).removeClass("disabled");
		$( "#send" ).removeClass("displayNone");
		
		sendStopSignal();

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
		stompClient.send("/app/status", {}, JSON.stringify({'status': "STOP"}));
	
    	window.location.href = "/resourcemonitor";
    });

});


