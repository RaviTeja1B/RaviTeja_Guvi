//Array==>Array is a collection of similiar and dismilliar i.e(homoginious and hecttoagenious) elements.

let array1=[1,30,40,60,80]//similar data of numbers
let array2=["Ravi","Raju","sam","varun"]//Similar data of strings
let array3=[55,36,33.5,"ravi","Teja"]//Dissimilar data or collection of different data
console.log(array1)// output:>1,30,40,60,80
console.log(array2[10])//output:> undefined
console.log(array3)//   
console.table(array3)//output:> it is shown in table  formate





/*
Array Methods==>
1. length
2. push
3. pop
4. slice
5. join
6. splice
7. split
8. filter
9. reduce
10. map
Looping over array data  
                                                */



/*
let Fruits=["Banana","Apple","Grapes","oranges"] 
console.table(Fruits)
for (let i=0;i<Fruits.length;i++){
    //console.log(Fruits[i])
    console.log('Fruits:',(Fruits[i]));
}

let Fruits1=["Apple","Banana","mango","orange"]
console.table(Fruits)
let temp=""
for (let j=0;j<Fruits1.length;j++){
    temp=temp+Fruits1[j]+" "
}
console.log(temp)
                                                           */


/*
//foreach loop
let Fruits2=["Apple","grapess","pinappe","banana"]
console.table(Fruits2)
Fruits2.forEach((items) => {
    console.log(items)
});  
                                                                  */



/*
//for in  loop==>iterable and enmerate the indexing

let Fruits3=["apple","banana","grapes","mango","goa"]
for (let i in Fruits3){
    console.log(i)
}
for (let key in Fruits3){
    console.log(Fruits3[key])
}                                    
                                                                    */







/*
 //for of loop==> 

 let Fruits4=["apple","banana","grapes","mango"]
 for(let i of Fruits4){
    console.log(i)
 }
                                                          */







 /*
 //sort function  ==> it is used to arrange the elements in the assending  order or in decending order


 //sort function  in assending order
 let arr_1=[10,12,30,50,55,18,21,19,99]
 let arr_2=["amar","aaa","aaaa","ab","arun","balu","bala"]
 console.log(arr_1.sort())//[10, 12, 18, 19, 21, 30, 50, 55, 99]
 console.log(arr_2.sort())//['aaa', 'aaaa', 'ab', 'amar', 'arun', 'bala', 'balu']


//sort functtion in desending order
console.log(arr_1.sort().reverse())// [99, 55, 50, 30, 21, 19, 18, 12, 10]
console.log(arr_2.sort().reverse())// (7) ['balu', 'bala', 'arun', 'amar', 'ab', 'aaaa', 'aaa']
                                                                                                            */




/*
// push and pop push==>to add,pop==>to deleat (the last element )
let data_1=[10,20,30,40,50,60,70,100,900]
data_1.pop()
console.log(data_1) //    [10, 20, 30, 40, 50, 60, 70, 100]                                                

data_1.push(55)
console.log(data_1)//     [10, 20, 30, 40, 50, 60, 70, 100, 55]


//shift() function is to deleat  the first element in the array
data_1.shift()
console.log(data_1)//     [20, 30, 40, 50, 60, 70, 100, 55]

//unshift() functtion is to add the first element in the array
data_1.unshift(56)
console.log(data_1)    //   [56, 20, 30, 40, 50, 60, 70, 100, 55]
                                                                           */


/*
//Splice is a complex function
//splice(2)
let data_2=["html","css","javascript","c++","python","java"]
console.table(data_2)
//console.log(data_2.splice(2))
console.log(data_2)
data_2.splice(4)
console.log(data_2)

//spice(index,no elements to  deleat)#to remove no of elements from the given index
let data_3=["html","css","javascript","c++","python"]
console.table(data_3)
data_3.splice(1,2)
console.log(data_3)

let data_4=["html","css","javascript","c++","python"]
console.table(data_4)
data_4.splice(3,1)
console.log(data_4)

let data_5=["html","css","javascript","c++","python"]
console.table(data_5)
data_5.splice(2,2)
console.log(data_5)


//spice(index,no of deleating elementts,replace element)
//replace an given element from the given array
let data_6=["html","css","javascript","c++","python"]
console.table(data_6)
console.log(data_6)
data_6.splice(1,2,"ravi","teja")
console.table(data_6)
console.log(data_6)


let data_7=["html","css","javascript","c++","python","java"]
console.table(data_7)
console.log(data_7)
data_7.splice(3,1,"$$$$$","%%%%%%","######","JHONM")
console.table(data_7)
console.log(data_7)
                      */


