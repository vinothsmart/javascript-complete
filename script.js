// Remember , we're gonna use srtice in all scripts now
"use strict";

const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Enter temperature in celsius")),
  };

  // console.log(measurement);
  // console.table(measurement);
  // console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
