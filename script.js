/*
"use strict";

let hasDriversLincese = false;
const passTest = true;

if (passTest) hasDriversLincese = true;
if (hasDriversLincese) {
  console.log("You can drive");
}

// not use in stict mode
// const interface = 'wifi';
// const private = 143;
*/

function logger() {
  console.log("My Name is Jones");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJucie = fruitProcessor(2, 4);
console.log(appleJappleOrangeJucieuice);

const num = Number("23");
