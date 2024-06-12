'use strict';

// what is strict mode?
// strict mode is special mode that we can activate in js, which make it easier for us to write secure js code
// and we have to do is to write this string: 'use strict';
// strict mode forbid us to do certain things and next it actually create visible errors for us so in certain situation, so without strict mode js will fail silently and do not notify us that we did a mistake
// strict mode reserve keyword so that we can not use them as variable names

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDriverLicence = true; // we will get an error because we forgot s in driversLicence, reference error will be got
// }

// if (hasDriversLicence) {
//   console.log('I can drive');
// }

// const interface = "newInterface"; //will get reserved keyword error
// const private = 123; //will get reserved keyword error

// -------------------------------------------------------------------------------------

// function logger() {
//     console.log('my name is Omar');
// }

// // calling / running / invoking
// logger(); // will log same thing
// logger(23); // will log same thing

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// const applesOrangeJuice = fruitProcessor(4, 5);
// console.log(applesOrangeJuice);

// ---------------------------------------------------------------------------------------
// you can call function declaration before or after declaring function
// but function expression only be called after creating it.
// function declaration

// function ageCalc1(years) {
//     return 2030 - years;
// }

// console.log(ageCalc1(1991));

// // function expression

// const ageCalc2 = function (years) {
//     return 2030 - years;
// }

// console.log(ageCalc2(1991));

// // Arrow functions

// const ageCalc3 = years => 2030 - years;
// const age3 = ageCalc3(1991);
// console.log(age3);

// const yearsUntilRetirement = (years, firstName) => {
//     const age = 2030 - years;
//     const yearsLeft = 65 - age;
//     return `${firstName} retires in ${yearsLeft} years`;
// };

// console.log(yearsUntilRetirement(1991, "bob"));
// console.log(yearsUntilRetirement(1980, "marley"));

// ------------------------------------------------
// calling function inside other function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice
// }

// console.log(fruitProcessor(2, 3));

// -------------------------------------------------
// array challenge

const calcTip = function (bill) {
    return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bill, tips, totals);