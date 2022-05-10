// // // console.log(working);
// // // let name = "Atul";


// // // var name1=2;

// // // function operation(a,b,c){
// // //     result1= a+b;
// // //     result2= result1 + c;
// // //     return result2;
// // // }
// // // var finalresult = operation(4,5,6);
// // // console.log(finalresult);


// // // Scoping of a Variable------
// // //globale scope-- accessiability
// // // let myName="atul"
// // // let myAge= 23;
// // // console.log(myName);
// // // console.log(myAge);

// // // {
// // //     console.log(myName);
// // //     console.log(myAge);
// // // }

// // // console.log(myName);
// // // console.log(myAge);

// // {
// //     let myName="atul"
// //     let myAge= 23;
// //     // var isAdult = true;
// //     var isAdult = 14;
// //     console.log(myName); 
// //     console.log(myAge);
// //     console.log(isAdult);
// // }

// // // console.log(myName); //notdefined / uncaught reference error
// // // console.log(myAge); //notdefined / uncaught reference error
// // console.log(isAdult); ///14

// // // for variable decleared with let and const inside the block scope, they are able to access their values, but if 
// // // to access these let and const outside  their scope, it will throw the reference type error

// // but for variable, since these var are hoisted, they have access to their values even outside the scope.






// //HOISTING---



// /// var keyword variables will have default value as undefined if we try to access the variable even before declearing
// console.log(myAge); // undefined
// var myAge;
// myAge = 25;
// console.log(myAge); //25


// // let keyword do not  get memory is global but lies in Teparal Dead Zone (TDZ); (Javascript MDN)

// // log.console(myPassion); // cannot access "myPassion" before initialization
// let myPassion;
// myPassion = "coding";
// console.log(myPassion);//coding


// // let keyword do not  get memory is global but lies in Teparal Dead Zone (TDZ); (Javascript MDN)
//  log.console(myHobby); // cannot access "myPassion" before initialization
// const myHobby = "dancing";
// console.log(myHobby);//Dancing

/// function hosting

//// calling do function , we are not storing the values of the function calculated
// functions are hosted and that's reasion why we can first call the function and then declare them

operation(4,5,6);

function operation(a,b,c){
    let result1= a+b;
    let result2 = result1 + c;
    console.log(result2)
}














