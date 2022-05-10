
function akp(){
    const element1 = document.getElementsByClassName("contaienr1");
    element1[0].style.flexDirection = "column";
    let element2 = document.getElementsByTagName("img");
    element2[0].src = "./img2.jpg";
    
}
function akp2(){
    const element1 = document.getElementsByClassName("contaienr1");
    element1[0].style.flexDirection = "row";
    let element2 = document.getElementsByTagName("img");
    element2[0].src = "./img1.jpg";
}
let element5 = document.getElementsByClassName("pandey");
element5.innerHTML="<div> I am Pandey </div>"
console.log("element5");

let element6 = document.createElement("div");
element6.className = "newDiv";
element6.id = "newDiv";
element6.innerText="hey guys what are you doing";
element6.setAttribute=("for","myDiv");


let element7 = document.querySelector("div.trip");// it finds out the element where wewant to add a created element
element7.appendChild(element6); //this helps us adding the child element / the one we  created recentely

let element8 = document.querySelector("div#trip1");
element8.appendChild(element6); //this helps us adding the child element / the one we  created recentely



console.log(element6);
console.log(element7);
console.log(element8);

// element6.removeChild(element6)