function stringHandsOn(givenString){
    console.log()

}
console.log("1).Given string as it is ------->>", "Hey you are doing good  keep it up      ");
stringHandsOn("   Hey you are doing good keep it up         ");
 
console.log(" -------------------------------------------");

var greet =" Hey you are doing good  keep it up      ";
var greetLength = greet.length;
console.log("2.)Total number of character in given string is: ", greetLength);

console.log(" -------------------------------------------");
var trimmedgreet = greet.trim();
var lengthAfterTrim = trimmedgreet.length;
console.log("3.)After remove loading and travlling extra spacelength---->> ",trimmedgreet, trimmedgreet.length );

console.log(" -------------------------------------------");
console.log("4.)Total number of removed extra spaces  : ", greetLength-lengthAfterTrim);


console.log(" -------------------------------------------");
var charAtZeroIndex = trimmedgreet.charAt(0);
var charAtLastIndex = trimmedgreet.charAt(trimmedgreet.length-1);
console.log("5.)Char at zero index: ",charAtZeroIndex);
console.log("Char at last index: ",charAtLastIndex);
 

var greet = "Hey you are doing good keep it up";
var resultSplit = greet.split(" ");

console.log("6.)Total number of words avaliable in the string: ",resultSplit.length);
 
 

var indexOfgood = greet.indexOf("good")
console.log("7.)Index of word good is: ", indexOfgood);

console.log(" -------------------------------------------");
var greet = "Hey you are doing good ";
var sliceResult = greet.slice(18);
console.log("Slice Result is: ", sliceResult);
 
console.log(" -------------------------------------------");
var subStringResult = greet.substring(5);
var sliceResult = greet.slice(22);
console.log("Substring result is: ", subStringResult);


var includeResult = greet.includes("ing");
console.log("8.)Is Hey you are doing good,keep it up: string ends with character 'up' ", includeResult);

console.log(" -------------------------------------------");
var greet = "Hey you are doing good ";
var includeResult = greet.includes("ing");
console.log("9)Is Hey you are doing good,keep it up: string ends with character 'Hey' ",includeResult);

console.log(" -------------------------------------------");

var greet = "   Hey you are doing good       ";
var includeResult = greet.length
console.log("10.)string: Hey you are doing good, keep it up: length of string:- ", includeResult );