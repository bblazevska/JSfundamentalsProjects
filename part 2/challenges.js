// --------- CHALLENGE #1 ----- //

// const calcAverage = (score1, score2, score3) => {
//    return (score1 + score2 + score3) / 3;
// }

// function checkWinner (avgDolphins, avgKoalas){
//    if(avgDolphins >= 2*avgKoalas){
//       console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);  
//    }else if(avgKoalas >= 2*avgDolphins){
//       console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//    }else console.log('There is no winner!');
// }

// const avgDolphins1 = calcAverage (44,23,71);
// const avgDolphins2 = calcAverage (85,54,41);

// const avgKoalas1 = calcAverage(65,54,49);
// const avgKoalas2 = calcAverage(23,34,27);

// checkWinner(avgDolphins1,avgKoalas1);
// checkWinner(avgDolphins2,avgKoalas2);


// --------- CHALLENGE #2 ----- //

// const calcTip = (bill) => {
//    return bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// }

// // console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);


// --------- CHALLENGE #3 ----- //

// const mark = {
//    fullName: 'Mark Miller',
//    mass: 78,
//    height: 1.69,
//    calcBMI: function(){
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//    }
// };
// const john = {
//    fullName: 'John Smith',
//    mass: 92,
//    height: 1.95,
//    calcBMI: function(){
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//    }
// };

// if(mark.bmi > john.bmi){
//    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// }else if(john.bmi > mark.bmi){
//    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }



// --------- CHALLENGE #4 ----- //


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
   return bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

for (let i = 0; i < bills.length; i++) {
   tips.push(calcTip(bills[i]));

   totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

const calcAverage = (arr) =>{
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
      sum += arr[i];
   }
   return sum / arr.length;
}

console.log(calcAverage(totals));