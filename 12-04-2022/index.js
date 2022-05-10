console.log("working");

/// Create  two objects of student using function constructor which have their properties fname,lname, gender,age

//  function Student(fname,lname, gender, age){
//      this.fname = fname,
//      this.lname = lname,
//      this.gender = gender,
//      this.age =  age;

// }

// let person1 = new Student("Atul","Pandey","male",23);
// console.log(person1);


// let person2 = new Student("Atul","Pandey","male",23);
// console.log(person2);


let arr = [1,2,3,4,5,];
function add(){
    console.log("Add");
}


let obj1 = {
    fname : "atul",
    lname : "pandey",
    showDetails : function(){

    }
}
console.log(obj1.fname);
obj1.showDetails();
// console.log(obj1.showDetails());//undefined..

let obj2 = {
    fname:"amit",
}

//__proto__ is used to inharit the properties and method of other objects
console.log(obj2);
obj2.__proto__=obj1;// this basically allowed us to import all the properties and method of obj1
obj2.showDetails();



console.log(arr.__proto__);
console.log(Array.prototype);

console.log(add.__proto__);
console.log(add.__proto__.__proto__);

console.log(arr.__proto__.__proto__);
console.log(Object.prototype);
console.log(obj1.__proto__);
console.log(obj1.__proto__.__proto__);
console.log(Object.prototype.prototype);//undefined

console.log(obj2.__proto__);
console.log(obj2.__proto__.__proto__);
console.log(obj2.__proto__.__proto__.__proto__);




/// function barrowing using Call, Apply and Bind
let person1 = {
    fname : "Rahul",
    lname : "Gupta",
    //  showDetails : function(){
    //     console.log(this.fname + " " + this.lname);
    // }
   
}

const showDetails = function(gender,age){//this-- its pointing to the current objecct 
    console.log(this.fname + " " + this.lname + " "+ gender + " "+ age);
}

//  person1.showDetails();

 let person2 = {
     fname : "Pusha",
     lname : "Pandey"
 }
 let person3 = {
     fname : "Ravi",
     lname : "Pandey"
 }

// person1.showDetails.call(person2);


//call method takes argument individually
showDetails.call(person1, "male", 21);/////individual args are passed for the call menthod
showDetails.call(person2,"male", 21);
showDetails.call(person3,"male", 21);

//apply method takes arguments in array form
showDetails.apply(person1,[ "male", 21]);
showDetails.apply(person2,["male", 21]);
showDetails.apply(person3,["male", 21]);


///*** bind never take arguments, it only takes object name and gets a function in return ** which is stored in some variable. now this variable is  a function which is called with argument.
// the argument are also passed individually only and not in form of array.


let result1 = showDetails.bind(person1);
console.log(result1);
result1("male",22);


let result2 = showDetails.bind(person2);
console.log(result2);
result2("male",24);


let result3 = showDetails.bind(person3);
console.log(result3 );
result3("male",28);