var userName = prompt('What is your name?');

alert('Hi, ' + userName + '. It\'s Taylor. I\'d like to introduce myself. Click OK to read a little bit about me. After that you can play a little Taylor trivia game.');

var parText = [
  //CHANGE TO ADHERE TO ASSIGNMENT (PORTFOLIO MORE THAN FUN BIO)
'',

'',

''
];

var elementId = ['education', 'bioEduc', 'languages', 'bioLang', 'experience', 'bioExp'];

for (var ii=0; ii<parText.length; ii++) {   //Loop cycles through the HTML elements and populates them with biographical information.
  var bioText = parText[0];
  for (jj=0; jj<elementId.length; jj++) {
    var htmlElement = document.getElementById(elementId[jj]);
    if (jj%2 === 0) {
      htmlElement.textContent = elementId[jj].toUpperCase();
    } else {
      switch (jj) {   //COULD COME UP WITH MATHEMATICAL FUNCTION TO RELATE jj TO ii
        case 1:
          htmlElement.textContent = parText[0];
          break;
        case 3:
          htmlElement.textContent = parText[1];
          break;
        case 5:
          htmlElement.textContent = parText[2];
          break;
      }
    }
  }
}

alert('Peruse this page, and then click OK when you\'re ready to play a trivia game. Warning: The questions have nothing to do with this bio. :D')

var quizQuestions = [   //Array with objects that each represent a question-answer pair
  {
    'question': 'For what television competition show did I audition, make it through the first round, and then go on to the second round only to embarrass myself in a brilliant supernova of nerve-driven failure?',
    'answer': 'AMERICAN IDOL'
  },
  {
    'question': 'What sport did I play in high school?',
    'answer': 'VOLLEYBALL'
  },
  {
    'question': 'Do I absolutely LOVE olives?',
    'answer': 'NO'
  },
  {
    'question': 'On New Years of which year did I receive my first kiss?',
    'answer': 2000
  }
];

var questionCounter = 0;
var correct = 0;

for (var kk=0; kk<quizQuestions.length; kk++) {   //Loop cycles through the quiz questions, asks them, checks the answers, then alerts the user regarding right/wrong.
  questionCounter++;
  if (questionCounter <= 3) {
    var userResponse = prompt(quizQuestions[kk].question);
    console.log('When asked, "' + quizQuestions[kk].question + '" user answered "' + userResponse + '."');
    if (userResponse.toUpperCase() === quizQuestions[kk].answer) {
      alert('That\'s correct!');
      correct++;
    } else {
      alert('Bummer. The answer was actually ' + quizQuestions[kk].answer + '.');
    }
  } else {
    do {
      var userResponse = prompt(quizQuestions[kk].question);
      if (userResponse > quizQuestions[kk].answer) {
        alert('Actually, I was younger than ' + (userResponse-1986) + '. Try again.')
      } else if (userResponse < quizQuestions[kk].answer) {
        alert('Actually, I was older than ' + (userResponse-1986) + '. Try again.')
      }
    } while (parseInt(userResponse) !== quizQuestions[kk].answer)
    alert('That\'s correct!');
    correct++;
    console.log('When asked, "' + quizQuestions[kk].question + '" user answered "' + userResponse + '."');
  }
}

console.log('Questions answered correctly: ' + correct + '.');

for (ll=0; ll<elementId.length; ll++) {   //Removes the biographical info from the page
  var htmlElement = document.getElementById(elementId[ll]);
  htmlElement.textContent = '';
}

var finalMessage = 'You got ' + correct + ' out of 4 questions right. '

switch (correct) {    //Depending on number correct, writes some message to the page.
  case 0:
    finalMessage += 'Not great, but those questions were tough. I still think you\'re tops.';
    break;
  case 1:
    finalMessage += 'That\'s actually not bad. Those questions were tough!';
    break;
  case 2:
    finalMessage += 'That\'s pretty good. Those questions were not easy!';
    break;
  case 3:
    finalMessage += 'That\'s great! I\'m impressed.';
    break;
  case 4:
    finalMessage += 'Holy crap. Did you cheat?? J/K. Awesome job! Want to be best friends?';
    break;
}

document.getElementById('college').textContent = finalMessage;
document.getElementById('bioCollege').textContent = '(I think the lesson we\'re to learn from all this is clear: Olives are disgusting.)'
