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
var language_dict = [
		['af', 'Afrikaans'], 
		['sq', 'Albanian' ],
		['am', 'Amharic'],
		['ar', 'Arabic'],
		['hy', 'Armenian'],
		['az', 'Azerbaijani'],
		['eu', 'Basque'],
		['be', 'Belarusian'],
		['bn', 'Bengali'],
		['bs', 'Bosnian'],
		['bg', 'Bulgarian'],
		['ca', 'Catalan'],
		['zh-CN', 'Chinese (Simplified)'],
		['zh-TW', 'Chinese (Traditional)'],
		['es', 'Spanish'],
		['pt', 'Portuguese'],
		['id', 'Indonesian'],
		['ja', 'Japanese'],
		['ru', 'Russian'],
		['fr', 'French'],
		['de', 'German'],
		// Chinese, Spanish, Arabic, Portuguese, Indonesian, Japanese, Russian, French and German. 
	];
const settingEnum = {
	MUT_CONTENT:	0,
	MUT_DIACRIT:	1,
	MUT_TAG:		2,
	MUT_LANG:		3,
	MUT_EXAMPLE:	-1,
};
var settingVars = {
	0: {"state":true,	"name":"MUT_CONTENT"}, //MUT_CONTENT
	1: {"state":true,	"name":"MUT_DIACRIT"}, //MUT_DIACRIT
	2: {"state":true,	"name":"MUT_TAG"}, //MUT_TAG
	3: {"state":true,	"name":"MUT_LANG"}, //MUT_LANG
	4: {"state":false,	"name":"MUT_EXAMPLE"}, //MUT_EXAMPLE
};
var settingIDs= {
	0: ["#toggle_content_label", "#toggle_content_box"], //MUT_CONTENT
	1: ["#toggle_diacrit_label", "#toggle_diacrit_box"], //MUT_DIACRIT
	2: ["#toggle_tag_label", "#toggle_tag_box"], //MUT_TAG
	3: ["#toggle_lang_label", "#toggle_lang_box"]  //MUT_LANG
};
var prevString = null;

function MutilationObject(heldString, offsetPosX = 0, offsetPosY = 0, langKey = 0){
	this.heldString = heldString;
	this.offsetPosX = offsetPosX;
	this.prevHeldString = prevString;
	this.langKey = langKey;
	this.mutilate_content = mutilate_content;
	this.mutilate_diacritial = mutilate_diacritial;
	this.mutilate_tag = mutilate_tag;
	this.mutilate_language = mutilate_language;
	this.limiter = function(){
		//clip string max length!
		if(this.heldString.length > 15000)
			this.heldString = this.heldString.substring(0,14999);
	}
}
 
//get input string
//getString modified to both keep track of the previous iteration of the string, as well as grab the string and hold it within an object as a string property.
//input is previous string or no input
//output is a MutilationObject
function getString(){
	//var string = {heldstring: $("#input").val(), offsetpositionx: 0, offsetpositiony: 0, previousheldstring: previousString, languageKey: 0  } //get string from input
	var string = new MutilationObject($("#input").val(), 0, 0, 0); //get string from input
	console.log(string);
	console.log("Input is: [" + string.heldString + "]");
	console.log("get - complete");
	return string;
}

//return Nonsense to page
//input is a MutilationObject
function returnNonsense(mutilatedString){
	//return string to page
	$("#output").html(mutilatedString.heldString);
	console.log("Output is: [" + mutilatedString.heldString + "]");
	prevString = mutilatedString;
	console.log("New PrevString is:", mutilatedString.heldString);
	console.log("return - complete");
}

