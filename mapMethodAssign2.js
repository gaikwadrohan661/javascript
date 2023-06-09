 console.log("1.)=======greater than 50  number========")
const array = [20,11,40,25,37,49,9,90,60,2,19 ];

// WAP to get the elements greater than 50
const arrayGreaterThan50 = array.filter( (element)=> {
    return element>50;
} );
console.log( arrayGreaterThan50);
 

console.log("2.)===========even number========");

const arrayEven1 = array.filter( (element) => {
    return element%2==0;
} );
console.log(arrayEven1);
 console.log("3.)=========odd number ===========");
 const arrayOdd = array.filter( (element) => {
    return element%2==1
} );
console.log(arrayOdd);

console.log("4.)======numbers which are multiplay of 5==========");
 
 
const arraymultiplay = array.filter( (element) => {
    return element%5==0;
} );
console.log(arraymultiplay);



class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(" 1.)====Get the list of Wipro employee names =====");
const arrayWiproEmployees = array_employees.filter( (employee) => {
    return employee.emp_company == "Wipro";
} );
 //console.log(arrayWiproEmployees);  
  
 const arrayWiproEmployees1= arrayWiproEmployees.map( (employee) => {
    return employee.emp_name;
});

console.log(arrayWiproEmployees1);
console.log('2.========employee from IT OR HR department list========');
 const departmentEmp = array_employees.filter((employee) =>{
  return employee.emp_dept=="IT"||employee.emp_dept=="HR";
 });

 const xyzEmp =  departmentEmp .map((employee)=>{
    return employee.emp_name;

 });
 console.log(xyzEmp);

 console.log('====3.).employee whose emp id. are greater than 50===========');
 const empID = array_employees.filter( (employee)=> {
    
    return employee.emp_id>=50;
});
const arrayId =empID.map( (employee)=> {
    return employee.emp_name;
});
console.log(arrayId);  

console.log("===4.) using employee name start with  A , V , M ======");
const empNames= array_employees.filter((employee)=>{
   return employee.emp_name.startsWith ("A")|| employee.emp_name.startsWith("V" )||employee.emp_name.startsWith("M");
});
const namein = empNames.map((employee)=>{
    return employee.emp_name;
});
    console.log(namein);
     
    console.log('5.)=====average salary of the employee for all department ')

    const averagedept =array_employees.filter((employee)=>{
        return employee.emp_salary;
     });
     let sum1 = 0; 
     averagedept.forEach ((employee) =>{
       sum1 =sum1+employee.emp_salary;
     })
   const aver1 = sum1/averagedept.length;
    
   console.log(`average of department ${aver1}`);
  console.log('6.)=====Average of salary Of IT department ======');
  const averageIT =array_employees.filter((employee)=>{
     return employee.emp_dept=="IT";
  });
  let sum = 0; 
  averageIT.forEach ((employee) =>{
    sum =sum+employee.emp_salary;
  })
const aver = sum/averageIT.length;
 
console.log(`average of it dept ${aver}`);