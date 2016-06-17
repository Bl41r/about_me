// This is the js file for my week1 201 lab 'about me' created on 6/14/16.
// GitHub:  https://github.com/Bl41r/about_me
// This app plays a game with a series of questions, a number guessing game,
// and a question with multiple correct answers stored into an array

'use strict';

var tally = 0;  // Global var for number of questions correct
var numToGuess = 19;  // number for the guessing game

// This function uses logical control flow to play the guessing game.
// num is the correct number the coder wants matched.
function playGuessingGame(num) {
  console.log('guessing game started');
  var attempt = 1;
  do {
    try {
      var guess = parseInt(prompt('What is your guess?'));
    }
    catch(error) {
      guess = '';
      console.log('error, guess set to empty string');
    }
    if (guess === num) {
      alert('Great, kid!  Don\'t get cocky.');
      tally++;
      attempt = 100;
      console.log('win');
    } else if (guess < num) {
      alert('Incorrect.  Too low.');
      console.log('low');
    } else if (guess > num) {
      alert('Incorrect, too high.');
      console.log('high');
    } else {
      alert('I don\'t know what you said, but no.');
      console.log('strange input: ' + guess);
    }
    attempt++;
  }
  while (attempt <= 4);
  if (attempt < 100) {
    alert('You lost.');
  }
}

// --Get user name function
function namePrompt() {
  userName = prompt('Identify yourself, human.');
  if (userName == null || userName === '') {
    //used == in case of undefined type since (null == undefined) is true
    userName = 'Mr./Ms. too-cool-to-enter-a-name';
  }
  alert('Greetings, ' + userName + '.  Welcome to David\'s about me page');
  console.log('userName: ' + userName.toString());
  return userName;
}

// --Initial questions 1 thru 5
function questions1thru5(){
  // question, answer, and response arrays
  var qArray = ['Does David have a dog?', 'Does David play a musical instrument?', 'Does David enjoy meatloaf?', 'Does David prefer mac to pc?','Does David hope to be a software developer?'];
  var aArray = ['N','Y','N','N','Y'];
  var rArray = ['Maybe someday when he has a yard.','He plays the guitar.','He hates the food and the band.','He prefers Windows or Linux.','He very much does.'];

  for (var q = 0; q < qArray.length; q++) {
    try {
      var answer = prompt(qArray[q]).toLowerCase();  // Asks question
    }
    catch(error) {
      answer = '';
      console.log('error, answer set to empty string for question' + q);
    }
    // Apply uniformity to compare with answers formatted in aArray
    if ((answer === 'yes') || (answer === 'y') || (answer === 'yes.')) {
      answer = 'Y';
    } else if ((answer === 'no') || (answer === 'n') || (answer === 'no.')) {
      answer = 'N';
    } else {
      answer = 'U'; // U for unknown
      alert('Please give a valid yes or no response');
      q--; // ask question again
    }
    // test the answer given vs. the answer array
    if (answer === aArray[q]) {
      alert('Correct.' + '  ' + rArray[q]);
      tally++;
    } else if (answer === 'U') {
      // pass, loops back to ask same quesiton
    }
      else {
      alert('Incorrect.' + '  ' + rArray[q]);
    }
    console.log(answer + ' ' + aArray[q]);
    console.log('---');
  }
}
// --Array question 7
// This uses a nested for loop, the i-loop for the 6 guesses, and
// the j-loop for checking against each element in the array
function question7(){
  var answersArray = ['nc', 'il', 'north carolina', 'illinois'];
  var arrayCorrect = false; //If they guess correctly, becomes true
  alert('Let\'s play another game.  You guess what other state I have lived in.');
  for (var i = 0; i < 6; i++) {
    if (arrayCorrect === true) {
      break; // Breaks from 'i-loop' if they got it right.
    } else {
      if (i > 0) {
        alert('Nope!');
      }
      try {
        var state = prompt('What is your guess?').toLowerCase();
      }
      catch(error) {
        console.log('error with Array game input, empty string used');
        state = '';
      }
      for (var j = 0; j < answersArray.length; j++) {
        if (state === answersArray[j]) {  // if their guess was correct..
          tally++;
          alert('Nice Work!');
          arrayCorrect = true;
          break; // Breaks from 'j-loop' (not necessary unless array gets huge)
        }
      }
    }
  }
// This little do-da puts the answersArray elements into a legible string separated by commas:
  var answerString = '';
  for (var k = 0; k < answersArray.length - 1; k++) {
    answerString += answersArray[k] + ', ';
  }
  answerString += answersArray[answersArray.length - 1];
  alert('Possible answers were: ' + answerString);
  console.log('was array question correct? ' + arrayCorrect);
}

// --Final answers message
function reportScore(){
  if (tally > 2) {
    alert('You got ' + tally + ' out of 7 correct.  Nice work, ' + userName + '.');
  } else if (tally > 0){
    alert('You only got ' + tally + ' out of 7.  Boo, ' + userName + '.');
  } else {
    alert('You did not get a single question correct.  Either you did this on purpose, or you have awesomely terrible luck!');
  }
}

// Main program Loop
var userName = namePrompt();
questions1thru5();
//--This is where the guessing game begins
var playGame = confirm('Shall we play a game?  How about global thermonuclear war?  Just kidding.  I am thinking of a number between 1 and 20.  What number is it?  You have 4 attempts.');
if (playGame) {
  playGuessingGame(numToGuess);
} else {
  alert('Well, you\'re no fun.');
}
question7();
reportScore();
console.log('ze final tally: ' + tally.toString() + ' out of 7');
