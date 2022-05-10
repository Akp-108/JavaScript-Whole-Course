//// LOOPs
//if block
// only two condtiton   
// example1 - preson is adult or not(less than 18 or grater then equal to 18)
// example2 - either true then if block / for false else block executed.
//if
// let percentage = 80;
// if(percentage>=90){
//     console.log("I will take science");
// }
// else{
//     console.log("I will take commerce only");
// }


////else if block
/// minimum three condition are requred 
/// example - child , adult, senior citizon(>=65)
// let age = 105;
// if (age >= 18)  //if block
// {
//     console.log("Junior");
// }
// else if ( age < 18) //else if block
// {
//     console.log("child");
// }

// else // else block
// {
//     console.log("Adult");
// }


// markes less than 40 // fail
// marks 40-50 // grade d
// marks 50-60 // grade c
// marks 61 - 70 // grade b
/// marks 70-100 // grade a
// marks = 40;
// if(marks > 70) {
//     console.log("C");
// }
// else if(marks > 60 && marks <=70){
//     console.log("B");
// }
// else if (marks > 50 && marks <=60) {
//     console.log("C");
// }
// else if(marks >=40 && marks <=50) {
//     console.log("D");
// }
// else {
//     console.log("F");
// }

/// Switch Statement -- used when we have minimum 4 conditons.
/// if the case is match then that paticular statemet is executed.
/// particular case might have more than one statemet.
/// break keyword , which is not compulsary it is optional.
// switch ("A") {
//     case "A":
//         console.log("A");
//         break;
//     case "B":
//     console.log("B");
//         break;
//     case "C":
//         console.log("C");
//         break;
//     case "D":
//         console.log("D");
//         break;
//     case "D":
//         console.log("D");
//         break;

//     default:
//         console.log("Z");
//         break;
// }

// let marks = 75;
// switch (marks) {
//     case "marks > 70":
//         console.log("A");
//         break;
//     case "marks > 60 && marks <=70":
//     console.log("B");
//         break;
//     case "marks > 50 && marks <=60" :
//         console.log("C");
//         break;
//     case "marks >=40 && marks <=50":
//         console.log("D");
//         break;
//     default:
//         console.log("F");
//         break;
// }


// let n=1234;

// let cout;
// for(let i=4; i<3; i++){
//     n = (parseInt(n/10));
//      cout = cont +1;
// }
// console.log(cout);

var n = 12345678910;
function countDigit(n){
    if (n/10==0)
        return 0;
        return 1 + countDigit(parseInt(n/10));
    
}
console.log("Number of digits : "+ countDigit(n));