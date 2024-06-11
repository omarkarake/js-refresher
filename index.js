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

function logger() {
    console.log('my name is Omar');
}

// calling / running / invoking
logger(); // will log same thing
logger(23); // will log same thing

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const applesOrangeJuice = fruitProcessor(4, 5);
console.log(applesOrangeJuice);