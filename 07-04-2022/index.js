console.log("working");

//DOM-- Document Object Modile
// we use DOM manipulation for making dynamic changes.
// we can make changes by accessing an element via: id's, tags and className
const element1 = document.getElementById("text");
console.log(element1);
// document.getElementById("text").innerHTML = "Pandey "

element1.innerText = ""; // we can use both text and HTML it gives same output.
element1.innerHTML = "Good to here that you are fine";


const element2 = document.getElementsByClassName("trip");
console.log(element2[0].innerText);
// element2[0].innerText = "good to here that";
element2[0].innerText = "Signin";
console.log(element2[0].innerText);
element2[0].style.color = "blue";
// element2.innerHTML="hi bother";

const element3 = document.getElementsByTagName("h1");
console.log(element3);

element3[0].style.color = "blue";
element3[1].style.color = "green";
element3[2].style.color = "red";

function changeText(){
    const trying1 = document.getElementsByClassName("trip");
    trying1[0].innerText = "Welcome to prepbytes";
    trying1[0].style.color = "orange";
    // trying1[0].innerText.style.color = "violet";
    console.log(trying1);
    const trying2 = document.getElementsByTagName("button");
    trying2[0].innerText = "Signout";
    trying2[0].style.color="red"
    
    console.log(but);

}