//METHOD for MutilationObject
//modifies the content.
function mutilate_content(){
	var mutilatedString = this;
	//var mutilatedString = {heldstring: "", offsetpositionx: 0, offsetpositiony: 0, previousheldstring: string, languageKey: 0 }
	var pureHeldString = mutilatedString.heldString;
	mutilatedString.heldString = ""; //SAVE OLD INTO PURE, WIPE OLD FOR WRITING
	
	for (var x=0; x < pureHeldString.length; x++){
		if(pureHeldString.charAt(x)=='a'){
			mutilatedString.heldString += "TTTTTTTTTTTTTTTTTTTTTTTTTTTT";
		}
		if(pureHeldString.charAt(x)=='b'){
			mutilatedString.heldString +=  "racedobonbonsetonkkkkkkkkkkkorda";
		}
		if(pureHeldString.charAt(x)=='c'){
			mutilatedString.heldString +=  randomletter() + randomletter() + randomletter();
		}
		if(pureHeldString.charAt(x)=='d'){
			mutilatedString.heldString +=  "R" + randomletter() + "C" + randomletter() + "RD" + randomletter();
		}
		if(pureHeldString.charAt(x)=='e'){
			mutilatedString.heldString +=  "M" + randomletter() + "L" + randomletter() + "S";
		}
		if(pureHeldString.charAt(x)=='f'){
			mutilatedString.heldString +=  "Daniel, the Vito"
		}
		if(pureHeldString.charAt(x)=='g'){
			mutilatedString.heldString +=  "\n"
		}
		if(pureHeldString.charAt(x)=='h'){
			mutilatedString.heldString +=  "\n TTTTTTTTTTXTTTTTT"
		}
		if(pureHeldString.charAt(x)=='i'){
			mutilatedString.heldString +=  "SOMBERTONES " + randomletter() + randomletter() + randomletter();
		}
		if(pureHeldString.charAt(x)=='j'){
			var limit = Math.random*50;
			for ( var i=0; i<limit; i++) {
				mutilatedString.heldString +=  randomletter();
			}
		}
		if(pureHeldString.charAt(x)=='k'){
			mutilatedString.heldString +=  "\n"
		}
		if(pureHeldString.charAt(x)=='l'){
			mutilatedString.heldString +=  "\n" + randomletter();
		}
		if(pureHeldString.charAt(x)=='m'){
			mutilatedString.heldString +=  "MY NAME IS ";
			var namelength = Math.random()*10;
			for (i=0;i<namelength;i++){
				mutilatedString.heldString += randomletter();
			}
		}
		if(pureHeldString.charAt(x)=='n'){
			mutilatedString.heldString += "HOWQUAINT";
		}
		if(pureHeldString.charAt(x)=='o'){
			mutilatedString.heldString += "\n \n Nah \n";
		}
		if(pureHeldString.charAt(x)=='p'){
			mutilatedString.heldString += "DOINGTTTTTTTTTTDOINGTTTTTTDONGTTTTDOGTDOTTTTT";
		}
		if(pureHeldString.charAt(x)=='q'){
			mutilatedString.heldString += "QUAS WEX EXORT";
		}
		if(pureHeldString.charAt(x)=='r'){
			mutilatedString.heldString += "LET US TEST";
		}
		if(pureHeldString.charAt(x)=='s'){
			mutilatedString.heldString += " RUN RUN RUN";
		}
		if(pureHeldString.charAt(x)=='t'){
			mutilatedString.heldString += "IS THAT IT?";
		}
		if(pureHeldString.charAt(x)=='u'){
			mutilatedString.heldString += "THE END IS NEAR";
		}
		if(pureHeldString.charAt(x)=='v'){
			mutilatedString.heldString += "TSKRAW";
		}
		if(pureHeldString.charAt(x)=='w'){
			mutilatedString.heldString += "ESCRONG";
		}
		if(pureHeldString.charAt(x)=='x'){
			mutilatedString.heldString += "ISCIR";
		}
		if(pureHeldString.charAt(x)=='y'){
			mutilatedString.heldString += "ENNYE";
		}
		if(pureHeldString.charAt(x)=='z'){
			mutilatedString.heldString += "I DON'T SEE NOTHING WRONG";
		}
		if(pureHeldString.charAt(x)=='A'){
		mutilatedString.heldString += "\n this \n isn't \n blowing \n over";
		}
		if(pureHeldString.charAt(x)=='B'){
			mutilatedString.heldString += "REGROW";
		}
		if(pureHeldString.charAt(x)=='C'){
			mutilatedString.heldString += "NEGATE";
		}
		if(pureHeldString.charAt(x)=='D'){
			mutilatedString.heldString += "NO STYLE NO GRACE";
		}
		if(pureHeldString.charAt(x)=='E'){
			mutilatedString.heldString += "\n";
		}
		if(pureHeldString.charAt(x)=='F'){
			mutilatedString.heldString += "PROJARED \n";
		}
		if(pureHeldString.charAt(x)=='G'){
			mutilatedString.heldString += "MYSTICAL \n";
		}
		if(pureHeldString.charAt(x)=='H'){
			mutilatedString.heldString += "MAGICAL \n";
		}
		if(pureHeldString.charAt(x)=='I'){
			mutilatedString.heldString += "\n";
		}
		if(pureHeldString.charAt(x)=='J'){
			mutilatedString.heldString += "LURE UNTO";
		}
		if(pureHeldString.charAt(x)=='K'){
			mutilatedString.heldString += "WHAT IS THIS \n \n \n";
		}
		if(pureHeldString.charAt(x)=='L'){
			mutilatedString.heldString += "\n \n";
		}
		if(pureHeldString.charAt(x)=='M'){
			mutilatedString.heldString += "ORIGIN" + randomletter() + randomletter() + randomletter();
		}
		if(pureHeldString.charAt(x)=='N'){
			mutilatedString.heldString += "RUNDOWN \n \n";
		}
		if(pureHeldString.charAt(x)=='O'){
			mutilatedString.heldString += "I'M NOT GONNA LIE THIS IS DEFINITELY ME WHEN";
		}
		if(pureHeldString.charAt(x)=='P'){
			mutilatedString.heldString += "90009099990009009999909099";
		}
		if(pureHeldString.charAt(x)=='Q'){
			mutilatedString.heldString += "Q? REALLY? Q?";
		}
		if(pureHeldString.charAt(x)=='R'){
			mutilatedString.heldString += "OTTOMANSHRIMP";
		}
		if(pureHeldString.charAt(x)=='S'){
			mutilatedString.heldString += randomletter() + randomletter() + randomletter() + randomletter() + "BERT";
		}
		if(pureHeldString.charAt(x)=='T'){
			mutilatedString.heldString += "MCDONGALDS";
		}
		if(pureHeldString.charAt(x)=='U'){
			mutilatedString.heldString += "\n";
		}
		if(pureHeldString.charAt(x)=='V'){
			mutilatedString.heldString += "OEUF";
		}
		if(pureHeldString.charAt(x)=='W'){
			mutilatedString.heldString += "WONDER";
		}
		if(pureHeldString.charAt(x)=='X'){
			mutilatedString.heldString += "SLAPPIN";
		}
		if(pureHeldString.charAt(x)=='Y'){
			mutilatedString.heldString += "CULT";
		}
		if(pureHeldString.charAt(x)=='Z'){
			mutilatedString.heldString += "CHAD";
		}
		if(pureHeldString.charAt(x)=='1'){
			mutilatedString.heldString += "\n Prime";
		}if(pureHeldString.charAt(x)=='2'){
			mutilatedString.heldString += "\n Unbreakable";
		}if(pureHeldString.charAt(x)=='3'){
			mutilatedString.heldString += "\n ♂";
		}if(pureHeldString.charAt(x)=='4'){
			mutilatedString.heldString += " Lunchables™ \n";
		}if(pureHeldString.charAt(x)=='5'){
			mutilatedString.heldString += "\n Hot and Spicy";
		}if(pureHeldString.charAt(x)=='6'){
			mutilatedString.heldString += "Unpredicted";
		}if(pureHeldString.charAt(x)=='7'){
			mutilatedString.heldString += "The eeeeeeeeeeeeeeeeeeeeeeeeeeend?";
		}if(pureHeldString.charAt(x)=='8'){
			mutilatedString.heldString += "The end. \n";
		}if(pureHeldString.charAt(x)=='9'){
			mutilatedString.heldString += "But really this time.";
		}if(pureHeldString.charAt(x)=='0'){
			mutilatedString.heldString += "SISEPHAM";
		}if(pureHeldString.charAt(x)=='!'){
			mutilatedString.heldString += "Irony. \n";
		}if(pureHeldString.charAt(x)=='@'){
			mutilatedString.heldString += "everyone";
		}if(pureHeldString.charAt(x)=='#'){
			mutilatedString.heldString += "$" + randomletter() + randomletter() + randomletter();
		}if(pureHeldString.charAt(x)=='$'){
			mutilatedString.heldString += "Affordance";
		}if(pureHeldString.charAt(x)=='%'){
			mutilatedString.heldString += "\n";
		}if(pureHeldString.charAt(x)=='^'){
			mutilatedString.heldString += "Upwa" + randomletter() + randomletter();
		}if(pureHeldString.charAt(x)=='&'){
			mutilatedString.heldString += "Inseperable";
		}if(pureHeldString.charAt(x)=='*'){
			mutilatedString.heldString += "Pound";
		}if(pureHeldString.charAt(x)=='('){
			mutilatedString.heldString += "Left";
		}if(pureHeldString.charAt(x)==')'){
			mutilatedString.heldString += "Right";
		}if(pureHeldString.charAt(x)=='-'){
			mutilatedString.heldString += "Away" + randomletter() + "\n";
		}if(pureHeldString.charAt(x)=='_'){
			mutilatedString.heldString += "SANS";
		}if(pureHeldString.charAt(x)=='+'){
			mutilatedString.heldString += "UNITEDWESTAND";
		}if(pureHeldString.charAt(x)=='='){
			mutilatedString.heldString += "SUM";
		}if(pureHeldString.charAt(x)=='{'){
			mutilatedString.heldString += "LEFTBEHIND";
		}if(pureHeldString.charAt(x)=='['){
			mutilatedString.heldString += "STAT";
		}if(pureHeldString.charAt(x)=='}'){
			mutilatedString.heldString += "I will stand unfaltering against your corruption, trading blow for blow, and emerge victorious.";
		}if(pureHeldString.charAt(x)==']'){
			mutilatedString.heldString += "BLOCK";
		}if(pureHeldString.charAt(x)==';'){
			mutilatedString.heldString += "Whoa, is that a programmer?";
		}if(pureHeldString.charAt(x)==':'){
			mutilatedString.heldString += "Call";
		}if(pureHeldString.charAt(x)=='|'){
			mutilatedString.heldString += "Spoiler";
		}if(pureHeldString.charAt(x)=='<'){
			mutilatedString.heldString += "Two Evils";
		}if(pureHeldString.charAt(x)==','){
			mutilatedString.heldString += "Breathe In";
		}if(pureHeldString.charAt(x)=='>'){
			mutilatedString.heldString += "Sum of Parts";
		}if(pureHeldString.charAt(x)=='.'){
			mutilatedString.heldString += ".";
		}if(pureHeldString.charAt(x)=='?'){
			mutilatedString.heldString += ", Don't you agree?";
		}if(pureHeldString.charAt(x)=='/'){
			mutilatedString.heldString += "What's a path?";
		}if(pureHeldString.charAt(x)=='~'){
			mutilatedString.heldString += "Wingdings";
		}if(pureHeldString.charAt(x)=='`'){
			mutilatedString.heldString += "You've found a hidden message. But I only have two sentences to tell you it.";
		}
		mutilatedString.limiter();
	}
	mutilatedString.limiter();
	console.log("mutilate_content DONE", mutilatedString.heldString);
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


//METHOD for MutilationObject
//mutilates string via adding random combining diacritcal marks to each character
function mutilate_diacritial(){
	var mutilatedString = this;
	//diacriticals are from 0300 to 036F
	var pureString = mutilatedString.heldString;
	var output = "";
	for(i = 0; i < pureString.length; i++){
		var num_prefix = Math.floor(Math.random() * 10);
		var num_suffix = Math.floor(Math.random() * 10);
		for(j = 0; j < num_prefix; j++){
			//num is some random integer from 0 + 768 (0x0300) to 111 + 768 (0x36F) in Decimal
			var num = Math.floor(Math.random() * 112) + 768; 
			var diacrit = String.fromCharCode(num);
			output += diacrit;
		}
		var sub = pureString.substring(i, i+1);
		output += sub;
		for(j = 0; j < num_suffix; j++){
			//num is some random integer from 0 + 768 (0x0300) to 111 + 768 (0x36F) in Decimal
			var num = Math.floor(Math.random() * 112) + 768; 
			var diacrit = String.fromCharCode(num);
			output += diacrit;
			mutilatedString.limiter();
		}	
	}
	mutilatedString.heldString = output;
	mutilatedString.limiter();
	console.log("Post Diacrit: ", mutilatedString.heldString);
}

//METHOD for MutilationObject
//REQUIREMENT: must be run last or otherwise have span tags UN-modified
//mutilates string by adding style tags around each character with randomized color and font-size values
function mutilate_tag(){
	var mutilatedString = this;
	var output = "";
	var pureString = mutilatedString.heldString;
	
	for(i = 0; i < pureString.length; i++){
		//MUTILATE COLOR
		//num is some random integer from 0 to 16777215 (0xFFFFFF), 
		var num = Math.floor(Math.random() * 16777215) + 1;
		var hex = decimalToHexString(num);
		//size is some random number from 1 to 2
		var size = Math.random() * 2 + 1;
		var sub = pureString.substring(i, i+1);
		//output += "<span style=\"color: #" + hex + ";" +
		//		"font-size:" + size + "em\">" + sub + "</span>";
		var span = $('<span>'+sub+'</span>').clone()
						.css({
							"color" : ("#" + hex),
							"font-size" : (size + "em")
						}).prop('outerHTML');
		output += span;
	}
	mutilatedString.heldString = output;
}

//mutilate string driver
/*//takes string
//returns string
function mutilate_A(string){
	//do mutilation
	var output = string.repeat(1);
	output = mutilate_content(output);
	output = PrepQuery(output);
}
function mutilate_B(string){
	console.log(string);
	var output = mutilate_diacritial(string);
	output = mutilate_tag(output);
	console.log("mutilation - complete");
	nonsenseGen_callback(output);
}
function nonsenseGen_callback(string){
	returnNonsense(string);
	console.log("DONE");
	console.log(""); //console spacing
*/


/*
function PrepQuery(sourceText){
	console.log(sourceText);
	var sourceLang = 'en';
	var targetLang = language_dict[2][0];
	var query = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
            + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
	$.getJSON(query)
		.done(function( json ){
			console.log("ajax success!");
			console.log(json);
			mutilate_B(json[0][0][0]); //continue mutilation 
		})
		.fail(function( xhr, status, errorThrown){
			console.log("ajax error! " + errorThrown + " Status:" + status);
			mutilate_B(sourceText); //defer to not translating
		})
		.always(function(){
			console.log("ajax complete.");
		});
	return sourceText;
}*/

//retrieves result
function awaitTranslation(promise){
	var result_string = null;
	promise.then(
		function(result){
			result_string = result;
		}
	);
	console.log("promise results:", result_string);
	return result_string;
}


function mutilate_language(){
	console.log("start lang mutilate");
	var mutilatedString = this;
	var sourceText = mutilatedString.heldString.substring(0,999);
	//do json query of google translate
	console.log(sourceText);
	var sourceLang = 'en';
	var targetLang = $("#lang_select").val();
	//Source of URL: https://ctrlq.org/code/19909-google-translate-api
	var query = {
			url: "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
				+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText),
			dataType: 'json',
			async: false //Breaking the rules heavily. This is discouraged.
		};
	var promise = 	$.ajax(query)
		.done(function( json ){
			console.log("ajax success!", json);
			mutilatedString.heldString = "";
			for (var i = 0; i < json[0].length; i++){
				console.log(json[0][i][0]);
				mutilatedString.heldString += json[0][i][0]; //continue mutilation 
			}
			mutilatedString.limiter();	
		})
		.fail(function( xhr, status, errorThrown){
			console.log("ajax error! " + errorThrown + " Status:" + status);
		})
		.always(function(){
			console.log("ajax complete.");
		});

}


  
//takes MutilationObject
//returns MutilationObject
function mutilate(mutilatedString){
	//do mutilation
	//NOTE FOR WILL
		//KEEP THIS ORDER FOR MUTILATIONS
		//OR DON'T, BUT!
			//LANGUAGE MUST GO BEFORE DIACRITS OR ELSE IT'S WORTHLESS
			//TAG MUST GO AT THE END OR ELSE YOU GET GARBAGE
	if (settingVars[settingEnum.MUT_CONTENT].state){ //CONTENT
		mutilatedString.mutilate_content();
	}
	if (settingVars[settingEnum.MUT_LANG].state){ //CONTENT
		mutilatedString.mutilate_language();
	}
	if (settingVars[settingEnum.MUT_DIACRIT].state){ //CONTENT
		mutilatedString.mutilate_diacritial();
	}
	if (settingVars[settingEnum.MUT_TAG].state){ //CONTENT
		mutilatedString.mutilate_tag();
	}
    console.log("mutilation - complete");
	return mutilatedString;
}

