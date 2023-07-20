

console.log("Palindrome");
function isPal(str){
    let reverseStr = str.split("").reverse("").join("");
    if (reverseStr===str) {
        console.log(`${str} *Is a Palindrome *`);
    } else {
       
        console.log(`${str} It Is Not a Palindrome `);
    }
}
isPal("madam");
isPal("141");
isPal("sunday");
isPal("mom");
isPal("listen");
isPal("dad");