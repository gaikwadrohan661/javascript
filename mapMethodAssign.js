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
const emp_radha=new Employee(33,"Rdha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

//console.log(`=====list of employee=========`);
 //const empName = [];
 //array_employees.forEach( (employee)=>{
   // empName.push(employee.emp_name);

 //});
 //console.log(empName);
console.log("1.)========get the list of all employee names=============");
 const empNames = array_employees.map( ( employee) =>{
    return employee.emp_name;
 
 });
 console.log(empNames);

  
  console.log('2.)=======list of department of employee========');
 const department =[];
 array_employees.map((employee)=>{
    department.push(employee.emp_dept)
 });
 
 console.log(department);

 console.log('3.)=======list of employee id ========');

 const Id =[];
 array_employees.map((employee) =>{
    Id.push(employee.emp_id);
 });
 console.log(Id);