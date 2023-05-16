
function show(){
 console.log(" Show function");
}
show()
console.log( "After function");

numOne=100;
numTwo=200;

name1= "Rohan";
name2= "Rohit";

function swapVariables( valueone, valuetwo){ // arguments
    console.log("Before swap...", valueone, valuetwo);

    var temp = valueone;
    var valueone = valuetwo;
    var valuetwo = temp;
    console.log("After swap...", valueone,valuetwo);
}
swapVariables(numOne, numTwo);
swapVariables(name1, name2);