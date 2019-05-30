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

var alphabet = "abcdefghijklmnopqrstuvexyz";
 
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
}

//mutilate string
//takes string
//returns string
function mutilate_content(string){
	//do mutilation

	var mutilatedString = "";
	for (var x=0; x<string.length; x++){
		if(string.charAt(x)=='a'){
			mutilatedString = mutilatedString + "TTTTTTTTTTTTTTTTTTTTTTTTTTTT";
		}
		if(string.charAt(x)=='b'){
			mutilatedString = mutilatedString + "racedobonbonsetonkkkkkkkkkkkorda";
		}
		if(string.charAt(x)=='c'){
			mutilatedString = mutilatedString + randomletter() + randomletter() + randomletter();
		}
		if(string.charAt(x)=='d'){
			mutilatedString = mutilatedString + "R" + randomletter() + "C" + randomletter() + "RD" + randomletter();
		}
		if(string.charAt(x)=='e'){
			mutilatedString = mutilatedString + "M" + randomletter() + "L" + randomletter() + "S";
		}
		if(string.charAt(x)=='f'){
			mutilatedString = mutilatedString + "Daniel, the Vito"
		}
		if(string.charAt(x)=='g'){
			mutilatedString = mutilatedString + "\n"
		}
		if(string.charAt(x)=='h'){
			mutilatedString = mutilatedString + "\n TTTTTTTTTTXTTTTTT"
		}
		if(string.charAt(x)=='i'){
			mutilatedString = mutilatedString + "SOMBERTONES " + randomletter() + randomletter() + randomletter();
		}
		if(string.charAt(x)=='j'){
			var limit = Math.random*50;
			for ( var i=0; i<limit; i++) {

			mutilatedString = mutilatedString + randomletter();
			}
		}
		if(string.charAt(x)=='k'){
			mutilatedString = mutilatedString + "\n"
		}
		if(string.charAt(x)=='l'){
			mutilatedString = mutilatedString + "\n" + randomletter();
		}
		if(string.charAt(x)=='m'){
			mutilatedString = mutilatedString + "MY NAME IS ";
			var namelength = Math.random()*10;
			for (i=0;i<namelength;i++){
				mutilatedString = mutilatedString + randomletter();
			}
		}
		if(string.charAt(x)=='n'){
			mutilatedString = mutilatedString + "HOWQUAINT";
		}
		if(string.charAt(x)=='o'){
			mutilatedString = mutilatedString + "\n \n Nah \n";
		}
		if(string.charAt(x)=='p'){
			mutilatedString = mutilatedString + "DOINGTTTTTTTTTTDOINGTTTTTTDONGTTTTDOGTDOTTTTT";
		}
		if(string.charAt(x)=='q'){
			mutilatedString = mutilatedString + "QUAS WEX EXORT";
		}
		if(string.charAt(x)=='r'){
			mutilatedString = mutilatedString + "LET US TEST";
		}
		if(string.charAt(x)=='s'){
			mutilatedString = mutilatedString + " RUN RUN RUN";
		}
		if(string.charAt(x)=='t'){
			mutilatedString = mutilatedString + "IS THAT IT?";
		}
		if(string.charAt(x)=='u'){
			mutilatedString = mutilatedString + "THE END IS NEAR";
		}
		if(string.charAt(x)=='v'){
			mutilatedString = mutilatedString + "TSKRAW";
		}
		if(string.charAt(x)=='w'){
			mutilatedString = mutilatedString + "ESCRONG";
		}
		if(string.charAt(x)=='x'){
			mutilatedString = mutilatedString + "ISCIR";
		}
		if(string.charAt(x)=='y'){
			mutilatedString = mutilatedString + "ENNYE";
		}
		if(string.charAt(x)=='z'){
			mutilatedString = mutilatedString + "I DON'T SEE NOTHING WRONG";
		}
		if(string.charAt(x)=='A'){
		mutilatedString = mutilatedString + "\n this \n isn't \n blowing \n over";
		}
		if(string.charAt(x)=='B'){
			mutilatedString = mutilatedString + "REGROW";
		}
		if(string.charAt(x)=='C'){
			mutilatedString = mutilatedString + "NEGATE";
		}
		if(string.charAt(x)=='D'){
			mutilatedString = mutilatedString + "NO STYLE NO GRACE";
		}
		if(string.charAt(x)=='E'){
			mutilatedString = mutilatedString + "\n";
		}
		if(string.charAt(x)=='F'){
			mutilatedString = mutilatedString + "PROJARED \n";
		}
		if(string.charAt(x)=='G'){
			mutilatedString = mutilatedString + "MYSTICAL \n";
		}
		if(string.charAt(x)=='H'){
			mutilatedString = mutilatedString + "MAGICAL \n";
		}
		if(string.charAt(x)=='I'){
			mutilatedString = mutilatedString + "\n";
		}
		if(string.charAt(x)=='J'){
			mutilatedString = mutilatedString + "LURE UNTO";
		}
		if(string.charAt(x)=='K'){
			mutilatedString = mutilatedString + "WHAT IS THIS \n \n \n";
		}
		if(string.charAt(x)=='L'){
			mutilatedString = mutilatedString + "\n \n";
		}
		if(string.charAt(x)=='M'){
			mutilatedString = mutilatedString + "ORIGIN" + randomletter() + randomletter() + randomletter();
		}
		if(string.charAt(x)=='N'){
			mutilatedString = mutilatedString + "RUNDOWN \n \n";
		}
		if(string.charAt(x)=='O'){
			mutilatedString = mutilatedString + "I'M NOT GONNA LIE THIS IS DEFINITELY ME WHEN";
		}
		if(string.charAt(x)=='P'){
			mutilatedString = mutilatedString + "90009099990009009999909099";
		}
		if(string.charAt(x)=='Q'){
			mutilatedString = mutilatedString + "Q? REALLY? Q?";
		}
		if(string.charAt(x)=='R'){
			mutilatedString = mutilatedString + "OTTOMANSHRIMP";
		}
		if(string.charAt(x)=='S'){
			mutilatedString = mutilatedString + randomletter() + randomletter() + randomletter() + randomletter() + "BERT";
		}
		if(string.charAt(x)=='T'){
			mutilatedString = mutilatedString + "MCDONGALDS";
		}
		if(string.charAt(x)=='U'){
			mutilatedString = mutilatedString + "\n";
		}
		if(string.charAt(x)=='V'){
			mutilatedString = mutilatedString + "OEUF";
		}
		if(string.charAt(x)=='W'){
			mutilatedString = mutilatedString + "WONDER";
		}
		if(string.charAt(x)=='X'){
			mutilatedString = mutilatedString + "SLAPPIN";
		}
		if(string.charAt(x)=='Y'){
			mutilatedString = mutilatedString + "CULT";
		}
		if(string.charAt(x)=='Z'){
			mutilatedString = mutilatedString + "CHAD";
		}
		if(string.charAt(x)=='1'){
			mutilatedString = mutilatedString + "\n Prime";
		}if(string.charAt(x)=='2'){
			mutilatedString = mutilatedString + "\n Unbreakable";
		}if(string.charAt(x)=='3'){
			mutilatedString = mutilatedString + "\n ♂";
		}if(string.charAt(x)=='4'){
			mutilatedString = mutilatedString + " Lunchables™ \n";
		}if(string.charAt(x)=='5'){
			mutilatedString = mutilatedString + "\n Hot and Spicy";
		}if(string.charAt(x)=='6'){
			mutilatedString = mutilatedString + "Unpredicted";
		}if(string.charAt(x)=='7'){
			mutilatedString = mutilatedString + "The eeeeeeeeeeeeeeeeeeeeeeeeeeend?";
		}if(string.charAt(x)=='8'){
			mutilatedString = mutilatedString + "The end. \n";
		}if(string.charAt(x)=='9'){
			mutilatedString = mutilatedString + "But really this time.";
		}if(string.charAt(x)=='0'){
			mutilatedString = mutilatedString + "SISEPHAM";
		}if(string.charAt(x)=='!'){
			mutilatedString = mutilatedString + "Irony. \n";
		}if(string.charAt(x)=='@'){
			mutilatedString = mutilatedString + "everyone";
		}if(string.charAt(x)=='#'){
			mutilatedString = mutilatedString + "$" + randomletter() + randomletter() + randomletter();
		}if(string.charAt(x)=='$'){
			mutilatedString = mutilatedString + "Affordance";
		}if(string.charAt(x)=='%'){
			mutilatedString = mutilatedString + "\n";
		}if(string.charAt(x)=='^'){
			mutilatedString = mutilatedString + "Upwa" + randomletter() + randomletter();
		}if(string.charAt(x)=='&'){
			mutilatedString = mutilatedString + "Inseperable";
		}if(string.charAt(x)=='*'){
			mutilatedString = mutilatedString + "Pound";
		}if(string.charAt(x)=='('){
			mutilatedString = mutilatedString + "Left";
		}if(string.charAt(x)==')'){
			mutilatedString = mutilatedString + "Right";
		}if(string.charAt(x)=='-'){
			mutilatedString = mutilatedString + "Away" + randomletter() + "\n";
		}if(string.charAt(x)=='_'){
			mutilatedString = mutilatedString + "SANS";
		}if(string.charAt(x)=='+'){
			mutilatedString = mutilatedString + "UNITEDWESTAND";
		}if(string.charAt(x)=='='){
			mutilatedString = mutilatedString + "SUM";
		}if(string.charAt(x)=='{'){
			mutilatedString = mutilatedString + "LEFTBEHIND";
		}if(string.charAt(x)=='['){
			mutilatedString = mutilatedString + "STAT";
		}if(string.charAt(x)=='}'){
			mutilatedString = mutilatedString + "I will stand unfaltering against your corruption, trading blow for blow, and emerge victorious.";
		}if(string.charAt(x)==']'){
			mutilatedString = mutilatedString + "BLOCK";
		}if(string.charAt(x)==';'){
			mutilatedString = mutilatedString + "Whoa, is that a programmer?";
		}if(string.charAt(x)==':'){
			mutilatedString = mutilatedString + "Call";
		}if(string.charAt(x)=='|'){
			mutilatedString = mutilatedString + "Spoiler";
		}if(string.charAt(x)=='<'){
			mutilatedString = mutilatedString + "Two Evils";
		}if(string.charAt(x)==','){
			mutilatedString = mutilatedString + "Breathe In";
		}if(string.charAt(x)=='>'){
			mutilatedString = mutilatedString + "Sum of Parts";
		}if(string.charAt(x)=='.'){
			mutilatedString = mutilatedString + ".";
		}if(string.charAt(x)=='?'){
			mutilatedString = mutilatedString + ", Don't you agree?";
		}if(string.charAt(x)=='/'){
			mutilatedString = mutilatedString + "What's a path?";
		}if(string.charAt(x)=='~'){
			mutilatedString = mutilatedString + "Wingdings";
		}if(string.charAt(x)=='`'){
			mutilatedString = mutilatedString + "You've found a hidden message. But I only have two sentences to tell you it.";
		}
	}
	return mutilatedString;
}

