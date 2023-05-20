function monthOfYear(monthNum) {
    switch (monthNum) {
      case 1:
        console.log(` jan  as month number is ${monthNum}`);
        break;
      case 2:
        console.log(` feb as month number is ${monthNum}`);
        break;
      case 3:
        console.log(` march as month number is ${monthNum}`);
        break;
      case 4:
        console.log(`April as month number is ${monthNum}`);
        break;
      case 5:
        console.log(` MAy as month number is ${monthNum}`);
        break;
      case 6:
        console.log(` June as month number is ${monthNum}`);
        break;
      case 7:
        console.log(` July as month number is ${monthNum}`);
        break;
        case 8:
        console.log(` Aug as month number is ${monthNum}`);
        break;
        case 9:
        console.log(` Sept  as month number is ${monthNum}`);
        break;
        case 10:
        console.log(` oct as month number is ${monthNum}`);
        break;
        case 11:
        console.log(` nov as month number is ${monthNum}`);
        break;
        case 12:
        console.log(` Dec as month number is ${monthNum}`);
        break;
      default:
        console.log(`Invalid input ==>  ${monthNum}`);
        break;
    }
  }
  monthOfYear(1);
  monthOfYear(2);
  monthOfYear(3);
  monthOfYear(4);
  monthOfYear(5);
  monthOfYear(6);
  monthOfYear(7);
  monthOfYear(8);
  monthOfYear(9);
  monthOfYear(10);
  monthOfYear(11);
  monthOfYear(12);
  
  monthOfYear(null);
  monthOfYear(undefined);
  monthOfYear(NaN);