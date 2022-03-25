/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("vinoth");
console.log(23);

let firstName = "Vinoth";
console.log(firstName);

// Variable name convention
let person = "vinoth";
let PI = 3.1415;

let myFirstJob = "android developer";
let mycurrentJob = "web developer";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Vinoth");

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 2020;
console.log(typeof year);

console.log(typeof null);


// reassign or mutate the value
let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1991;
// const job;

var job = "web developer";
job = "frontend developer";

// let is a block scope
// var is a function scope

lastName = "Srinivasan";
console.log(lastName);


// Math operators
const now = 2037;
const ageVinoth = now - 1990;
const ageJohnSon = now - 2018;
console.log(ageVinoth, ageJohnSon);

console.log(ageVinoth * 2, ageJohnSon / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 or 2 * 2 * 2

const firstName = "Vinoth";
const lastName = "Srinivasan";
console.log(firstName + " " + lastName); // this will join string

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x- 1 = 100
x--;
console.log(x);

// comparison operators
console.log(ageVinoth > ageJohnSon); // true
console.log(ageJohnSon >= 18); // true

const isFullAge = ageJohnSon >= 18;

console.log(isFullAge);
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageVinoth = now - 1990;
const ageJohnSon = now - 2018;

console.log(now - 1990 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y =10, x = 10

console.log(x, y);
const averageAge = (ageVinoth + ageJohnSon) / 2;
console.log(ageVinoth, ageJohnSon, averageAge);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = "Vinoth";
const job = "react developer";
const birthYear = 1990;
const year = 2022;

const vinoth =
  "I',m " + firstName + ", a" + (year - birthYear) + " years old" + job + "!";

console.log(vinoth);

const vinothNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(vinothNew);

console.log(`Just a regualr string`);

console.log("String with \n mutiple \n lines");

console.log(`String
multiple
lines`);


const age = 19;

if (age >= 18) {
  console.log("You are old enough to vote");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You are not old enough to vote, you have ${yearsLeft} years left`
  );
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIMark}) is higher than Mark's (${BMIJohn})`);
}


// type conversion
const inputYear = "1990";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am" + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" * 2);
console.log("23" / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0 , '', null, undefined, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Vinoth"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 1;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You Should get a job!");
}

let height = 0;

if (height) {
  console.log("height is defined");
} else {
  console.log("height is not defined");
}


const age = 18;
if (age === 18) console.log("You are old enough to vote (strict)");
if (age == 18) console.log("You are old enough to vote (loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // '23' == 23
  console.log("You are right 23");
} else if (favourite === 7) {
  console.log("You are right 7 also");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("You are not right 23");
}

const hasDriversLinese = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLinese && hasGoodVision);
console.log(hasDriversLinese || hasGoodVision);
console.log(!hasDriversLinese);

// if (hasDriversLinese && hasGoodVision) {
//   console.log("Vinoth is able to drive");
// } else {
//   console.log("Vinoth is not able to drive");
// }

const isTried = true;
console.log(hasDriversLinese && hasGoodVision && isTried);

if (hasDriversLinese && hasGoodVision && !isTried) {
  console.log("Vinoth is able to drive");
} else {
  console.log("Vinoth is not able to drive");
}



// const scoreDolphins = (96 + 108 + 89) / 3;
// const socoreKoalas = (88 + 100 + 110) / 3;
// console.log(scoreDolphins, socoreKoalas);

// if (scoreDolphins > socoreKoalas) {
//   console.log("Dolphins win ");
// } else if (socoreKoalas > scoreDolphins) {
//   console.log("Koalas win");
// } else {
//   console.log("Draw");
// }

// Bonus 1
const scoreDolphins = (97 + 112 + 101) / 3;
const socoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, socoreKoalas);

if (scoreDolphins > socoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win");
} else if (socoreKoalas > scoreDolphins && socoreKoalas >= 100) {
  console.log("Koalas win");
} else if (
  scoreDolphins === socoreKoalas &&
  socoreKoalas >= 100 &&
  scoreDolphins >= 100
) {
  console.log("Draw");
} else {
  console.log("No winner");
}


const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("It's Monday");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("It's Wednesday OR It's Thursday");
    break;
  case "Friday":
    console.log("It's Thursday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's Jolly day weekend");
    break;
  default:
    console.log("It's not a day");
    break;
}

if (day === "Monday") {
  console.log("It's Monday");
} else if (day === "Tuesday") {
  console.log("It's Tuesday");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("It's Wednesday OR Thursday");
} else if (day === "Friday") {
  console.log("It's Friday");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("It's Jolly day weekend");
} else {
  console.log("It's not a day");
}


// statements
if (23 > 10) {
  const str = "23 is greater than 10";
}

// expressions
const me = "Vinoth";
console.log(`I'm ${2022 - 1990} years old ${me}`);



const age = "31";
age >= 18 ? console.log("You can vote") : console.log("You can't vote");

const vote = age >= 18 ? "You can vote" : "You can't vote";
console.log(vote);

let vote2;
if (age >= 18) {
  vote2 = "You can vote";
} else vote2 = "You can't vote";
console.log(vote2);

console.log(`You like to vote ${age >= 18 ? "Yes" : "No"}`);

*/

const bill = 275;
const tip = bill <= 300 && bill >= 200 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill is ${bill} and the tip is ${tip} and total is ${bill + tip}`
);
