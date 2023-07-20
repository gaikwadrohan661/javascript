

function stringHandson(givenString){
    console.log("given string is",givenString);

    var result = givenString.length;
    console.log("Given string length is",result);

    var GivenString = givenString;
    var result = GivenString.trim ();
    console.log("Trimmed string is ", result);
     var resultlength = result.length;
     console.log("After trim string lenth is",resultlength);

      var charatzeroindex = result.charAt('0');
      console.log(`Char at zero index is ${charatzeroindex}`);

      var charatlastindex = result.charAt(result.length - 1);
      console.log(`Char at last  index is ${charatlastindex}`);

      var charatfirstindex = result.charAt('1');
     console.log(`Char at last  index is ${charatfirstindex}` );

}
stringHandson("   Hey you are doing good, keep it up    ");