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