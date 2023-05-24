function factorialNum(num){
    
    let factorial =1;
for (let index = num;index >= 1; index--) {
    factorial = factorial * index;
}if (num==undefined) {
       
       console.log(`invalid input= ${num}`);
    } else {
        
    }
    return factorial;

}
 
console.log("-------------------------------------------")
let fact=factorialNum(5);
console.log(` factorial of 5 is:-  ${fact}`);

 
let fact1=factorialNum(3);
console.log(` factorial of 3 is:-  ${fact1}`);
  


factorialNum(null)


       
let fact3=factorialNum(8);
console.log(` factorial of 8 is:-  ${fact3}`);

    
let fact4=factorialNum(undefined);


  
let fact5=factorialNum(9);
console.log(` factorial of 9 is:-  ${fact5}`);

 
let fact6=factorialNum(0);
console.log(` factorial of 0 is:-  ${fact6}`);


console.log("-----------------------------------------------------------------------")