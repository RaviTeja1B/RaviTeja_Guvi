//var vs let vs const
//var=> it is a tradiitions keyword used to declare variable
//let => it is ussed to declare variable in ES6
// var => functional scope and global scope but it is not limited to block scope{}
//let==> block scope. you can't access any data outside of the block scope

/*
var num=1;
if(num===1){
    var num=2   //2
    var num=3   //3
    console.log(num)//3
}
console.log(num)//3  The number  is accesed outside of  the block.



//let num_1=1
if(num_1===1){
    let num_1=3    //3
   // let  num_1=4       //4   cannot   redeclare   the  block  scope.
    num_1=4      //4
   console.log(num_1)// 4
}
console.log(num_1)    //1  The  number    is  not accesed  in  outsid   the  block.
                       //  the   18   line is  not  there  means   num_1   is   not   defined
                           */
/*
                       // for loop is a block
for(var i=0;i<=10;i++){
    console.log(i)// 0123456789 10
}
console.log(i) //0123456789 10 11


for (let j=0;j<=10;j++){
    console.log(j)// 012345678 10
}
console.log(j) //error j is not defined
                            */


// const is a blockscope 1.redeclaaration is not possible
//2.re-assignment of value is not possiple
/*
const num=3
num=4
console.log(num)// type error const is not assigned
            */   
/*
let course="mern";
if(course=="mern"){
    let dept2="Full Stack Developer"
    var dept1="React developer";
    
}
console.log(course)//mern
console.log(dept1)// React Developer
console.log(dept2)// let is block scope no output is generated and  referenceError and dept2 is not defined
  
*/


/*
//function bolock=>yes

var getData=()=>{
    var a=10;
    let b=20;
    const c=30;
}
getData()
console.log(a)//a not defined
console.log(b)// b not defined 
console.log(c)// c not defined    */
// for the let and var valures are not defined

/*
function getData1(){
    var a1=10
    let b1=20
    const c1=30
}
getData1()
console.log(a1)
console.log(b1)
console.log(c1)

                           */




//Array and Object Destructuring
//Ectracting process where we take out a part of element 
// and assign them into multiple variables


//create an array

let array1  =[10,20,30,40,50];
// create 3 variables
let num1, num2, num3;
//destructuring
[num1,num2,num3]=array1
// Tamplate=> (~)==>backticks wwith ${}===>Customized string instead string interpolation concept
console.log(`
Number1:${num1}
Number2:${num2}
Number3:${num3}`
)       




let employee ={
    name: " Ravi",
    age: 22,
    salary: "5.5lpa",
    designation: "Full Stack Developer",
    address:{
        city: "Vuyyuru",
        DoorNO:"7-226",
        Street:"Sri Nagar colony",
        pin: "521165",
        state:  "Andhra Pradesh",
        Country:"India"
    },
}

let { name, age, salary, designation}=employee;
console.log(`name:${name}
salary:${salary}
age:${age}
designation:${designation}`)
let {  city, DoorNo, Street,pin,state, Country }= employee.address
console.log(`city:${city}
pin:${pin}
state:${state}`)

