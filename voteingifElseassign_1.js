function voteEligibility(age,name){
console.log(`Hey '${name}" Your Entered age is : ${age} `);
if(age <=0 || age > 120 || age==undefined) {
    console.log(" invalid data,please enter valid age");

}
else
    if (age>0 && age < 18) {
        console.log("yoy are not elogible for voting  ");
    }
    else
    if (age>18 && age <=120 ) {
         console.log("You are Eligible for voting  ", );
    }
}
voteEligibility( 45,`Rohan`);
voteEligibility( 17,`Rohan`);
voteEligibility( 8,`Rohan`);
voteEligibility( 20,`Rohan`);
voteEligibility( -10,`Rohan`);
voteEligibility( 200,`Rohan`);
voteEligibility( 0,`Rohan`);
voteEligibility( `undrfined`);
voteEligibility( `null`);
