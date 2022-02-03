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
*/

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
