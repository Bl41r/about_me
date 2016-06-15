/* This is the js file for my day2 201 lab 'about me' created on 6/14/16 */

'use strict';

var userName = prompt('Identify yourself, human.');
if (userName == null || userName === '') {
  //used == in case of undefined type since null == undefined is true
  userName = 'Mr./Ms. too-cool-to-enter-a-name';
}
alert('Greetings, ' + userName + '.  Welcome to David\'s about me page');
console.log('userName: ' + userName.toString());

var tally = 0;

try {
  var answer1 = prompt('Does David have a dog?').toLowerCase();
}
catch(error) {
  answer1 = '';
  console.log('error, answer1 set to empty string');
}

if ((answer1 === 'no') || (answer1 === 'no.') || (answer1 === 'n')) {
  alert('Correct.');
  tally++;
  console.log('user entered: ' + answer1 + ', answer1 CORRECT, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David has no dogs at this time, but would like one when he owns a house with a yard.');
  console.log('user entered: ' + answer1 + ', answer1 incorrect, tally is ' + tally.toString());
}

try {
  var answer2 = prompt('Does David play a musical instrument?').toLowerCase();
}
catch(error) {
  answer2 = '';
  console.log('error, answer2 set to empty string');
}
if ((answer2 === 'yes') || (answer2 === 'yes.') || (answer2 === 'y')) {
  alert('Correct.  David plays guitar.');
  tally++;
  console.log('user entered: ' + answer2 + ', answer2 CORRECT, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David plays guitar.');
  console.log('user entered: ' + answer2 + ', answer2 incorrect, tally unchanged.');
}

try {
  var answer3 = prompt('Does David enjoy meatloaf?').toLowerCase();
}
catch(error) {
  answer3 = '';
  console.log('error, answer3 set to empty string');
}
if ((answer3 === 'no') || (answer3 === 'no.') || (answer3 === 'n')) {
  alert('Correct.');
  tally++;
  console.log('user entered: ' + answer3 + ', answer3 CORRECT, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David actually hates meatloaf (the food AND the band!).');
  console.log('user entered: ' + answer3 + ', answer3 incorrect, tally unchanged.');
}

try {
  var answer4 = prompt('Does David prefer mac to pc?').toLowerCase();
}
catch(error) {
  answer4 = '';
  console.log('error, answer4 set to empty string');
}
if ((answer4 === 'no') || (answer4 === 'no.') || (answer4 === 'n')) {
  alert('Correct.  David prefers Windows or even Linux.');
  tally++;
  console.log('user entered: ' + answer4 + ', answer4 CORRECT, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David does not enjoy using a Macintosh.');
  console.log('user entered: ' + answer4 + ', answer4 incorrect, tally unchanged.');
}

try {
  var answer5 = prompt('Does David hope to be a software developer?').toLowerCase();
}
catch(error) {
  answer5 = '';
  console.log('error, answer5 set to empty string');
}
if ((answer5 === 'yes') || (answer5 === 'yes.') || (answer5 === 'y')) {
  alert('Correct.');
  tally++;
  console.log('user entered: ' + answer5 + ', answer5 CORRECT, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David very much wants to be a software developer.');
  console.log('user entered: ' + answer5 + ', answer5 incorrect, tally unchanged.');
}

tally = tally.toString();
console.log('final tally: ' + tally.toString() + ' out of 5');
if (tally > 2) {
  alert('You got ' + tally + ' out of 5 correct.  Nice work, ' + userName + '.');
} else if (tally > 0){
  alert('You only got ' + tally + ' out of 5.  Boo, ' + userName + '.');
} else {
  alert('You did not get a single question correct.  Either you did this on purpose, or you have awesomely terrible luck!');
}
