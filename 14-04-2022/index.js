console.log("working");

///Closures-- it is not somthing that we create manually , insetead it is created automatically in certain situation

const ticktBooking = function(){
    let pessengerCount = 0;
    return function(){
        pessengerCount++;
        console.log(`the count of pessengers  are ${pessengerCount}`);
    }
}
const bookie = ticktBooking();//after this line functin ticketBooking has finished its executin and now ceases to exist.
bookie();///1 
bookie();//2
bookie();//3

console.dir(bookie);
//Any funstion has  access to the varaiablw environment of the execution context in which the function was created.

// so funstion Bookie was created in the executin context of ticketBooking and so can accesss the  variable of the function ticketBooking even though the later function (ticketBooking) ceases to exist. 

//so even though the execution context of ticketBooking ceases still function can access the passengerCont variable which is a part of function ticktBooking..


let f;
 const g = function(){
     const a = 23;
     f = function(){
         console.log(a*2);
     };
}

const h = function(){
    const  b = 25;
    f = function(){
        console.log(b*2);
    }
}
g();
f();//46
h();
f();//50

console.dir(f);

 
//setTimeout

// setTimeout (function(){
//     console.log("Pandey");
// },3000);


// setTimeout((drink1,drink2)=>{
//     console.log(`Here's your dirnks ${drink1} and ${drink2}`);
// },2000, "VarginMojito", " Blue Lagoon   ");



// let drinks = ["VarginMojito", " Blue Lagoon   "];
// let timer = setTimeout((drink1,drink2)=>{
//     console.log(`Here's your dirnks ${drink1} and ${drink2}`);
// },2000,
// ...drinks //spread opetater
// );

// if(drinks.includes("Blue Lagoon")){

//     clearTimeout(timer);
// }

//...................................................
//setTimeout + closures examples
//setTimeout is a asyncronus function
const boardPassengers = (n,wait) => {
    let groupOfPeople = n/3;
    // let ball = "dues";
    setTimeout(()=>{
        console.log(`The number of passengers are ${n}`);
        console.log(`The number of passengers are  per group are ${groupOfPeople}`);
    },wait*1000); //this creats a closer with the local variable of the function boardPassengers, i.e. it niw has access to the variable groupOfPeople and ball
    console.log(`Onboarding all the passengers in ${wait} seconds `);
}
// let groupOfPeople = 25;
boardPassengers(120,3)