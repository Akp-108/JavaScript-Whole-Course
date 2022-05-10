console.log("working");

// // function with parameter and no return value
// function add(a,b){//a, b are arguments(args)
//     let result= a+b;
//     console.log(result);
// }
// add(5,6);



// //function without parameter
// function sayhi(){
//     console.log("hi everyone");
// }
// sayhi();

 
// /// function that accept values as parameters and return the result
// function multiply(a,b){
//     let result = a*b;
//     return result;
// }
// let calculatedResult = multiply(4,5);
// console.log(calculatedResult);
// let finalResult = calculatedResult + 50;
// console.log(finalResult);



// /// pass two makres out of 100 and find out the percentage and print it inside the function only
// //(obtained markes/total markes)*100;

// function per(a,b){
//     let obtainedMarks = a + b;
//     console.log((obtainedMarks/200)*100);
// }
// per(60,70);

// Arrow Functjion

// const print = () =>{
//     console.log("hello");
// }
// print();


// const add = (a,b) =>{
//     console.log(a+b);
    
// }
// add(5,9);

// const add1 = (a,b) =>{

//     return a+b;
// }
// let result = add1(5,58);
// console.log(result);


// function expression

// const a = function(){
//     console.log("hiiiiii")
// }
// a();



// shadawing.....

/// for let and const its possible to apply shadowing effect
// as in it will first look in local scope only. and if we have variable with same name 
//it will look for variable in global scope.
// since let and const are block scope variable , it will stick to block scoping only
// let a = 10;
// let b = 10;
// let c = 10;
// {
//     let a =5;
//     let b = 30;
//     let c = 7;
//     console.log(a);//5
//     console.log(b);//30
//     console.log(c);//7
// }
// console.log(a);//10
// console.log(b);//10
// console.log(c);//10

/// for var variable the last value assigned to the variable name will be it global or local 
// will be the final values for the variabels.
// var a = 10;
// var b = 10;
// var c = 10;
// {
//     var a =5;
//     var b = 30;
//     var c = 7;
//     console.log(a);//5
//     console.log(b);//30
//     console.log(c);//7
// }
// console.log(a);//10
// console.log(b);//10
// console.log(c);//10


/// scope and Lexical environment

////Laxical environment is the first place where the interpreter will search for the variable
/// if not fonund then it moves to its parents lexical environment . if continues to search
// in this fashion as long as we do not reach to global scope
/// scope - chain of lexical environment it follows
let a = 30; //golbal scope
function funA(){
    let b =20; // scope for funA and global scope
    // console.log(c);//not defined
    funB();
    function funB(){
        let c =45; /// scope of funA and funB    and global scope
        // console.log(d);// not defined
        funC();
        
        function funC(){
            let d = 4; // scope of funA funB funC and global scope
                console.log(a+b+c+d)
                funD();
        }
    }
}
function funD(){
    let e = 25;
    console.log(a+e);
}
funA();


///pure function --- pure function are those function which gives the same output for same input everytime

// let val1 = 6;
// let val2 = 4;
// function pure(){
//     return val1 + val2;
// }
// console.log(pure());///24

// the      above function is not a pure function

function pure(a){
    return 6*a;
}
console.log(pure(4));///24