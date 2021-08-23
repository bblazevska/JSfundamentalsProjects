// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//--- CHALLENGE ---/

const printForecast = arr => {
  let string = '... ';
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return string;
};

const temp = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

console.log(printForecast(temp));
console.log(printForecast(temp2));
