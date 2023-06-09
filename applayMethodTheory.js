
const person = {
    name: "Stew",
    age: 54
}
function sayHello(company) {
    console.log(` ${person.name} ${person.age}  ${company}`);
}

console.log("apply()");
sayHello.apply(person, ["Apple" , "CEO"] );