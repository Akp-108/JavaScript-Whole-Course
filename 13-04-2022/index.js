function Student(fname,lname, bYear, age){
         this.name = fname,
         this.lname = lname,
         this.age =  age;
         this.bYear = bYear,
         this.age = age

}


let Student1 = new Student("Atul","Pandey",1999,23);
console.log(Student1);


let Student2 = new Student("Atul","Pandey",1998,24);
console.log(Student2);


let einstein = {
    fname:"Atul",
    lname : "pandey",
    bYear:1999
}
console.log(einstein);

delete einstein.bYear;

console.log(einstein);


//Obj2.fname and no. lname, instead obj1 had lname. but obj2 was able to print lname inheriting it from obj1.
const StudentPrototype = {
    calcAge(){
        console.log(2022 - this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const peter = Object.create(StudentPrototype);///now capable to inharit the propeties and methods of studentProtyoeempty object peter is created inheriting studentPrototype
console.log(peter);

peter.fname = "peter",
peter.lname = "Singh",
peter.bYear= "1990"

peter.initialise("peter","singh",1990)// using initialise method to initialise all the properties
console.log(peter);
peter.calcAge();// calling the finction calAge which is inharited by studentPrototype
console.log(peter.__proto__);//chackimg the prototype of peter which is same as stu..

const jarvis = Object.create(StudentPrototype);// new object is created
console.log(jarvis);

jarvis.initialise("jasvis","Hayden",1992);//same initialsation of properties
console.log(jarvis);

const atul = Object.create(StudentPrototype);
atul.initialise("Atul","Pandey",23);
console.log(atul);



//if i created an object using Object. create normally


///classes-- They are not like normal classes of that of java/c++ instead are kind of replicas of function(behind the scen). Special kind of functions with some variation with that of function.


// propeties of classes in JavaScript
//1. Classes are not hoisted
// 2. class are first class citizens

const StudentClass=class{//class expression
    constructor(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
    calcAge(){
        console.log(2022-this.bYear);
    }
}

const hari = new StudentClass("Hari","Narayan",1990)
console.log(hari);

// StudentClass.prototype.greet = function(){ // it is used to add some extra method 
//     console.log("hi");
// }

hari.calcAge()
console.log(hari.__proto__);
console.log(hari.__proto__===StudentClass);

// hari.greet()


/// Inheritance between class and Object.create();

const PersonProto = {
    calcAge(){
        console.log(2022-this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const honey = Object.create(PersonProto);//creating an object
console.log(honey);
// console.log(honey.__proto__);
honey.initialise("Honey", "Tambi",1993);
honey.calcAge();


const StudentProto = Object.create(PersonProto) ;
StudentProto.init = function(fname,lname,bYear,course){
    PersonProto.initialise.call(this,fname,lname,bYear);
    this.course = course;
};
StudentProto.introduce = function(){
    console.log(`hi I am ${this.fname} ${this.lname} and my age is ${2022-this.bYear} `);
};

const jay = Object.create(StudentProto);
jay.initialise("jay","Dubey",1998,"ECE");
jay.introduce();
jay.calcAge();


console.log(jay.__proto__);

    


// var obj6 = Object.create({
//     a : "Ravi",
//     b : "Kishan",

// })
// console.log(obj6.a);
// delete obj6.a;
// console.log(obj6.a);
// console.log(obj6);