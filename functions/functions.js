// NAMED FUNCTIONS (can be hoisted)
// function sayHello(){
//   return 'Hello World!'
// }
// console.log('sayHello message:', sayHello());

// function sayHello(name){
//   return `Hello ${name}!`
// }
// console.log('sayHello message:', sayHello('Steve'));

// function sayHello(name = 'World'){
//   return `Hello ${name}!`
// }
// console.log('sayHello message:', sayHello());

// function sayHello(greeting, name){
//   return `${greeting}, ${name}!`
// }
// console.log('sayHello message:', sayHello('Hi', 'Steve'));

// ANONYMOUS FUNCTIONS (cannot be hoisted)

// var add = function (firstNumber, secondNumber){
//   return firstNumber + secondNumber
// }
// console.log('1 + 3 with add:', add(1, 3));


// EXERCISE
// Task: 20 minutes
// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.
// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Zsolt', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

// function sumTotal(numbers) {
//   var total = 0;
//   for (var number of numbers) {
//     total += number;
//   }
//   return total;
// }
// var sum = sumTotal([10, 20, 30, 40]);
// console.log('sum of numbers:', sum);



// var pet = function (name, animal) {
//   return
// }
//
// for (var key in pet){
//   var value = pet[key];
// console.log(`The ${key} is ${value}`);
// }
//
// var pet = {
//   name: 'Buster',
//   type: 'dog'
// }
//
// var objectHasKey = function(object, searchString){
//   for
// }
//
// var person = {
//   name: 'Buster',
//   type: 'dog'



// ARROW FUNCTIONS

// var multiply = (firstNumber, secondNumber) => {
//   return firstNumber * secondNumber
// }
// console.log('multiply 2 by 5:', multiply(2, 5))

// can also be written this way (Implicit Return)

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber

console.log('multiply 2 by 5:', multiply(2, 5))
