let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("vinoth");
console.log(23);

let firstName = "Vinoth";
console.log(firstName);

let person = "vinoth";
let PI = 3.1415;

let myFirstJob = "android developer";
let mycurrentJob = "web developer";

console.log(myFirstJob);

// let country = "Portugal";
// let continent = "Europe";
let population = 10;
// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

language = "portuguese";
const country = "Portugal";
const continent = "Europe";
const isIsland = false;
// isIsland = true;

console.log(language);
console.log(country);
console.log(continent);
console.log(isIsland);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> '617'
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// LATER : This helps us prevent bugs
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descPortugal, descGermany, descFinland);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million
  people, which is about ${percentage}% of the world.`;
  console.log(description);
};
describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const neighbours = ["Norway", "Sweden", "Russia"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million
  ${myCountry.language}-speaking people,
  ${myCountry.neighbours.length} neighbouring countries and
  a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

const myCountry2 = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million
  ${this.language}-speaking people,
  ${this.neighbours.length} neighbouring countries and a
  capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};
myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

for (let voter = 1; voter <= 50; voter++)
  console.log(`Voter number ${voter} is currently voting`);

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);