// "main"
// runs on click
function nonsenseGen(){
	$("#output").html("");
	$("#loading").show();
	$("#greeting").hide();
	var string = getString();
	//string = mutilate_A(string);
 
	string = mutilate(string);
	returnNonsense(string);
	$("#loading").hide();
	console.log("DONE");
	console.log(""); //console spacing
}

function updateCheckboxes(){
	var settingIDs_length = Object.keys(settingIDs).length;
	for (var i = 0; i < settingIDs_length; i++){
		var setting = settingVars[i];
		var temp = settingIDs[i];
		for (var j = 0; j < 2; j++){
			var input_id = temp[j];
			console.log(input_id);
			if(setting.state == true){
				$(input_id).prop("checked", true);
				console.log("checked");
			}
			else{
				$(input_id).prop("checked", false);
				console.log("unchecked");
			}
		}
	}
}

function toggleMutilationSettings(selected_setting){
	var setting = settingVars[selected_setting];
	var state = setting.state;
	setting.state = !state;

	console.log(selected_setting);
	console.log("toggled", settingVars[selected_setting].name, setting.state);
}

/*function labelEvent(){
	console.log("label click event!");
	//var labelID = $(this).attr('for');
	//$('#'+labelID).trigger('click');
}*/

function boxEvent(){
	console.log("box click event!", $(this).attr('id'));
	var box_id = "#" + $(this).attr('id');
	var thisSettingEnum = 0;
	var settingIDs_length = Object.keys(settingIDs).length;
	for (var i = 0; i < settingIDs_length; i++){
		if (box_id == settingIDs[i][1]){
			console.log(box_id, settingIDs[i][1],i);
			toggleMutilationSettings(i);
		}
	}
	updateCheckboxes();
}

$(document).ready(function(){
	var settingIDs_length = Object.keys(settingIDs).length;
	$("#activate").click(nonsenseGen);
	for (var i = 0; i < settingIDs_length; i++){
		var temp = settingIDs[i];
		console.log(temp);
		for (var j = 0; j <= 1; j++){
			var input_id = temp[j];
			console.log(input_id);
			console.log("j: ", j);
			//if (j == 0) $(input_id).click(labelEvent);
			/*else*/ $(input_id).click(boxEvent);
		}
	}
	updateCheckboxes();
	var lang_select_DOM = $("#lang_select");
	$.each(language_dict, function(index, subarray) {   
		lang_select_DOM
			.append($("<option></option>")
				.attr("value",subarray[0])
				.text(subarray[1])); 
	});
	$("#loading").hide();
});