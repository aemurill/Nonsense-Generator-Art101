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
	console.log("Input is: [" + string + "]");
	console.log("get - complete");
	return string;
}

//return Nonsense to page
function returnNonsense(string){
	//return string to page
	document.getElementById("output").innerHTML = string;
	console.log("Output is: [" + string + "]");
	console.log("return - complete");
}

//https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
function decimalToHexString(number){
  if (number < 0){
    number = 0xFFFFFFFF + number + 1;
  }
  return number.toString(16).toUpperCase();
}

function mutilate_diacritial(string){
	//diacriticals are from 0300 to 036F
	var output = "";
	for(i = 0; i < string.length; i++){
		var num_prefix = Math.floor(Math.random() * 10);
		var num_suffix = Math.floor(Math.random() * 10);
		for(j = 0; j < num_prefix; j++){
			//num is some random integer from 0 + 768 (0x0300) to 111 + 768 (0x36F) in Decimal
			var num = Math.floor(Math.random() * 112) + 768; 
			var diacrit = String.fromCharCode(num);
			output += diacrit;
		}
		var sub = string.substring(i, i+1);
		output += sub;
		for(j = 0; j < num_suffix; j++){
			//num is some random integer from 0 + 768 (0x0300) to 111 + 768 (0x36F) in Decimal
			var num = Math.floor(Math.random() * 112) + 768; 
			var diacrit = String.fromCharCode(num);
			output += diacrit;
		}	
	}
	return output;
}

//must be last or otherwise have span tags UN-modified
function mutilate_tag(string){
	var output = "";
	for(i = 0; i < string.length; i++){
		//MUTILATE COLOR
		//num is some random integer from 0 to 16777215 (0xFFFFFF), 
		var num = Math.floor(Math.random() * 16777215) + 1;
		var hex = decimalToHexString(num);
		//size is some random number from 1 to 2
		var size = Math.random() * 2 + 1;
		var sub = string.substring(i, i+1);
		output += "<span style=\"color: #" + hex + ";" +
				"font-size:" + size + "em\">" + sub + "</span>";
	}
	return output;
}

//mutilate string
function mutilate(string){
	//do mutilation
	var output = string.repeat(1);
	console.log("mutilation - complete");
	output = mutilate_diacritial(output);
	output = mutilate_tag(output);
	return output;
}

// "main"
function nonsenseGen(){
	var string = getString();
	string = mutilate(string);
	returnNonsense(string);
	console.log("DONE");
	console.log(""); //console spacing
}
 