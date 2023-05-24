// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
for (let index = 5; index <=50; index=index+5) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");



for (let Index=190; Index>=19; Index= Index-19) { // index = 11
    console.log(Index); // 0 1  2 ... 10 
}
console.log("After loop");

for (let Index=8; Index<=80; Index= Index+8) { 
    console.log(Index); 
}
console.log("After loop");

// WAP to get reverse string
// JavaScript = J a v a S c r  i  p  t
var str = "JavaScript"; // 9
for (let index = 0; index < str.length; index++) { // 0  1   2
     var char = str.charAt(index); // J  a v
     console.log(char); 
}


// WAP to get reverse string
var str = "JavaScript"; // 9
var reverseString=""
for (let index = str.length; index >= 0; index--) { // 0  1   2
     var char = str.charAt(index); // J  a v
     reverseString=reverseString.concat(char);
     console.log(char); 
}
console.log(reverseString);


function reverseWord(word){
    var reverseString = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // index = 9  8 
        var char = word.charAt(index);
        reverseString = reverseString.concat(char);    
    }
console.log(reverseString);
}
reverseWord("JavaScript");
reverseWord("Google Chrome");
reverseWord("Developer");