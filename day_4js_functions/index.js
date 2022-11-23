
// A  Function is a group of statement to perform specific task.
//1. create a reuable code
//2. easy to  find the error
    // how to create a function>?
    //1. function keyword with name of function==>function{}
    //2. call the function ==> functionname()


//Creating  a  function with example
/*
function displayData(){
    //  Function Body(logic)
     let num_1=10;
     let num_2=20;
     console.log(num_1+num_2)

    }
displayData(); //30
                                 */



/*
function displayData_1(num_3,num_4){
    console.log(num_3+num_4)
}
displayData_1(30,40) //70
                                 */


/*
function displayData_2(num_5,num_6){
    return num_5+num_6
}
console.log(displayData_2)// function is the output

console.log(displayData_2(10,10))// 20 is the output
                                           */


// Perimeter of rectangle
/*
function getPerimeter(l,b){
    return (l+b)*2
}
console.log(getPerimeter(3,5))// 16 perimeter
                                                       */

//Area of rectangel


/*
let getArea= function(length,breadth){
    return length *breadth
}
console.log(getArea(10,10))   //100

                                             */


// The function  without name is  called Anonymous function
// Anonymous function



//Arrow function


//immediatly invoked function
//IIFE  runs as soon as the broeser find the  code and vanishes
/*

(function(){
    console.log("Ram gives  his blessings for me to achieve goles with hard work");
})();
(function(){
    let sum=20+30
    console.log(sum)
})()      */
// IIFE function prevent the polution of global scope.
                        

