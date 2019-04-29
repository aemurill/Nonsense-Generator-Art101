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
	var string = document.getElementById("input").value; //get string from input
	console.log("[" + string + "]");
	console.log("get - complete");
	return string;
}

//return Nonsense to page
function returnNonsense(string){
	//return string to page
	document.getElementById("output").innerHTML = string;
	console.log("[" + string + "]");
	console.log("return - complete");
}

//mutilate string
function mutilate(string){
	//do mutilation
	console.log("mutilation - complete");
	return string;
}

// "main"
function nonsenseGen(){
	var string = getString();
	string = mutilate(string);
	returnNonsense(string);
	console.log("done");
}
 