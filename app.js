'use strict';

var userName = prompt('Identify yourself, human.');
if (userName == null || userName === '') {
  //used == in case of undefined type since null == undefined is true
  userName = 'Unnamed One';
}
alert('Greetings, ' + userName + '.  Welcome to David\'s about me page');
console.log('userName: ' + userName.toString());

var tally = 0;

try {
  var answer1 = prompt('Does David have a dog?').toLowerCase();
}
catch(error) {
  answer1 = '';
}

if (answer1 === 'no' || answer1 === 'no.' || answer1 === 'n') {
  alert('Correct.');
  tally++;
  console.log('answer1 correct, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David has no dogs at this time.');
  console.log('answer1 incorrect, tally is ' + tally.toString());
}

try {
  var answer2 = prompt('Does David play a musical instrument?').toLowerCase();
}
catch(error) {
  answer2 = '';
}
if (answer2 === 'yes' || answer2 === 'yes.' || answer2 === 'y') {
  alert('Correct.  David plays guitar.');
  tally++;
  console.log('answer2 correct, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David plays guitar.');
  console.log('answer2 incorrect, tally unchanged.');
}

try {
  var answer3 = prompt('Does David enjoy meatloaf?').toLowerCase();
}
catch(error) {
  answer3 = '';
}
if (answer3 === 'no' || answer3 === 'no.' || answer3 === 'n') {
  alert('Correct.');
  tally++;
  console.log('answer3 correct, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David actually hates meatloaf (the food AND the band!).');
  console.log('answer3 incorrect, tally unchanged.');
}

try {
  var answer4 = prompt('Does David prefer mac to pc?').toLowerCase();
}
catch(error) {
  answer4 = '';
}
if (answer4 === 'no' || answer4 === 'no.' || answer4 === 'n') {
  alert('Correct.  David prefers windows or even Linux.');
  tally++;
  console.log('answer4 correct, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David does not enjoy using a macintosh.');
  console.log('answer4 incorrect, tally unchanged.');
}

try {
  var answer5 = prompt('Does David hope to be a software developer?').toLowerCase();
}
catch(error) {
  answer5 = '';
}
if (answer5 === 'yes' || answer5 === 'yes.' || answer5 === 'y') {
  alert('Correct.');
  tally++;
  console.log('answer5 correct, tally = ' + tally.toString());
} else {
  alert('Incorrect.  David very much wants to be a software developer.');
  console.log('answer5 incorrect, tally unchanged.');
}

tally = tally.toString();
console.log('final tally: ' + tally.toString());
if (tally > 2) {
  alert('You got ' + tally + 'out of 5 correct.  Nice work, ' + userName + '.');
} else if (tally > 0){
  alert('You only got ' + tally + ' out of 5.  Probably not your best work, ' + userName + '.');
} else {
  alert('You did not get a single question correct.  Either you did this on purpose, or you have awesomely terrible luck!');
}
