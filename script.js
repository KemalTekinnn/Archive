"use strict";
console.log("Connected");
// Variables
const modeBtn = document.getElementById("mode");
const bodyClass = document.getElementById("body-section").classList;
const h1 = document.querySelector(".main-title").classList;
const fotLink = document.getElementById("footer-link").classList;
const fotLink1 = document.getElementById("footer-link1").classList;
console.log(bodyClass);
// Button Function
modeBtn.addEventListener("click", function () {
  modeBtn.classList.toggle("white");
  bodyClass.toggle("black");
  h1.toggle("white");
  fotLink.toggle("white");
  fotLink1.toggle("white");
});
