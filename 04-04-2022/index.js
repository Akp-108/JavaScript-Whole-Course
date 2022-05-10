console.log("working");

//////String-- anything enclosed between bouble inverted commas or singel inverted commas are khows as string
// string index value also start form 0.

/// charAt, concat, startwith, endWith, includes, indexOf , LastIndexOf, Lenght, replace, search, slice, substring
///substr, split, trim


let str = "How are you people doing?";
let str2 = "I hove you are you and are doing great!";
let str3 = "    okey    "

//1-- charAt -- It gives us the characters present at a paticular index value.
console.log(str.charAt(2));

//2.concat-- It joins two strings. This input should be given with comma separated 
console.log(str.concat(str2,str3));
console.log(str + str2);
console.log(str);
console.log(str.concat(str,str2,str3));

//3. startWith-- alaws returns a true/false value if a string with the value checked for
console.log(str.startsWith("How"));
console.log(str.startsWith("H"));
console.log(str.startsWith("w"));

//4. endsWith -- Returns a true/false value if a string with the value checked for
console.log(str.endsWith("doing?"));
console.log(str.endsWith("doing"));



//5. includes-- so  it checks if a particular part of a  string is present in the string or not..
// it returns true or false
// it checks for the first availability of the word and returns true.
console.log(str.includes("you")); 
console.log(str.includes("hey")); 

// 6. indexOf-- It gives us the index value of the first occurrence of the word.
console.log(str2.indexOf("you"));


// 7. lastIndexOf-- It gives us the index value of the last occurrence of the word.
console.log(str2.lastIndexOf("you"));

//8. Lenght -- It gives the length of the string or last indexvalue.
console.log(str2.length);


//9. Replace-- It replaces the first occurance of the  selected  word with the word we want to .
// for replacing all the occurance we should use replceAll.
console.log(str2.replace("you", "me")); // First "you" is replced by me
console.log(str2.replaceAll("you", "me")); //all you are replced  by me
console.log(str2.replace(/you/g, "me")); // all you are replced  by me
console.log(str2.replace("you","me").replace("doing", "caring"));

// let str2 = "I hove you are you and are doing great!";

//10. Search-- It Searches a paticular value/ words and returns the index value of the first occurance of the word.
console.log(str2.search("you"));
console.log(str2.search(" y"));


// 11. slice-- it will give you/extract the word / part of string from specific from indexValue(startindex)
// to the next mentioned(lastIndex - which is not included)  indexValue (exclusive); want include the last one.
// if you want to print the last character, we use -1;
console.log(str2.slice(2,10));
console.log(str2.slice(-1));
console.log(str2.slice(-5,-1)); // we can do revese operation

//12. substr-- It will take two inputs(firstIndexValue followed by the number of the characters)
// substr(indexValue, no. of characters)
console.log(str2.substr(3,5));

//13. substring - it takes two inputs values (staring index value and last index value which is not incluive/exclusive)
console.log(str2.substring(2,8));
console.log(str2.substring(8,2));// even if you give opposite index value , o/p will be same
console.log(str2.substring(-8,-2)); // no revese operation are allowed
console.log(str2.substring(-1)); // it will print the whole strinf as it is.
console.log(str2.substring(-1,4)); // when two values given, if the first value is any negative value
// it willl still considered as only, when one value given,
// which is any negative value will always print the full string

/// 14. split-- It split the string in particular character mentioned inside the quotes and converted into an array
//// let str2 = "I hove you are you and are doing great!";
console.log(str2.split(" "));

//15. trim-- It removes the white spaces from the starting and the ending of the string 
console.log(str3);
console.log(str3.trim());

//reverse of string--
console.log(str2.split("").reverse().join(""));
