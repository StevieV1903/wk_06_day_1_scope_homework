// EPISODE 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
//
// declareMurderer is calling scenario.murderer and in this case the output will be 'The murderer is Miss Scarlet'.

// EPISODE 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//
// declareMurderer is calling the function changeMurderer and in this case the output will be 'The murderer is Mrs. Peacock'.

// EPISODE 3
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
//
// The firstVerdict is calling the declareMurderer function and the output will be Mrs. Peacock. The second verdict the murderer is Professor Plum.

// EPISODE 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// My first instinct here is that suspect three would be Colonel Mustard. However this proved wrong and on running it, Mrs. Peacock is suspect three.

// EPISODE 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
