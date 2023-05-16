function copy(){
    console.log(" My name is: Rohan Gaikwad");
}
copy();
function study(){
    console.log(" swimming is my hobby");
}
study();
function personalDetails( firstName, lastName, collegeName){
console.log("My personal Detail is: ");
console.log("My name is", firstName,lastName);
console.log("MY college name is",collegeName);
}
personalDetails("Rohan","Gaikwad","SVERIS COE PANDHARPUR");

console.log("swaping ");
var sweety = "sweety";
var cutie = "cutie";
console.log("Before swap ...", "sweety=", sweety, "cutie=", cutie);
var temp = "cutie";
var cutie = "sweety";
var sweety = temp;
console.log("After swap ...", "sweety=", sweety, "cutie=", cutie);

console.log("\n***** Swaping three umbers*****");
var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log("Before swaping...","\n num1=",num1,"\n num2=",num2,"\n num3=",num3);
var temp = num1;
var num1 = num2;
var num2 = num3;
var num3= temp;
console.log("After swaping...","\n num1=",num1,"\n num2=",num2,"\n num3=",num3);
console.log("\n function ");

name1= "virat";
name2= "Anushka";
numOne = 1000;
numTwo = 2000;


function swapValueDude( valueone, valuetwo){ // arguments
    console.log("Before swap...", valueone, valuetwo);

    var temp = valueone;
    var valueone = valuetwo;
    var valuetwo = temp;
    console.log("After swap...", valueone,valuetwo);
}
swapValueDude(name1, name2);
swapValueDude(numOne, numTwo);

console.log("\n Addition of number");


function addThreeValues(a,b,c){
    var result = a+b+c;
    console.log(" Addition of num is ",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");