'use strict';

/*
const bookings = [];

//default params
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);


const flight = 'LH234';
const jonas = {
  name: 'Danilo Lamazales',
  passport: 242532,
};

const checkIN = function (flightNum, passengers) {
  flightNum = 'LH999';
  passengers.name = 'Mr. ' + passengers.name;

  if (passengers.passport === 242532) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
};

checkIN(flight, jonas);
console.log(flight);
console.log(jonas);




/////////////////////////////////////////////////
// Function Acppeting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('High five');
};

document.body.addEventListener('click', high5);


//////////////////////////////////////////////////////
// Return functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hi');
greeter('Jonas');

greet('Hello')('Danilo');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);


/////////////////////////////////////////////////////
// aplly methods

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Danilo Lamazales');
lufthansa.book(635, 'John smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'SarahWilliams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

// apply
const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

// With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// PArtial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));



/////////////////////////////////////////////////
// IIFE

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();
*/

//////////////////////////////////////////////////
//Closures

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

let booker = secureBooking();
booker();
booker();
