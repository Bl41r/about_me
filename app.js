'use strict';

var userName = prompt('Identify yourself, human.');
alert('Greetings, ' + userName + '.  Welcome to David\'s about me page');

var tally = 0;

var answer1 = prompt('Does David have a dog?').toLowerCase();
if (answer1 === 'no' || answer1 === 'no.' || answer1 === 'n') {
  alert('Correct.');
  tally++;
} else {
  alert('Incorrect.  David has no dogs at this time.');
}

var answer2 = prompt('Does David play a musical instrument?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'yes.' || answer2 === 'y') {
  alert('Correct.  David plays guitar.');
  tally++;
} else {
  alert('Incorrect.  David plays guitar.');
}

var answer3 = prompt('Does David enjoy meatloaf?').toLowerCase();
if (answer3 === 'no' || answer3 === 'no.' || answer3 === 'n') {
  alert('Correct.');
  tally++;
} else {
  alert('Incorrect.  David actually hates meatloaf (the food AND the band!).');
}

var answer4 = prompt('Does David prefer mac to pc?').toLowerCase();
if (answer4 === 'no' || answer4 === 'no.' || answer4 === 'n') {
  alert('Correct.  David prefers windows or even Linux.');
  tally++;
} else {
  alert('Incorrect.  David does not enjoy using a macintosh.');
}

var answer5 = prompt('Does David hope to be a software developer?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'yes.' || answer5 === 'y') {
  alert('Correct.');
  tally++;
} else {
  alert('Incorrect.  David very much wants to be a software developer.');
}

tally = tally.toString();
if (tally > 2) {
  alert('You got ' + tally + 'out of 5 correct.  Nice work, ' + userName + '.');
} else {
  alert('You only got ' + tally + 'out of 5.  Probably not your best work, ' + userName + '.');
}
