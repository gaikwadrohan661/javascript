var arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Type of array: ${typeof arrayOfFruits}`);

let lengthOfArray = arrayOfFruits.length;
console.log(`Length of array is : ${lengthOfArray}`);


// Access the array element is first
const thirdIndexValue = arrayOfFruits[1];
console.log(`Third index value: ${thirdIndexValue}`);

// Accessing last element
let arrayLength = arrayOfFruits.length;
const lastElement = arrayOfFruits[arrayLength-1];
console.log(`Last element: ${lastElement}`);
console.log("                                                                                        ")

// splice for insertion
var arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayOfFruits);
arrayOfFruits.splice(1, 0, "Papaya")
console.log(arrayOfFruits);
 console.log("                                                                       ")
 
 

// Removing last element

console.log("3......Remove From Mango..............");

var arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
 arrayOfFruits.splice(3,1);
 console.log(arrayOfFruits)
  console.log("                                       ")
 console.log("4...Insert an Element Pineapple..................");
 console.log(arrayOfFruits);
arrayOfFruits.splice(0, 0,"Pineapple" )
console.log(arrayOfFruits);
console.log("                                                 ")

console.log("                                       ")
console.log("5...Insert an Element Dragon Fruit.............");
 
var arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayOfFruits);
arrayOfFruits.splice(4, 0, "Dragon Frui")
console.log(arrayOfFruits);

console.log("                                       ")
console.log("6...Replace an Element Orange with Kiwi............");
var arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
// Update array element
arrayOfFruits[1] = "Kiwi";
console.log(arrayOfFruits);
var arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("                                       ")
console.log("7..Log The Element .Starting....1 ,4.......");
const sliceArr = arrayOfFruits.slice(1, 4);
console.log(sliceArr);



console.log("                                       ")
console.log("8..Last Three Element ..........");
 
var arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const slicedArray = arrayOfFruits.slice(2);
console.log(slicedArray);