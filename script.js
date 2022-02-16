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


// function declaration
function calcAge1(brithYear) {
  return new Date().getFullYear() - brithYear;
}

const age1 = calcAge1(1990);
console.log(age1);

// function expression
const calcAge2 = function (brithYear) {
  return new Date().getFullYear() - brithYear;
};

const age2 = calcAge2(1990);
console.log(age1, age2);


// Arrow function
const calcAge3 = (brithYear) => new Date().getFullYear() - brithYear;

const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (brithYear, firstName) => {
  const age = new Date().getFullYear() - brithYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, "Vinoth"));
console.log(yearsUntilRetirement(2021, "Johnson"));


const cutPieces = (fruit) => fruit * 4;

const fruitProcessor = (apples, oranges) => {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
};

console.log(fruitProcessor(2, 3));


const calAge = function (year) {
  return 2022 - year;
};

const yearsUntilRetirement = function (brithYear, firstName) {
  const age = new Date().getFullYear() - brithYear;
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} is already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1990, "Vinoth"));
console.log(yearsUntilRetirement(1950, "Johnson"));


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreVinoth = calcAverage(44, 23, 71);
let scoreJohnson = calcAverage(65, 54, 49);
console.log(scoreVinoth, scoreJohnson);

const checkwinner = (averageVinoth, averageJohnson) => {
  if (averageVinoth >= 2 * averageJohnson) {
    return `Vinoth Wins  ${averageVinoth} vs ${averageJohnson}`;
  } else if (averageJohnson >= 2 * averageVinoth) {
    return `Johnson Wins ${averageVinoth} vs ${averageJohnson}`;
  } else {
    return "Draw";
  }
};

console.log(checkwinner(scoreVinoth, scoreJohnson));
console.log(checkwinner(576, 111));

// Test 2
scoreVinoth = calcAverage(85, 5, 41);
scoreJohnson = calcAverage(23, 34, 27);
console.log(checkwinner(scoreVinoth, scoreJohnson));
*/

// introduction to arrays
const friend1 = "Sandhiya";
const friend2 = "Ruban";
const friend3 = "Mari";

const friends = ["Sandhiya", "Ruban", "Mari"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0], friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Kanna";
console.log(friends);