//returns a random letter
function randomletter(){
	var translatedletter;
	var chosenletter = Math.random() * 25;
	chosenletter = Math.round(chosenletter);
	translatedletter = alphabet.charAt(chosenletter);
	return translatedletter;
}

//https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
//converts decimal numbers to a hex string
function decimalToHexString(number){
  if (number < 0){
    number = 0xFFFFFFFF + number + 1;
  }
  return number.toString(16).toUpperCase();
}

//mutilates string via adding random combining diacritcal marks to each character
//takes string
//returns string
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
//mutilates string by adding style tags around each character with randomized color and font-size values
//takes string
//returns string
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
		//output += "<span style=\"color: #" + hex + ";" +
		//		"font-size:" + size + "em\">" + sub + "</span>";
		var span = $('<span>'+sub+'</span>').clone()
						.css({
							"color" : ("#" + hex),
							"font-size" : (size + "em")
						}).prop('outerHTML');
		output += span;
	}
	return output;
}

//mutilate string driver
//takes string
//returns string
function mutilate(string){
	//do mutilation
	var output = string.repeat(1);
    output = mutilate_content(output);
	output = mutilate_diacritial(output);
	output = mutilate_tag(output);
    console.log("mutilation - complete");
	return output;
}

// "main"
// runs on click
function nonsenseGen(){
	var string = getString();
	string = mutilate(string);
	returnNonsense(string);
	console.log("DONE");
	console.log(""); //console spacing
}
 
$(document).ready(function(){
	$("#activate").click(nonsenseGen);
});