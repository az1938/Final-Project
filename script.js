const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
var heading;
var executeButton;
var outputParagraph;
var desserts = ["Go to the workout page and follow one of the videos ~", "Post one message to the positive message section!", "Today, limit your time of watching news to be only one hour.", "Message your best friend and chat with each other for a while.", "Follow one of the recipes in the food support page!"];

document.getElementById("myDate").min =  new Date('2020-1-1');
function add() {
  var a = document.getElementById('initialDate').value
  countdown();
  setInterval(countdown, 1000);
}

function countdown() {
  let newDates = document.getElementById("initialDate").value;
  const newDate = new Date(newDates).getTime();
  const now = new Date().getTime();

  var distance = newDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("initialDate").setAttribute("min", today);

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  executeButton.addEventListener("click", function(){
    generateDessert();
  });

});

function generateDessert(){
  var randomDessertIndex = Math.floor(Math.random()*desserts.length);
  outputParagraph.innerText = desserts[randomDessertIndex];
  restyleOutput();

}



function restyleOutput() {

  var randomBlue = Math.random() * 170;
  var outputColorString = "rgb(" + "254" + "," + "160" + "," + randomBlue + ")";
  outputParagraph.style.color = outputColorString;
  var outputColorString2 = "rgb(" + "254" + "," + "160" + "," + randomBlue + ")";
  outputParagraph.style.borderColor = outputColorString2;
  outputParagraph.style.fontSize = "3.5vw";
  outputParagraph.style.fontWeight = "700";
  executeButton.style.color = "white";
  executeButton.style.backgroundColor = "white";
  executeButton.style.borderWidth = "0";
  challenge.style.color = "white";


}

Fancybox.bind('[data-fancybox="gallery"]', {
      infinite: false
    });
