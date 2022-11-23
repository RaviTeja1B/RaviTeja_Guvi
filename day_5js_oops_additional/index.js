


// created a class person
class person_R{
    //static variable
    static company_Name="IBM";
   
   
    // step 3 after the object calling it will exicute this step3
    constructor(name, age, email, address,){
        
        console.log("parent class")
        this.name=name;
        this.age=age;
        this.email=email;
        this.address=address;
    
    }

    // Instance Method=>it is known as object level method
    getData(){
        let personData=`
        Name:${this.name}
        Age:${this.age}
        Email:${this.email}
        Address:${this.address}`;
        console.log(personData);
    }


    //Static method is a part of a class
    static getCompanyName(){
        console.log(person_R.company_Name)

    }

}
class Employee extends person_R{
    constructor (name, age, email,  address, designation, salary){
        super(name, age,email, address);
        this.designation=designation;
        this.salary=salary;
    }
    getData(){
        let employeeData=`
        Name:${this.name}
        Age:${this.age}
        Email:${this.email}
        Address:${this.address};
        Deaignation:${this.designation}
        Salary: ${this.salary}`;
        console.log(employeeData);
    }
}

// step 2 create a object for the person
let person_1= new person_R("John Doe",30, "John@gmail.com",  "123MainSt")
let person_2= new person_R("willson",33,"willson@gmail.com","130MainSt")
let person_3= new person_R("Jhonny",40,"jhonny@gmail.com","163MainSt")
let person_4= new person_R("mathin",28,"mathin@gmaail","1223st road")

person_1.getData();//object refarence to access the data
person_R.getCompanyName();//class refarence to access the data

person_2.getData();
person_R.getCompanyName();

person_4.getData();





let employee1=new Employee("Satish",24,"satish@gmail.com","142 mancheaster","Design Engineer", "5.6lpa");
employee1.getData()


/*

//The above concept is called as the code reusabulity.




// get and set methods are used for getting and printing the data.


//Getter=> get or read the value from the object.
//selector=>set or update the value in the object.

*/
/*
class car{
    setAttributes(name, model, year)
    {
        this.name=name;
        this.model=model;
        this.year=year;
        
    }
    getAttributes(){
        return `${this.name} ${this.model} ${this.year}`

    }
}

let car1= new car();
car1.setAttributes("Audi","A4" , "2018 model")
console.log(car1.getAttributes());
                      */