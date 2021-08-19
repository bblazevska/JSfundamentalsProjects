// let js = 'amazing';
// if(js==='amazing') alert('Javascript is FUN!');

// console.log(10+8+23-10);


//---- CHALLENGE #1 ----//

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
// // const markMass = 95;
// // const markHeight = 1.88;
// // const johnMass = 85;
// // const johnHeight = 1.76;
// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);


//---- CHALLENGE #2 ----//

// if(markHigherBMI){
//    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else{   
//    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
// }


//-------- CHALLENGE #3 -------//

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const dolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) /3;

// const koalasScore = (koalasScore1 + koalasScore2 + koalasScore3) /3;

// if(dolphinsScore > koalasScore){
//    console.log(`Winners are the Dolphins!`);
// }else if(koalasScore > dolphinsScore){
//    console.log(`winners are the Koalas!`);
// }else if(dolphinsScore === koalasScore){
//    console.log(`It's draw! No one won!`);
// }

// BONUS 1
// const dolphinsScore = (97 + 112 + 101) /3;

// const koalasScore = (109 + 95 + 123) /3;

// if(dolphinsScore > koalasScore & dolphinsScore >= 100){
//    console.log(`Winners are the Dolphins!`);
// }else if(koalasScore > dolphinsScore & koalasScore >= 100){
//    console.log(`winners are the Koalas!`);
// }else if(dolphinsScore === koalasScore){
//    console.log(`It's draw! No one won!`);
// }


// BONUS 2
const dolphinsScore = (97 + 112 + 101) /3;

const koalasScore = (109 + 95 + 106) /3;

if(dolphinsScore > koalasScore & dolphinsScore >= 100){
   console.log(`Winners are the Dolphins!`);
}else if(koalasScore > dolphinsScore & koalasScore >= 100){
   console.log(`winners are the Koalas!`);
}else if(dolphinsScore === koalasScore & dolphinsScore >= 100 & koalasScore >= 100){
   console.log(`It's draw! No one won!`);
}