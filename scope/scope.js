// var secretsFunction = function () {
//   var pinCode = [3, 5, 6, 1];
//   console.log("Inside Function:", pinCode);
// };
//
// secretsFunction();
// console.log("Outside Function:", pinCode);

// var is only visible within tht top function hence the error in the "Outside Function"


// however using lexical scope;
//
// var name = "John";
// var secretsFunction = function () {
//   var pinCode = [3, 5, 6, 1];
//   console.log("Inside Function:", name);
// };
//
// secretsFunction();
// console.log("Outside Function:", name);

// Block scope (most specific)

// var filterNamesByFirstLetter = function (names, letter) {
//   var filteredNames = [];
//   for (let name of names) {
//     if (name[0] === letter){
//       filteredNames.push(name);
//     }
//   }
//   // console.log('name after loop:', name);
//   return filteredNames
// };
//
// var students = ['Lauren', 'Siggy', 'Luca'];
// var filteredStudents = filterNamesByFirstLetter(students, 'L');
// console.log('filtered students:', filteredStudents);


var filterNamesByFirstLetter = function (names, letter) {
  let filteredNames = [];
  for (let name of names) {
    if (name[0] === letter){
      filteredNames.push(name);
    }
  }
  return filteredNames
};

var students = ['Lauren', 'Siggy', 'Luca'];
var filteredStudents = filterNamesByFirstLetter(students, 'L');
console.log('filtered students:', filteredStudents);
