

let sbiBank = {
    bankName : "State Bank Of India",
    location :"Solapur",
    accountNumber : '07031228456',
    ifsc : "SBI0000323",
    interestRate : '12%',
}
console.table(sbiBank);

 let axisBank ={
    bankName : "Axis Bank Of India",
   location :"Solapur",
   accountNumber : '07031228457',
    ifsc : "SBI0000323",
     interestRate : '11%',
 } 
  console.table(axisBank);

let hdfcBank ={
    bankName : " HDFC Bank Of India",
    location :"Solapur",
    accountNumber : '07031228452',
    ifsc : "SBI0000323",
     interestRate :'14%',
 }
console.table(hdfcBank);
let yesBank = {
    bankName : " YES Bank Of India",
    location :"Solapur",
    accountNumber : '07031228459',
    ifsc : "SBI0000323",
    interestRate :'10%',

    showDetails: function () {
        console.log(
          `bankDetails: BankName :${this.bankname}, Location: ${this.location} ,AcountNumber: ${this.accountNumber}, ifsc: ${this.ifsc},interestRate: ${this.interestRate}`
        );
      },
    
}
showDetails();
 const Details= yesBank.showDetails();
 console.log(`Details about yes bank is ${Details}`);
console.table(yesBank);




