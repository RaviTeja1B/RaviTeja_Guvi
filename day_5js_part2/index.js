/*
let aarray_1=["a","b","c","d"]
let newarray_1=[...aarray_1,"e","f","g"]
console.log(newarray_1)  
                                  */

/*
let android_mobiles=["Nokia","Xiamo","ViVo","Samsung"]
let iphone_mobiles=["iphone7","iphone8","iphone11"]
let all_mobiles=[...android_mobiles,...iphone_mobiles]
console.log(all_mobiles)
               */




/*
let array_1=[1,2,3,4]
let array_2=array_1
console.log(array_1)//1,2,3,4
console.log(array_2)//1,2,3,4
array_2.push("Teja")
console.log(array_1)//1,2,3,4,Teja
console.log(array_2)//1,2,3,4,Teja
//The aabove phenomina is called as the copy by refarence
          */



//With the help of the spread operater(...)
// we can overcome the copyByRefarence.

let array_3=[1,2,3,4]
let array_4=[...array_3]
console.log(array_3)//1,2,3,4
console.log(array_4)//1,2,3,4
array_2.push("Ravi")
console.log(array_3)//1,2,3,4
console.log(array_4)//1,2,3,4,Ravi
//we can see that the array3 is not affected with array4 change in value.





//Rest parameters
// to supply infinite number of arguments in a function
//...
// Test paraameter should always be the last parameter in a function argumen

//console.log(10,20,30,40)
//console.log(10,30,20)

/*
function myfun(...numbers){
    return numbers
}
console.log(myfun(10,20,30,40,))
console.log(myfun(15,12,66,999,36,45,23,99,65,41))
                         */


/*

//errors will after the rest parameter as shown in above program line 50
function myfun(...numbers1,num2){
    return numbers1
}
console.log(myfun(10,20,30,40))
console.log(myfun(15,12,66,999,36,45,23,99,65,41))  
                                                         */



/*
// we can access before the ... by adding the arguments before the infinite value arguments like ...numbers2
function myfun(num1,num2,...numbers2){
    return num1,num2,numbers2
    //logic we have to use the loops  for more values
}
console.log(myfun(10,20,30,40))
console.log(myfun(15,12,66,999,36,45,23,99,65,41))
             
                                          */





/*
function getSum(...num_x){
    //logic
    let sum=0
    for (let i =0;i<num_x.length;i++){
        sum+=num_x[i]
    }
    return `sum:${sum}

Numbers:${num_x}`
}
console.log (getSum(10,20,30,40))
console.log(getSum(45,36,20,96))
                                       */