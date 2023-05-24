
console.log(`******************* 1 ******************`);
var word = "JavaScript Language Of Internet";
// a e i o u == A E I O U
var count = 0;
console.log("vowels is:");
for (let index = 0; index < word.length; index++) {
    
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }
    
}

console.log(`Count total vowels: ${count}`);

console.log(`******************* 1 ******************`);

console.log(" Cube of number 1,2,3,4,5 is:");
function sumOfCube(){
    var sum=0;
    for(i=1;i<=5;i++){
        var cube =i*i*i;
        console.log(`cube of ${i}: = ${cube}`);
       sum=sum+cube;
       
    }
    console.log(`Addition of all cubes is : ${sum}`);   
}
sumOfCube();

console.log(`******************* 3 ******************`);

function oddPositionedChars(resultString){
    
    let str ="";
    for(i=0; i<=resultString.length; i++){
       var char = resultString.charAt(i);
    if(i%2!=0 && char!=" "){
    
        str=str+ char;

    }
}
console.log(`Odd Position Characters: ${str}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");

