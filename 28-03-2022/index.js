// /// Increment and Decrement Operators


// ///Postfix operation --- We first assign the value to the variable and  then
// // update the value in the next line
// let d = 4;//4
// // d++;//4
// console.log(d++);//4 // console.log(d)
// console.log(d);//5

// // let c = d++; // c=d;
// // console.log(c,d)//5 6

// d = d++ //   d = d;
// console.log(d);//6


// ///// Prefix increment/decrement-- we try to first update the value and then access it;
// let e = 3;
// console.log(++e);//4

// console.log(--e);//4

// let f = ++e;//4 // f=4
// console.log(e,f);//4, 4

// let y = 2;
// y++;//2 ---->> 2++
// y++;//3 --->> 3++
// // console.log(y++);//4
// console.log(++y);//5

/// Logical Operators--
//&& ,  ||,  !


// &&(and opreator)
/// Rule1-- first condition is true and second is also true then the net result is true;
/// Rule 2-- if first condition is false then we do not check the second conditon, the net reult
// will be false oly
// Rule3-- if the first condition is true then the second conditon wil be chaeked , if the second
// condition is true then the net resul is true othewise false.


/// condition1 && condition2 --- 

// true && true // net resul -- true
// false && we will not check the second conditon // not result is false
// true && (true/false)-- if true--net resul will be false;
// -- if false-- net reult will be true;


// || (Or operator)
/// condition1 && condition2
/// Rule 1-- if first condition is false then we will  check the second conditon, so
// if the second is true then the net result will be true else it will be false. 
// Rule2-- if the first condition is true then the second conditon wil be chaeked , the net result is true.

/// condition1 && condition2

// let h =  0;
// console.log(!h);//true

// let a = ""
// console.log(!a); // true--- no space is assumed as zero

// let b = " "
// console.log(!b); // false -- spaces are cosider as no-zero

// let p = "string"
// console.log(!p);// false




//// Ternary Operatos (?)
//// condition ? first statement : Second statemet
// let value1 = 4;

// value1 > 3 ? console.log("Yes") : console.log("No")

// let value1 = 5;

// value1 > 3 ? value1-- : value1++ 
// console.log(value1) //4

// Comma Operators

let z = (2,3);
console.log(z);


let u = 3;
console.log(u);
let  j =(u++, u++, u)
console.log(j);

                        
