// // // console.log("working");

// // // //Callback Hell-- Callbacks  are just names/conventions for using javaScript. It instead of imediately returning the result like other functions, waits and sends the results after certain period of time. Now If we make use of chain of callback functions which are dependent on its previous callback functions, can lead to a callback hell..
// // // //The structure of callback hell looks like an arrow/pyramid structure.
// // // //This makes our look happhaxard and makes it hard to deebugs/find out the error in the code
// // // //So we should always try to avoid callback hells
// // // //In order to prevent Callback hells we use Promises

// // // //Task- Get the id of the employee in 2 secs
// // // //then get the name and age in next 2 secs.
// // // //then get the gender in last 2secs

// // // const getEmpId = () => {
// // //     setTimeout(() => {
// // //         console.log("Featching the Ids's");
// // //         let id = [1,2,3,4,5]
// // //         console.log(id);

// // //         setTimeout(() => {
// // //             let empDetails = {
// // //                 name:"Ravi",
// // //                 age : 24,
// // //             }
// // //                 console.log(`the name of the employee is ${empDetails.name} and age is ${empDetails.age} `);

// // //                 setTimeout(() => {
// // //                     empDetails.gender = "Male";
// // //                     console.log(`the name of the employee is ${empDetails.name} and age is ${empDetails.age} and the gender is ${empDetails.gender} `);

// // //                     setTimeout(() => {
// // //                         empDetails.salary=45000;
// // //                         console.log(`the name of the employee is ${empDetails.name} and age is ${empDetails.age} and the gender is ${empDetails.gender} and the salary is ${empDetails.salary}`);
// // //                     },2000 )

// // //                 }, 2000)
            
// // //         },2000 )

// // //     },2000 )
// // // }
// // // getEmpId();


// // // //Promisea--
// // // //Promises are used to handle asynchronous opertation in JavaScript . They are easy to manage while dealing with multiple asynchronous operations, whereas callbacks can lead to callback hells which further leads to unmanageable code.
// // // // It does not means that Promises are only used for avoiding callback hells, Its a unique identity and is not a substitute for callback hells..
// // // //They have three states
// // // //1. Pending     2. Resolved          3. Reject

// // // //Promises executes a executor function which has two functins as a parameter (resolved and reject). If the data is fetched correctly, as in resolved, so a .then() method is called but if there is some error/reject then .catch() function is called.


// const getEmpID = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let id = [1,2,3,4,5]
//         // console.log(id);
//         resolve(id);///resolve always look for the .then()
//         reject("Error in factching the id details");//always look for the .catch()
//     }, 2000);
// })




// const getEmpDetails = (data) => {
//     return new Promise((resolve,reject) =>{

//         setTimeout((data) => {
//             let empDetails = {
//                 name : "Shyam Sundar",
//                 age : 34,
//             }
//             resolve(`The name of the employee is ${empDetails.name} and age is ${empDetails.age}`)
//         }, 2000,data);
//     })
// }

// getEmpID.then((empID)=>{
//     console.log(empID);
//     getEmpDetails(empID[1]).then((data)=>{
//         console.log(data);
//     })
// }).catch((err)=>{
//     console.log(err);
//  });



// const getEmpID = new Promise((resolve, reject) =>{
//     setTimeout(() => { 
//         let id = [1,2,3,4,5]
//         // console.log(id);
//         resolve(id);///resolve always look for the .then()
//         reject("Error in factching the id details");//always look for the .catch()
//     }, 2000);
// })




// const getEmpDetails = (data) => {
//     return new Promise((resolve,reject) =>{

//         setTimeout((data) => {
//             let empDetails = {
//                 name : "Shyam Sundar",
//                 age : 34,
//             }
//             resolve(`The name of the employee is ${empDetails.name} and age is ${empDetails.age}`)
//         }, 2000,data);
//     })
// }


// getEmpID.then((empID)=>{
//     console.log(empID);
//      return getEmpDetails(empID[1]);
// }).then((data)=>{
//         console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
//  });




// // .finally(() => {
// //     console.log("End of Promise");
// // });


// //Promise Chainig--

    // let promise = new Promise((resolve,reject)=>{
    //     resolve();
    // })

    // promise.then(()=>{
    //     console.log("First Execution");
    // }).then(()=>{
    //     console.log("Second Execution");
    // }).then(()=>{
    //     console.log("Third Execution");
    // })

///in this situation we are not getting the results in the desired ways/in series as expected as we have added setTimeouts with different time variables.
// promise.then(()=>{
//     setTimeout(() => {
        
//         console.log("First Execution");
//     },1000);
// }).then(()=>{
//     setTimeout(() => {
        
//         console.log("Second Execution");
//     }, 3000);
// }).then(()=>{
//     setTimeout(() => {
        
//         console.log("Third Execution");
//     }, 2000);
// });
//Output-- First Execution   Third Execution Second Execution

// Solution to fix this 
// promise.then(()=>{
//     setTimeout(() => {
        
//         console.log("First Execution");
//     },1000);
// }).then(()=>{
//     return promise = new Promise((resolve,reject)=> {
        
//         setTimeout(() => {
            
//             console.log("Second Execution");
//             resolve();
//         }, 3000);
//     })
// }).then(()=>{
//     setTimeout(() => {
        
//         console.log("Third Execution");
//     }, 2000);
// });
//Output-- First Execution  Second Execution Third Execution


// //Async/Await-- They used to handle promises more efficiently. the word assync before a function always means that the function is supposed to return a promise. So, we therefore use async before a function to  return a promise instead of the value that a normal function retuns. 
// Await in turn is used to wait for the result that is to be returned from the promise. so , we use the term Await when calling the function, which returns a promise .
//Await can also be used to make API calls.


async function tryingPromises()
{
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
    // it is going to return  a promises 
}

console.log("Before calling the function");
let data = tryingPromises();
console.log("After calling the function ");
console.log(data);
data.then((res)=>{// .then is always look for the promises
    console.log(res);
});
console.log("End of code");