// console.log("working");

// ////Arrays---it is a place where we can store multiple details of differnt types/datatypes(string,num,boolean) 

// /// create an array//

// //3 Method--
// // lenght is the total number of the element 
// // index is lenght - 1.
// /// First Method
// ///let/cosnt keyword followed by array name and then we asign them value inside [];
// let arr = [1, 2, 4, 5, 6, "Atul" ]; ///len - 6 , index-(0,5)
// console.log(arr);

// let arr1 = [2,6, 7, true, "pandey"]
// arr1[2]="Kumar"
// console.log(arr1);

// /// Second Method-- with length as 0 initially but assign values as per their index accordingly

// let arr2 = []; /// I have created an empty aray; values will be assigned later as per need.
// arr2[0] = 1;
// arr2[1] = "Rahul";
// arr2[2] = "Pooja";
// arr2[3] = true;
// arr2[4] = 4;
// arr2[5] = 4;
// arr2[6] = 4;
// arr2[7] = 4;
// arr2[10] = 7;
// console.log(arr2);

// ///3rd Method -- it is the method of creating an arry by using new Array keyword

// let arr4 = new Array(1,2,3,true,"akp");
// console.log(arr4);


// ///push, pop, shift, unshift, slice, splice,some, every, indexof, concat, join, reverse,
// //lastIndexof, sort(fn/fn)


let arr1 = [1,2,3,4,5,5,5];
let arr2 = [6,7,8,9,10];

//concat-- It will join two arrays one after the other.
console.log(arr1.concat(arr2));

/// JOin -- it is use to join the elements of single array as per the requirement.

console.log(arr2.join(" "));


/// Push-- its used to add an element to an  array at the last position .

arr1.push(9);
arr1.push(true);
console.log(arr1);


///Pop-- it's used to remove an elements form last positon.
arr1.pop();
arr1.pop();
console.log(arr1);

///shift-- it remove the elements in the first position
arr2.shift();
console.log(arr2);


///unshift-- it add the element to the first position
arr2.unshift(true);
console.log(arr2);


// indexOf--

console.log(arr1.indexOf(5));

//lastindexof--
console.log(arr1.lastIndexOf(5));



/// reverse-- It will reverse the element of the array\
/// it also manipulate the original array
// console.log(arr1.reverse());

console.log(arr1);

///sort-- ararnges in ascending order and it is a manipulative method
// the sort() sorts the element as string in alphabetical  and ascending order.
let arr5 = [4,6,2,6,9,true,"name", 3,1]
// console.log(arr5.sort());
let arr6 = [456,66,33,22,4,5,6]
// console.log(arr6.sort());
console.log(arr6.reverse());

///slice --

// console.log(arr5.slice(2,6));


// let arr4=[1,2,3,4,5]
//splice--
// console.log(arr4);
// arr4.splice(2,0,8,9);//dose manipulate the array [1,2,3,8,9,4,5]
// console.log(arr4);
// arr4.splice(2,1,8,9);//[1,2,8,4,5]
// arr4.splice(2,2);
// console.log(arr4);
// console.log(arr4.splice(2,3));/// this return us an array with removed elements
// console.log(arr4);// this has now been manipulated , i.e.- the elements are paramanetly removed from the original arry.



/// Some and every ---  returns a boolean value(i.e.- true/flase)
//some-- check only single value to be true
// every-- check every value to be true
// let result = arr4.some(check);// true
// function check(val){
//     return val > 2;
// }
// console.log(result);
// let result = arr4.every(check);
// function check(val){
//     return val >=1;
// }
// console.log(result);

// console.log(arr4.every(function (val){
//     return val >=1;
// }))



/// for of loop-- print the element of the array
            
// for(let key of arr4){
//     console.log(key); ///1,2,3,4,5
// }
// for in loop-- print the index of the array

// for (let key in arr4){
//     console.log(key);///0,1,2,3,4
// }

let arr4=[1,2,3,4,5]

//// forEach-- It will traverse through each of the element individualy and do the necessary operation on it and 
// print but not  return the result.
arr4.forEach(function(val){// it will not manipulate the array
    val+=2;////this is similar to val=val+2;
    return val; ///undefined
    // console.log(val)
});
console.log(arr4);

//Map filter and reduce-- they  are one liner function .


/// map--
console.log(arr4.map(val => val +2 )); //[3,4,5,6,7]/// this make / returns a new array with the updared elements but does not changes 
///original array
console.log(arr4);

///filter-- it will check condition and print the all element which satisfies the condition
console.log(arr4.filter(val => val > 2));//print only those values which conditon are met
console.log(arr4);

// reduce-- it is use to add all element of the array.
//// it try to reduce the whole array element in the single element which is the condition we write.
console.log(arr4.reduce((acc, cur)=> acc = acc + cur, 0));