/*
//copy by refarence and copy by  value
// copy by refarence
let a2=[10,20,30,40]
a3=a2
console.log(a2)//[10, 20, 30, 40]
console.log(a3)//[10, 20, 30, 40]

a3[4]=75
console.log(a2)//[10, 20, 30, 40, 75]
console.log(a3)//[10, 20, 30, 40, 75]

a3.push(96)
console.log(a2) //[10, 20, 30, 40, 75, 96]
console.log(a3) //[10, 20, 30, 40, 75, 96]

//so as to over come this problme (spread operater is introdused)
//ES6 spread opereater is introdused(...)
let b1=[5,15,25,35,45,65]
let b2=[...b1]//   ...is spread operater
console.table(b1)
console.table(b2)
b2.push(88)
console.table(b1)//[5, 15, 25, 35, 45, 65]
console.table(b2)//[5, 15, 25, 35, 45, 65, 88]
b1.push(99)
console.log(b1)//[5, 15, 25, 35, 45, 65, 99]
console.log(b2)//[5, 15, 25, 35, 45, 65, 88]
                                                */



// Object data
// it is taken in {}
// {key:value}

let  person={}
console.log(person)//{}[[Prototype]]: Object
//old methood

person.name="ravi"
person.email="ravi@gmail"
person.age=45
person.color="fair"
console.log(person)//{name: 'ravi', email: 'ravi@gmail', age: 45, color: 'fair'}


//moderen metthod
// Fully loaded method
let person1={
    name_1:  "Ravi" ,
    email: "ravi@gmail"  ,
    age: 45 ,
    salary: "10000$" ,
}
console.log(person1)//{name_: 'Ravi', email: 'ravi@gmail', age: 45, salary: '10000$'}
console.log(person1.age)//45
console.log(person1.email)//ravi@gmail



let mobiles=[
{
    brand: "apple",
    color:  "red",
    year: 2020,
},
{
    brand : "samsung",
    color : " blue",
    year  :  2021,
},
{
    brand: "oneplus",
    color: "gray",
    year: 2022,
}
]
 console.table(mobiles)


for (let i in mobiles){
    console.log(mobiles[i].brand)
    console.log(mobiles[i].color)
    console.log(mobiles[i].year)
}
console.table(mobiles)
for (let j=0;j<mobiles.length;j++){
    console.log(mobiles[j].brand)
    console.log(mobiles[j].color)
    console.log(mobiles[j].year)

}
mobiles.push({
    brand: "miindia",
    color: "green",
    year: 2021
})
console.table(mobiles)


for (let k of mobiles){
    c=k
    console.table(c )
}

for (let n in mobiles){
    d=mobiles[n]
    console.table(d)
}

for (let l=0;l<mobiles.length;l++){
    e=mobiles[l]
    console.table(e)
}

if(c===d&&c===e){
    console.log(true)
}
else
{
    console.log(false)
}

f=mobiles.pop()
console.log(mobiles)

console.table(mobiles)
console.table(f)
console.log(f)

// Resume of  Ravi Teja

let resume_1=
[
{
   name:[{ first_name: "Ravi",
    middle_name: "Teja",
    sur_name: "Morampudi"},
    {age:28},
    {gender:"male"},
    {D_of_B:"15-sep-1994"},]
    
},
{
    gmail:[
        {personal:"morampudiraviteja@gmail.com"},
        {officeal:"ravitejarhythm@gmail.com"}
    ]

},
{
    phone: [
        {personal:9704423820},
        {watsapp_no:8143862022}, 
        {land_line: 08676236185}
    ]
   
},
{
    address:{
        D_no: "7-226",
        street:"Sri Nagar Colony vuyyuru",
        city:"vuyyuru",
        state:"Andhra Pradesh",
        pin:521165
    }

},
{
    Education:[
        {B_tech:{
        college:"MVR COLLEGE OF ENGINEERING",
        university:"JNTTUK",
        branch:"MECHANICAL",
        year_of_passing:2016
    }},{M_tech:{
        college:"VRSEC",
        university:"JNTTUK",
        branch:"MECHANICAL",
        year_of_passing:2016
    }}]
},
{
    skills:{programing:
        ["python","JavaScript","html","css"],
        Designing:["CATIA","Fusion360","3D-Exp","Ansys"]}

}
]

console.table(resume_1)
console.log(resume_1[0].name[0].middle_name)
console.log(resume_1[1].gmail[0])
console.log(resume_1[1].gmail[0].personal)
console.log(resume_1[1].gmail[1])
console.log(resume_1[1].gmail[1].officeal)
// to get pin 
console.log(resume_1[3].address.pin)
// to get the designing skills
console.log(resume_1[5].skills)
console.log(resume_1[5].skills.Designing)
console.log(resume_1[5].skills.programing)
console.log(resume_1[5].skills.Designing[2])