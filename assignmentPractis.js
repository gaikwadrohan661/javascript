 
 
//  let factorial=1;
//  for (let index = 6; index >=1; index--) {
//  factorial=factorial*index;
  
//  }
// console.log(`factorial ${factorial}`);


let arrOfRollNum=[10,20,30,40,50,60];
console.log(`Type of array: ${typeof arrOfRollNum}`);
// removing last element from string
arrOfRollNum.pop();
console.log(arrOfRollNum);
// removing first element 
arrOfRollNum.shift();
console.log(arrOfRollNum);
// updating the array element 
arrOfRollNum[2]=555;
console.log(arrOfRollNum);

// type of array
let arrayage = [12,14,34,43,45];
console.log(`Type of array :${typeof arrayage }`);

// array length
const lengthOfArray = arrayage.length;
console.log(`Length of array is :${lengthOfArray}`);

// Access zeroth index value 
const zerothIndexValue = arrayage[0];
console.log(`zeroth Index Value is : ${zerothIndexValue}`);

// Access the element 50
 const element = arrayage[arrayage.length-3];
 console.log(` Element is : ${element}`);

 // add new element in last position
 arrayage.push(80);
 console.log(arrayage);
  // add new element in first position
  arrayage.unshift(50);
  console.log(arrayage);
  // removing last element from array
  arrayage.pop();
  console.log(arrayage);
  // removing first element
  arrayage.shift();
  console.log(arrayage);
  // updating the element
  console.log("********* Updating the value of array *******");
  arrayage[0]=222;
  console.log(arrayage);
  // updating last value using lenth property

  arrayage[arrayage.length-1]=999;
  console.log(arrayage);
  // count total no of words from string using split method
  let str = "The kerela movie is the best movie"
  const word = str.split(" ");
  console.log(word);
  // find total char from the string
  const length = str.length;
  console.log( `length of string is: ${length}`);

  // slice method 
  const sliceMethod = arrayage.slice(3);
  console.log(sliceMethod);


  var arr = [12,13,14,15,16,17,18,19,20,21];
  const arrslice = arr.slice(2,5);
  console.log(arrslice);

  // splice method
  const splicearr = arr.splice(6);
  console.log(arr);
 console.log(splicearr);
 var arryNum = [12,13,14,15,16,17,18,19,20,21];
 const splicearry= arryNum.splice(2, 4);
 console.log(arryNum);
 console.log(splicearry);
// inserting element whithout replacing any element
console.log("*********inserting element **********");
 var arryRollNum = [12,13,14,15,16,17,18,19,20,21];
 console.log(arryRollNum);
  arryRollNum.splice(2, 0, 33, 44);
 console.log(arryRollNum);

 // inserting element  replacing element
 console.log("*********inserting element  by replacing value**********");
 var arryRollNum = [12,13,14,15,16,];
 console.log(arryRollNum);
 arryRollNum.splice(2, 2, 44,45,46);
 console.log(arryRollNum);
 // replacing  3 element with 2
 var arryRollNum = [12,13,14,15,16,];
 console.log(arryRollNum);
 arryRollNum.splice(2, 3, 2, 3, );
 console.log(arryRollNum);
