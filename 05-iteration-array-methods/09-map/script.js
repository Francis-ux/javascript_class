const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => number * 2);


// Same with foreach
const doubleNumbers2 = [];
numbers.forEach((number) => {
  doubleNumbers2.push(number * 2);
});

console.log(doubleNumbers, doubleNumbers2);
