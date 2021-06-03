'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// FUNCTIONS

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const realI = i + 1;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${realI} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = acc.balance + '€';
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);

  labelSumIn.textContent = incomes + '€';
  labelSumOut.textContent = Math.abs(out) + '€';
  labelSumInterest.textContent = interest + '€';
};

const createUsername = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const updateUI = function (accs) {
  displayMovements(accs.movements);
  calcDisplayBalance(accs);
  calcDisplaySummary(accs);
};

createUsername(accounts);

//Events Handler

let currAcc;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const user = inputLoginUsername.value;
  const pin = inputLoginPin.value;
  currAcc = accounts.find(acc => acc.username === user);

  if (currAcc?.pin === Number(pin)) {
    //Dysplay UI and Welcome MEessage
    labelWelcome.textContent = `Welcome Back ${currAcc.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;

    // clear inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Display movemtns, balance and summary
    updateUI(currAcc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transAccInput = inputTransferTo.value;
  const transAmount = inputTransferAmount.value;
  const transAcc = accounts.find(acc => acc.username === transAccInput);

  inputTransferAmount.value = inputTransferTo.value = 0;
  inputTransferAmount.blur();

  if (
    transAmount > 0 &&
    transAcc &&
    transAmount <= currAcc.balance &&
    transAcc?.username !== currAcc.username
  ) {
    currAcc.movements.push(Number(-transAmount));
    transAcc.movements.push(Number(transAmount));

    updateUI(currAcc);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currAcc.movements.some(mov => mov >= amount * 0.1)) {
    currAcc.movements.push(amount);
    updateUI(currAcc);
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = inputClosePin.value;

  if (currAcc?.username === username && currAcc?.pin === Number(pin)) {
    const index = accounts.findIndex(acc => acc.username === currAcc.username);
    accounts.slice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currAcc.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE -- not mutate
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// SPLICE -- mutate
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// REVERSE -- mutate
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT -- not mutate
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(' - '));

/////////////////////////////////////////////
// For each Array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((movement, index, arr) => {
  movement > 0
    ? console.log(`Movement ${index + 1}: You deposited ${movement}`)
    : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});


//////////////////////////////////////////////
// For each Maps and Sets

// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((currencie, key, map) => {
  console.log(`${key}: ${currencie}`);
});

// SET
const currenciesUnique = new Set(['USD', 'EUR', 'BRL']);

currenciesUnique.forEach((currencie, key, set) => {
  console.log(`${key}: ${currencie}`);
});


////////////////////////////////////////////////////////////
// MAP Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements, movementsUSD);

const movementsDesc = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDesc);



////////////////////////////////////////////////////////////
// FILTER

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
console.log(deposits, withdrawals);


////////////////////////////////////////////////////////////
// REDUCE

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, mov) => acc + mov);
console.log(balance);

// Maximum Value

const max = movements.reduce(
  (max, mov) => (max < mov ? mov : max),
  movements[0]
);
console.log(max);




///////////////////////////////////////////////////////////
// Chaining Methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// PIPELINE
const depositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(depositUSD);



////////////////////////////////////////////////////////
// Find Methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.find(mov => mov < 0));



//////////////////////////////////////////////////////////////
// Same and every methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.some(mov => mov > 5000));


///////////////////////////////////////////////////////
// Sorting Arrys

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

movements.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});

console.log(movements);


*/
