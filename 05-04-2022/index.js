console.log("working");

//what are Map?
// It contains a unique key value pair. It preserves the order of insertion. the key can be of 
//any data type.

// How do we creat a map?
// let myMap = new Map();

// How do we gives vlaues to it?

// there are two ways : 
// 1. Insert of array of array, 2. using set method

let myMap1 = new Map([
    [1,"this a number"],
    ["1","this a sting"],
    [true,"this a boolean"],
]);
console.log(myMap1);


/// other method is to use set method.
let myMap = new Map();
myMap.set("name","Ravi");
myMap.set("age","25");
myMap.set("false","This is a boolean value");       
// myMap.set("null1",null)
myMap.set("null",undefined)

console.log(myMap);


//get()-- it is use to print the value of the map for this we use key in side the bracket
console.log(myMap.get("name") );
console.log(myMap.get("age") );
console.log(myMap.get("false") );
console.log(myMap.get("falase") );/// if a key is not present it returns us with undefoned vlaue
console.log(myMap.get("null") );

/// has gives us a boolean value true if the key is present else false
console.log(myMap.has("false"));//true
console.log(myMap.has("falase"));//false
console.log(myMap.has("name"));//true
console.log(myMap.has());//false


//delete- it deletes a particular key value pair
myMap.delete("null");
console.log(myMap);

//clear-- it clears the entite map.
// myMap.clear();
// console.log(myMap);//0


//size-- it gives us the size of the map
console.log((myMap.size))

//typeof- it gives us the data type of that paricular thing.
console.log(typeof(myMap));//object

myMap.forEach(function(val,key){ // first val then key.
    // console.log("the key is" + key + "and value is" + val);
    console.log(`the key is ${key} and vlaue is ${val}`);// tilda , backtik laying below the esc key
})
 
console.log("....................");


// keys-- these access all keys
for(let key of myMap.keys()){
    console.log(key);
}

// values()- these access all the vlaues
for(let value of myMap.values()){
    console.log(value);
}


// entires()-- it prints array of key values pairs
for(let value of myMap.entries()){
    console.log(value);
}



//sets-- These consists of unique values , no keys are present , The values occur for only once
// values can be of any data type.

/// hoe do we  create a set?
// let mySet = new Set();

let mySet1 = new Set([1,36,56,"a", "name", true]);
console.log(mySet1);
// it only takes unique values, if same values are added, they will be ignored
let mySet = new Set();
mySet.add("b");
mySet.add("age");
mySet.add("age");
mySet.add("a");
mySet.add("name");
mySet.add("name");
mySet.add("a");
mySet.add("6");
console.log(mySet);

// // console.log(mySet.has(b));/// if value is not present it will gives us not defined error but
// // if present it will give true


// // mySet.delete(flase);
// // console.log(mySet);

// // mySet.clear()
// // console.log(mySet);

// mySet.forEach(function(val,key){ /// even for keys,only values will be printed (only for sets)
//     console.log(val,key);
// })

for(let key of mySet.values()){
    console.log(key)
}

//entries()-it prints the array of key values pairs where key and values both are values only
for(let key of mySet.entries()){
    console.log(key)
}