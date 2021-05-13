'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is you declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIng, ...other) {
    console.log(mainIng);
    console.log(other);
  },
};

///////////////////////////////////////////
// Maps: Iteration

const question = new Map([
  ['question', 'Qhat is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert Object to maps

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

//Conver a Map to array
console.log(...question);

/*
/////////////////////////////////////////////////
// Map

const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set(1, 'Firezen, Italy');
console.log(rest.set(2, 'Lysbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
/*
//////////////////////////////////////////////////
// SETS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(new Set('Danilo'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

//Examploe

const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

/*
///////////////////////////////////////////////////
//Looping Objects

const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We are open on ${properties.length} days`);

for (const day of properties) {
  console.log(day);
}

//Properties values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}

/*

////////////////////////////////////////////////////
// Optional Chaining

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays

const user = [{ name: 'Jonas', email: 'jonal@io.com' }];

console.log(user[1]?.name ?? 'User array empty');

/////////////////////////////////////////////////////
/* Enchades object literal



/*
/////////////////////////////////////////////////////
// For-of

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}

/*

////////////////////////////////////////////////
//Rest Pattern

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// FUnctions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 4, 3, 2));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

/*


////////////////////////////////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: 'Sá carneiro',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Sá carneiro',
  starterIndex: 1,
});

const ingredients = ['a', 'b', 'c'];

restaurant.orderPasta(...ingredients);

//Spread Operator

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Objects
const newRestaurant = { foundedIN: 1993, ...restaurant, fouder: 'José' };
console.log(newRestaurant);

/*
///////////////////////////////////////////////////
//OBJECT DESTRUCTURING

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutatgin variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//NEsted objetcts

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);


const arr = [2, 3, 4];

//retrive array old way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring the array
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//trocando valores de variaveis
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receber dois valores de uma função
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(restaurant.order(2, 0));
console.log(starter, mainCourse);

//nested
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
