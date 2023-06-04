let arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log("***********firstelement and last element************");
console.log(`Given string is : ${arrayFruits}`);
const firstElement = arrayFruits[0];
console.log(`firstElement is : ${firstElement}`);
const lastElement = arrayFruits[arrayFruits.length - 1];
console.log(`lastElement is : ${lastElement}`);

console.log("*********** add first element ************");
arrayFruits.unshift("Papaya");
console.log(arrayFruits);

console.log("*********** remove Mango element ************");
arrayFruits.splice(4, 1,);
console.log(arrayFruits);

console.log("*********** Add Pineapple  element at last  ************");
arrayFruits.push("Pineapple");
console.log(arrayFruits);

console.log("*********** Add Dragon Fruit  element before  Water Melon ************");
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(arrayFruits);

arrayFruits.splice(2, 1, "kiwi ");
console.log(arrayFruits);
console.log(arrayFruits[1]);
console.log(arrayFruits[2]);
console.log(arrayFruits[3]);
console.log(arrayFruits[4]);


const slicedArray = arrayFruits.slice(arrayFruits.length -2);
console.log(slicedArray);


