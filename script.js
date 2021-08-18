// let js = 'amazing';
// if(js==='amazing') alert('Javascript is FUN!');

// console.log(10+8+23-10);


//---- CHALLENGE #1 ----

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);


//---- CHALLENGE #2 ----

if(markHigherBMI){
   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else{   
   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}