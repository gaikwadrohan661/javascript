 
 
 let show = () => {
    console.log("Good Morning,Today is monday");
}
show();
console.log("*******Multiplication of given value******");
let mul = (num1,num2,num3=1) =>{
const result = num1*num2*num3;
console.log(`Multiplication of given value is: ${result}`);
}
mul(5,5,2);
mul(10,4);
console.log("*******Addition of given value is :******");
let add = (a, b, c,  d, e ,f) =>{
const addition = a+b+c+d+e+f;
console.log(`Addition of given value is ${addition}`);

return addition;

}
 const result = add(100,100,200,349,756);
