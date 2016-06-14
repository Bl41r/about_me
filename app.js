'use strict';

var userName = prompt('Identify yourself, human.');
alert('Greetings, ' + userName + '.  Welcome to David\'s about me page');

var answer1 = prompt('Does David have a dog?').toLowerCase();
if (answer1 === 'no' || answer1 === 'no.' || answer1 === 'n') {
  alert('Correct.');
} else {
  alert('Incorrect.  David has no dogs at this time.');
}
