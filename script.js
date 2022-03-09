// Remember , we're gonna use srtice in all scripts now
'use strict';

/*const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const calcTempAmplitudeNew = (t1, t2) => {
  const temps = [...t1, ...t2];
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const mergeArray = [...array1, ...array2];

console.log(mergeArray);

const checking = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(checking);
*/

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Enter temperature in celsius')),
    value: 10,
  };

  // console.log(measurement);
  // console.table(measurement);
  // console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Using Debugger
const calcTempAmplitudeNewBug = (t1, t2) => {
  const temps = [...t1, ...t2];
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const mergeArray = [...array1, ...array2];

console.log(mergeArray);

const amplitudeBug = calcTempAmplitudeNewBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);
