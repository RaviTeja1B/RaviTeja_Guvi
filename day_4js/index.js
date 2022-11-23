/*
JSON==>JavaScript Objest Notation
Asynchronous JavaScript and XML

Functions:
1.Reguar
2.Parameterized

functions and return functinons
types of functions
  Optimized function
1.Arrow Function
2.Anonymous Function
3.IIFE==>Immediately incoked function expression.
                                                   */

//API===>Application Programing Interface
//XMLHttpRequest()+++=>(AJAX)
/*
1.creat an object of xmlhttprequest
2.open a url
3.send a request
4.handle  the response from server


                                               */

/*
1.open()
2.send()
3.onload()
4.status
100-199 :information resp
200-299 :ok(successful)
300-399  :reedirection
400-499   : client
500-599   :server
 

404==>NOT FOUND
url is not  proper.
                              */ 



//Make Http request




//create an instance of the request
/*
let request=new XMLHttpRequest();
console.log("New Object Created"+request);//New Object Created[object XMLHttpRequest]
                                                                                                     */
                     
/*
let xhr=new XMLHttpRequest()
console.log(xhr)

//open your request
xhr.open("GET","https://jsonplaceholder.typicode.com/users");


//onload eveant(server will listen to request and process data)
xhr.onload=function(){
    console.log("**************Responce_Receaved**********")
    console.log(this.responseText);//raw data is seen 
    let data=JSON.parse(this.responseText)
    console.log("converted data:"+data)
   
}
 
// send the  request  
xhr.send()  // we call the data obtaineed as  raw data


//we havee to convert the data into Json formate  
                                                      */





/*

let xhr=new XMLHttpRequest()
console.log(xhr)
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.onload=function(){
    let data=JSON.parse(this.responseText)
    if(this.status==200&&this.status<300){
        console.log("***Responce_Receaved***");
        console.log(data)
    //loop through the  data and print  it on the console
    for (let i in data){
        console.log(data[i].email)
    }
    }
}
xhr.send();  

                                                                          */



//make a http request//create an instance of the requestlet 
xhr=new XMLHttpRequest();
//Open your request
xhr.open("GET","https://jsonplaceholder.typicode.com/users");//onload event (server will listen to request and process data )
xhr.onload=function(){
    console.log("***Response Received***");
    console.log(this.responseText);
//raw data
let data=JSON.parse(xhr.responseText)
//converted data into objectconsole.log(data);
//Loop throigh the data and print it on the console
for(let i=0;i<data.length;i++){
    console.log(`
    Name:${data[i].name}
    Email:${data[i].email}
    Address:${data[i].address.city} ${data[i].address.street}
    Phone:${data[i].phone}`)}}
    //send the request
    xhr.send();
    // fetch>crud operations/


/*
//http methods

1.Get===>to read the data
2.Post===>send the  data
3.put===>update the data
4.deleat===>deleat the data


                                                        */



var h1=10
var h2=22
var result=h1+h2
console.log(`
Result: ${h1}+${h2}=${result}`)