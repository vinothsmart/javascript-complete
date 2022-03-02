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
// friends = ["Sandhiya", "Ruban", "Kanna"]; this is not allowed

const firstName = "Vinothkanna";
const vinoth = [
  firstName,
  "S",
  2022 - 1990,
  "Senior Software Developer",
  friends,
];
console.log(vinoth);
console.log(vinoth.length);

const calAge = (year) => 2022 - year;

const ageYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(ageYears[0]);
const age2 = calAge(ageYears[1]);
const age3 = calAge(ageYears[2]);
console.log(age1, age2, age3);

const ages = [calAge(ageYears[0]), calAge(ageYears[1]), calAge(ageYears[2])];
console.log(ages);


const friends = ["Sandhiya", "Ruban", "Mari"];

// Add elements
const newLength = friends.push("Johnson");
console.log(friends);
console.log(newLength);

friends.unshift("Santhosh");
console.log(friends);

// remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Ruban"));
console.log(friends.indexOf("Kanna"));

friends.push(23);
console.log(friends.includes("Ruban"));
console.log(friends.includes("Kanna"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Ruban")) {
  console.log("Ruban is a friend");
}


const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips);
console.log(totals);


const vinothArray = [
  "Vinoth",
  "Kanna",
  2022 - 1990,
  "Senior Software Developer",
  ["Sandhiya", "Ruban", "Mari"],
];


const vinoth = {
  firstName: "Vinoth",
  lastName: "Kanna",
  age: 2022 - 1990,
  job: "Senior Software Developer",
  friends: ["Sandhiya", "Ruban", "Mari"],
};

console.log(vinoth);
console.log(vinoth.lastName);
console.log(vinoth["lastName"]);

const namekey = "Name";
console.log(vinoth["first" + namekey]);
console.log(vinoth["last" + namekey]);

// console.log(vinoth."first" + namekey); this will not work
console.log(vinoth[namekey]);

const interestedIn = prompt("what do you want to do know about vinoth?");
if (vinoth[interestedIn]) {
  console.log(vinoth[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName,lastName, age, job, friends"
  );
}

vinoth.location = "Chennai";
vinoth["twitter"] = "@vinothkanna90";
console.log(vinoth);

// Challenge
// vinoth best friend Sandhiya
console.log(
  `${vinoth.firstName} has ${vinoth.friends.length}, and his best friend is ${vinoth.friends[0]}`
);

const vinoth = {
  firstName: "Vinoth",
  lastName: "Kanna",
  birthYear: 1990,
  job: "Senior Software Developer",
  friends: ["Sandhiya", "Ruban", "Mari"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

// console.log(vinoth.calcAge(vinoth.birthYear));
// console.log(vinoth["calcAge"](vinoth.birthYear));
console.log(vinoth.calcAge());
console.log(vinoth.age);

// vinoth is a 32 years old Senior Software Developer he has drivers license
console.log(vinoth.getSummary());


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName} has a higher BMI`);
} else if (mark.bmi < john.bmi) {
  console.log(`${john.fullName} has a higher BMI`);
} else {
  console.log(`Both have same BMI`);
}


for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition " + rep);
}

*/

const vinothArray = [
  "Vinoth",
  "Kanna",
  2022 - 1990,
  "Senior Software Developer",
  ["Sandhiya", "Ruban", "Mari", "Simbu oru Vambu"],
  true,
];

const types = [];

for (let i = 0; i < vinothArray.length; i++) {
  // console.log(vinothArray[i], typeof vinothArray[i]);

  // Filling types array
  // types[i] = typeof vinothArray[i];
  types.push(typeof vinothArray[i]);
}

console.log(types);

const years = [1990, 1965, 1937, 2005, 1998];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

//continue and break
console.log("--- Only String ---");
for (let i = 0; i < vinothArray.length; i++) {
  if (typeof vinothArray[i] !== "string") continue;
  console.log(vinothArray[i], typeof vinothArray[i]);
}

console.log("--- Break  with number ---");
for (let i = 0; i < vinothArray.length; i++) {
  if (typeof vinothArray[i] === "number") break;
  console.log(vinothArray[i], typeof vinothArray[i]);
}
