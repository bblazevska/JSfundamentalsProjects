"use strict";

// function logger() {
//   console.log("My name is Bojana");
// }

// logger(); //invoking/calling/running the function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function calcAge1(birthYear){   //function declaration
//    return 2037 - birthYear;
// }

// const age1 = calcAge1(1998);

// const calcAge2 =  function (birthYear) { // function expression
//    return 2037 - birthYear;
// }

// const age2 = calcAge2(1998);

// console.log(age1, age2);


//Arrow functions

// const calcAge3 = birthYear => 2037-birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntillRetirement = (birthYear, firstName) => {
//    const age = 2037 - birthYear;
//    const retirement = 65 - age;
//    return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntillRetirement(1998, 'Bojana'));
// console.log(yearsUntillRetirement(1990, 'Bob'));


//-------- ARRAYS --------------//

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// friends[2] = 'Jay';
// console.log(friends);

// // exercise

// const calcAge = function (birthYear){
//    return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);


// -- ARRAY METHODS -- //

// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends);

// friends.unshift('John');
// console.log(friends);


// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));


// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// if(friends.includes('Steven')){
//    console.log('You have a friend called Steven.');
// }



// ----------- OBJECTS ---------- //

// const bojanaArray = [
//    'Bojana',
//    'Kuzeva',
//    2037-1998,
//    'developer',
//    ['Simona','Ana','Martina']
// ];

// const bojana = {
//    firstName: 'Bojana',
//    lastName: 'Kuzeva',
//    age: 2037 - 1998,
//    job: 'developer',
//    friends: ['Simona','Ana','Martina']
// };

// console.log(bojana);


// console.log(bojana.lastName);
// console.log(bojana['lastName']);


// const interestedIn = prompt('What do you want to know abaout Bojana? Choose between firstName, lastName, age, job and friends.');


// if(bojana[interestedIn]){
//    console.log(bojana[interestedIn]);
// }else{
//    console.log('Wrong request!Choose between firstName, lastName, age, job and friends.');
// }

// bojana.location = 'Macedonia';
// bojana['instagram'] = '@kuzeva_';
// console.log(bojana);

// //Challenge

// console.log(`${bojana.firstName} has ${bojana.friends.length} friends, and her best friend is ${bojana.friends[0]}`);




//  OBJECTS METHODS

// const bojana = {
//       firstName: 'Bojana',
//       lastName: 'Kuzeva',
//       birthYear: 1998,
//       job: 'developer',
//       friends: ['Simona','Ana','Martina'],
//       hasDriversLicence: true,

      // calcAge: function(birthYear){
      //    return 2037 - birthYear;
      // }
      // calcAge: function(){
      //    return 2037 - this.birthYear;
      // }

//       calcAge: function(birthYear){
//          this.age = 2037 - birthYear;
//          return this.age;
//       }
// };

// console.log(bojana.calcAge());
// console.log(bojana['calcAge'](bojana.birthYear));


//  FOR LOOPS

// for(let rep = 1; rep <= 10; rep++){
//       console.log(`Lifting weights repetition ${rep}`);
// }

// const bojana = [
//       'Bojana',
//       'Kuzeva',
//       2037-1998,
//       'developer',
//       ['Simona','Ana','Martina']
// ];
// const types = [];

// for (let i = 0; i < bojana.length; i++) {
      // console.log(bojana[i]);

      // types[i] = typeof bojana[i];
      // types.push(typeof bojana[i]);
// }
// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//       ages.push(2037 - years[i]);
// }
// console.log(ages);


// CONTINUE AND BREAK
// console.log('-----ONLY STRINGS-----');
// for (let i = 0; i < bojana.length; i++) {
//       if(typeof bojana[i] !== 'string') continue;

//       console.log(bojana[i], typeof bojana[i]);
// }

// console.log('---BREAK WITH NUMBER----');
// for (let i = 0; i < bojana.length; i++) {
//       if(typeof bojana[i] === 'number') break;
//       console.log(bojana[i], typeof bojana[i]);
// }


// LOOPING BACKWARDS

// for (let i = bojana.length -1 ; i >= 0; i--) {
//      console.log(i, bojana[i]);
      
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//       console.log(`--- Starting exercise ${exercise} ---`);

//       for(let rep = 1; rep < 6; rep++){
//             console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
//       }
      
// }


/// WHILE LOOP

// for(let rep = 1; rep <= 10; rep++){
//       console.log(`Lifting weights repetition ${rep}`);
// }

// let rep1 = 1;
// while(rep1 <= 10){
//       console.log(`Lifting weights repetition ${rep1}`);
//       rep1++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//       console.log(`You rolled a ${dice}`);
//       dice = Math.trunc(Math.random() * 6) + 1;
//       if(dice === 6) console.log('Loop is about to end..');
// }