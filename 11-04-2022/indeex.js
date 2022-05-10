console.log("working");

//First class function/ callback function / Higher order function.

//Function defination/Function statement/function decleartion--
// // This whole function body is called function defination/decleration
// a();
// // b();
// function a(){
//     console.log("I am working");
// }

//function exprssion-- i have to assign to a variable// A function assigned to the variable is called function expression
// let b = function(){
//     console.log("I am pandey");
// }
//since we know that function are hosted but it comes with an exceptin too.
//the exception stands for the funtion expressions.
//also arrow funtion also donot support hostiong
//function expression are never hosted 
// a();
// b();

// const b = ()=>{
//     console.log("it is arraw function");
// }


//anonymous funtion - funtion which donot have any name and which are used in funtion expression are called as anonymus function
//named function -- function having name are called as named function



//................................................................

//First class funtion--  The funtion are treated as values which can be passed into another function as arguments and can also be returned from another funtion. They are also called as first class function

// function add(a,b){// parameters(a,b)
//     console.log("working");
// }
// add(2,3);// arguments(values passed into funtion are called argumets).




//function is passed as an argument into another function
// let functiond = function(a){// a is a parameter which is taking the function g which is passed as  argument from the function
//     console.log(a);

// }

// function g()
// {
//     console.log("I am G");
// }
// functiond(g);//function is taking function g as arguments...

// function return from another function 
// let functionD = function(){
//     return function f(){
//         console.log("HI I am F");
//     }
// }
// functionD();
// console.log(functionD());
//................................................................................



// Higher order functions-- The function which can take function as parameters or which can return another another function are called as Higher order Function. The functions that accepting the first class function are called Higher Order function

// the function f returned from function D is called first class function whereas the function D which is returning the function f is called the Higher Order function .


//........................................................................................

///Callback Function-- These are those kind of function which are called back after a certain period of time or are passed as values/agrument into another function which are in turn called as and when needed.

setTimeout(() => {
    console.log("I am callback function called after 50000 milliSeconds");
}, 5000);//it takes two parameters -- callback function and a Timeout values. after the timeout values has overLapsed/Passed the callback function is called.

function h(a){
    console.log("I am function h");
    a();
}

h(function j(){
    console.log("I  am function J");
})

const sayHi = (nameOfFriend)=> {/// it a callback function
    // console.log("Hello My Friend",nameOfFriend);
    return ("Hello My Friend"+nameOfFriend);
}

const greeting = (friend, callbackFunction) => {///it is a higher order function
    // callbackFunction(friend);//callbackFunction == sayHi function with a arrumnet as name of the friend ...//sayHi("Ravi");
    console.log(callbackFunction(friend));
}

greeting("Ravi",sayHi); // calling the higher order function by passing the arguments as name  of friend and the callback function. 
/// the second arrument should have the same name as the we given name of the callback function 