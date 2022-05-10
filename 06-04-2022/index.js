console.log("Working");

// what is an objects?
// objects consists of properties and methods . these properties can be anytype but the 
// compiler converts them into string type only. values can be of any type.

// Methods are actions/ bevahiour performed or function definations.

//Creatinga an Obeject.
//properties order are not preserved.
const mobile = {
    brand : "MI",
    weight : 200,
    isWorking : true,
    11 : "Andriod version",
    displayInfo : function(){
        console.log(`The brad is ${mobile.brand} and the weight is ${mobile.weight} 
        and is working is ${mobile.isWorking} and andriod version ${mobile["11"]}`)
    },
    displayInfo1 : function(){
        console.log(`The brad is ${this.brand} and the weight is ${this.weight} 
        and is working is ${this.isWorking} and andriod version ${this["11"]}`)
    }
}
console.log(mobile);
// mobile.camera = "32px";// method to add a property
mobile["camera"] = "108";// second method to add property.
// delete mobile.isWorking;
// delete mobile.displayInfo
console.log(mobile);
console.log(mobile.hasOwnProperty("weight"));//this is use to check if a property is present or not
mobile.displayInfo();
mobile.displayInfo1();
console.log( mobile.displayInfo1 ); //it gives us the function defination.

//methods of creating an object 
const mobile2 = {};
mobile1.brand = "apple";
mobile1.weight = 200;
console.log(mobile);

//this is a keyword and not a variable
// this pointing to something depends on the invocation/calling of the this keyword
//function constructr
function mobile1(brand, weight, camera){
    this.brand = brand;
    this.weight = weight;
    this.camera = camera;
}

const apple = new mobile1("apple",190,"16px");
const onepluse = new mobile1("MI",200,"180px")
console.log(apple);
console.log(onepluse);

// console.log(this);//this is pointing to window object

// //spread operators
// // string is an object and  array is also an object,
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8];
// let arr5 = [55,66,35,6,5]
// let arr6 = ["atul","Kumar", "pandey", "what" , true,"fine"]
// let arr3 = arr1.concat(arr2).concat(arr5);
// console.log(arr3);
// let arr4 = [...arr1,...arr2,...arr5];
// console.log(arr4);
// let arr7 = [...arr1,...arr2,...arr5,...arr6];
// console.log(arr7);





const key = Object.keys(mobile); //it is going to returns an array of keys/prooerties 
const values = Object.values(mobile); //it is going to return an array of values
// console.log(keys);
console.log(key, ":", values);// separate array for keys and values.

for(let [keys,values] of Object.entries(mobile)){
    console.log(key, ":", values);
    
}

let obj12 = {
    name : "Atul",
    age : 23
}
let obj2 = {
    occupation : "Player",
    location : "gorakhpur"
}


let obj3 ={
    ...obj12,...obj2
}
console.log(obj3);