function time(){


var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampm = document.getElementById("ampm");


var time = new Date()

var hrs = time.getHours()
var mins = time.getMinutes();
var secs = time.getSeconds();
var am_pm = "AM";

if (hrs ==9){
    hrs =12;
}
if (hrs>12){
    hrs = hrs-12;
    am_pm = "PM"
}

if (hrs<10){
    hrs = "0"+hrs;
}
if (secs<10){
    secs = "0"+secs;
}

hours.innerText=hrs;
seconds.innerText=mins;
minutes.innerText=secs;
ampm.innerText = am_pm;

}
// time();
var oneseconds = 1000;
setInterval(time,oneseconds)