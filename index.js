//Javascript for midterm project
/*
 *	Basic Overview
 *	1) Take input string on button click
 *	2) Mutilate string 
 *		This is the most important step required.
 *		Notes:
			https://graphemica.com/blocks/combining-diacritical-marks and
			https://en.wikipedia.org/wiki/Combining_character
			list UTF-8 characters that fuse with others if added on the same string.
			ex) char '\u0346' being an downwards facing bracket character.
			
 *  3) Return string to output
 */
 
//get input string
function getString(){
	var string = $("#input").val(); //get string from input
	console.log("Input is: [" + string + "]");
	console.log("get - complete");
	return string;
}

//return Nonsense to page
function returnNonsense(string){
	//return string to page
	$("#output").html(string);
	console.log("Output is: [" + string + "]");
	console.log("return - complete");
	console.log("DONE");
	console.log(""); //console spacing
}

// "main"
// runs on click
function nonsenseGen(){
	var string = getString();
	var myWorker = new Worker('worker.js');
	myWorker.onmessage = function(e) { //create onmessage event for worker
		console.log('Message received from worker');
		returnNonsense(e.data);
	}
	myWorker.postMessage([string]); //give worker work
}

$(document).ready(function(){
	$("#activate").click(nonsenseGen);
});
 