/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//console.log("Hello Rigo from the console!");
//};

//write your code here
window.onload = () => {
  document.querySelector("#left-icon").innerHTML = generateSup();
  document.querySelector("#number").innerHTML = generateNumber();
};
let generateSup = () => {
  let Icon = ["♠", "♣", "♥"];
  let IndexIcon = Math.floor(Math.random() * Icon.length);

  document.querySelector("#right-icon").innerHTML = Icon[IndexIcon];
  return Icon[IndexIcon];
};

let generateNumber = () => {
  let number = ["A", "2", "3", "4", "5", "6", "7", "8"];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
};
