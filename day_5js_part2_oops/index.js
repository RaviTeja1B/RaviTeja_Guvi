//OOPS: Object Orianted Programing 
//class and object
//code reusability, security, Extend features of one class to another class.


//class=> logical reprasentation of any entity is known as class.(Blueprint)

//Object=> Physical entity or instance of a class
  

// Constructor is a speacialized method which is invoked or called after the
//creation of an abject.
//we can set a values of object

class car{
     constructor(brand, model, color, rpm, milage)
    {
    this.brand=brand;
    this.model=model;
    this.color=color;
    this.rpm=rpm;
    this.milage=milage;
    }
   
   
    getCarSpecification()
  {
    return `
    Brand:${this.brand}
    Model:${this.model}
    Color:${this.color}
    Rpm:${this.rpm}
    Milage:${this.milage}  `

}
}
let car1=new  car("Tata","Tata Punch","white",4000,"18KM/sec");
console.log(car1.getCarSpecification())
let car2=new car ("RangeRover","SUV","Black",6000,"12KM/sec")
console.log(car2.getCarSpecification())

//object Literal
// object with constructor with new keyword
//class=> it doesnot have any physical existense
//object=>it has physical existance


//ola or uber cab_company
//prise of cab services
//Fixed chrge 50
// charges for km=>12*10
// waiting time : hr=>100
// Tool Fee: 120rs
//Heigh Demand:100


//  method : getter and setter
// method: Inheritance
// method: Satatic method