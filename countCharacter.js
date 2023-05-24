function countCharA(str){
    let count=0;
    for (let index = 0; index <str.length; index++) {
        let char=str.charAt(index);
        if (char=='a' || char=='A') {
           // console.log(`Total count of a is:${char}`);
            count++;
        }
    }
    console.log(`Total count of 'a' or 'A' is=${count}`);
    }
    console.log(`Given string="I am Learning JavaScript,The Language of Internet"`);
    countCharA("I am Learning JavaScript,The Language of Internet");
    console.log(`Given string="My Favourite Movie is LAggAn"`);
    countCharA("My Favourite Movie is LAggAn")