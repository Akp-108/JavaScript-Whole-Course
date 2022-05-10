// // console.log("working");

// // /// arithmetic operators
// // console.log(2+3); //5
// // console.log(2-3); //-1
// // console.log(2*3); //6
// // console.log(2/3); //0.66
// // console.log(2%3); //2


// // // arithmetic operators on string
// // console.log("hi" + "hello"); // hihello /// concatenate the two strings;
// // console.log("hi" - "hello"); //null
// // console.log("hi" * "hello"); //null
// // console.log("hi" / "hello"); //null
// // console.log("hi" % "hello"); //null



// // //Comparison Opreators

// // console.log(2<3);//true
// // console.log(2>3);//falses
// // console.log(2>=3);//fales
// // console.log(2<=3);//true
// // // console.log(2<=3);
// // // console.log(2<=3);


// console.log("hi">"hello");/// it compare the asci value of each character and then provide value
// console.log("hi"<"hello");
// console.log("hi"<="hello");
// console.log("hi">="hello");



// // == only check the values , === checks the values and the data type too.
// console.log(2==3);//fales
// console.log(2==2);//true
// console.log(2===2);//true
// console.log(2==="2");//fales; data type is not same 


// console.log("hello" === "hello");//true
// console.log("true"==true); ///false; true by default has a value 1. and false has a value 0.
// console.log(1!=true); //false
// console.log(1!==true); //true


// //// bit wise operators
// console.log(2&3);//2
// console.log(3|2);//3
// console.log(2|3);//3
// console.log(5|4);//5
// console.log(2^3);//1
// console.log(2<<2);//8
// console.log(8>>2);//1
// console.log(~2);//-3
// console.log(~5);//-6


/// Increment and Decrement Operators


///Postfix operation --- We first assign the value to the variable and  then
// update the value in the next line
let d = 4;//4
// d++;//4
console.log(d++);//4 // console.log(d)
console.log(d);//5

// let c = d++; // c=d;
// console.log(c,d)//5 6

d = d++ //   d = d;
console.log(d);//6


///// Prefix increment/decrement-- we try to first update the value and then access it;
let e = 3;
console.log(++e);//4

console.log(--e);//4

let f = ++e;//4 // f=4
console.log(e,f);//4, 4

let y = 2;
y++;//2 ---->> 2++
y++;//3 --->> 3++
// console.log(y++);//4
console.log(++y);//5
