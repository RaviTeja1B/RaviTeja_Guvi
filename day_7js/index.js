//map()
//map is a in_built array function which performs the for each loop
/*
let data=[10,20,30,40,50]
data.map((x) => {
    console.log(x+2)
}) 
*/



/*
let person=[{
    name:"ram",
    age: 25,
    city:"vuyyuru",
},
{
    name:"sam",
    age: 29,
    city:"hyd",
}]
person.map((x)=>{
    console.log(x.name)
    console.log(x)
    console.log(x.city)
})


                               */



let employees=[{
    Id:103,
    name:"Ravi",
    designation:"Developer",
    salary:1500000,
    yearsOfExperiance:12,
},
{
    Id:104,
    name:"RaviTeja",
    designation:"Developer FullStack",
    salary:2000000,
    yearsOfExperiance:9,
},
{
    Id:105,
    name:"Avi",
    designation:" Sr Developer",
    salary:2500000,
    yearsOfExperiance:10,
},]
            

let employeename=[]
employees.forEach((obj)=>{
    employeename.push(obj.name)
})
console.log(employeename)
                         
// above and below code are giveing same out put but map function is easy and simple

let empname= employees.map((obj)=>{
    return obj.name
})
console.log(empname)


//Reduce Method
let totalSalary=employees.reduce((prev,curr)=>{
return prev+curr.salary;
},0)
console.log(totalSalary)

/* There is a mistake in the below code
let TotalSalary=employees.forEach((obj)=>{
    let sum=0;
    sum=sum+obj.salary;
    console.log(sum)
},)
*/

// HeigestYearOfExperience with the reduce  method
let highestYear=employees.reduce((pre,cur)=>{
return pre.yearsOfExperiance > cur.yearsOfExperiance ? pre:cur;
},)
console.log(highestYear)