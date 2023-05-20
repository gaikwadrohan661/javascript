

function interviewEligibility(gradScore,hscScore,sscScore,candidateName){
     if (gradScore>= 70 || hscScore>=80 || sscScore>90) {
        
        console.log("congrates  you are eligible for interview")
     }
     else
     if (gradScore<= 70 || hscScore<=80 || sscScore<90) {
      console.log("You are not eligible for interview");
     }
     

}
interviewEligibility(80,86,90,"Rohan");
interviewEligibility(70,65,55,"onkar");
interviewEligibility(60,79,88,"vishal");
