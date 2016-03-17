window.onload = function() {

var divId = ['bio', 'top10'];

var userName = prompt('What is your name?');

alert('Hi, ' + userName + '. It\'s Taylor. I\'d like to introduce myself. Please feel free to peruse this page, and then click OK when you\'re ready to play a trivia game about me. Warning: The questions have nothing to do with this bio.')

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
    'question': 'Who was the first celebrity whom I was told I resemble, gravely damaging my already fragile adolescent self-esteem?',
    'answer': 'CONAN O\'BRIEN'
  },
  {
    'question': 'Do I absolutely LOVE olives? (YES/NO)',
    'answer': 'NO'
  },
  {
    'question': 'On New Years of which year did I receive my first kiss?',
    'answer': 2000
  },
  {
    'question': 'Can you guess the name of one of my three sisters?',
    'answer': ['SARA', 'SALEM', 'DEVIN']
  }
];

var questionCounter = 0;
var correct = 0;

for (var kk=0; kk<quizQuestions.length; kk++) {   //Loop cycles through the quiz questions, asks them, checks the answers, then alerts the user regarding right/wrong.
  questionCounter++;
  if (questionCounter <= (quizQuestions.length - 2)) {
    var userResponse = prompt(quizQuestions[kk].question);
    console.log('When asked, "' + quizQuestions[kk].question + '" user answered "' + userResponse + '."');
    if (userResponse.toUpperCase() === quizQuestions[kk].answer) {
      alert('That\'s correct!');
      correct++;
    } else {
      alert('Bummer. The answer was actually ' + quizQuestions[kk].answer + '.');
    }
  } else if (questionCounter <= (quizQuestions.length - 1)) {
      var kissQuestionCounter = 0;
      do {
        var kissQuestionCorrect = false;
        var userResponse = prompt(quizQuestions[kk].question);
        kissQuestionCounter++;
        if (isNaN(parseFloat(userResponse))) {
          alert('Please enter a year in number form, e.g., 1995 (which is not the answer, by the way).')
        } else if (parseFloat(userResponse) > quizQuestions[kk].answer && kissQuestionCounter < 4) {
            alert('Actually, I was younger than ' + (userResponse-1986) + '. Try again.');
        } else if (parseFloat(userResponse) < quizQuestions[kk].answer && kissQuestionCounter < 4) {
            alert('Actually, I was older than ' + (userResponse-1986) + '. Try again.');
        } else if (parseFloat(userResponse) === quizQuestions[kk].answer) {
            alert('That\'s correct!');
            kissQuestionCorrect = true;
            correct++;
        }
      } while (parseInt(userResponse) !== quizQuestions[kk].answer && kissQuestionCounter < 4)
    if (!kissQuestionCorrect) {
      alert('Bummer. The answer was actually ' + quizQuestions[kk].answer + '.');
    }
    console.log('When asked, "' + quizQuestions[kk].question + '" user answered "' + userResponse + '."');
  } else {
      var userResponse = prompt(quizQuestions[kk].question);
      console.log('When asked, "' + quizQuestions[kk].question + '" user answered "' + userResponse + '."');
      var sisQuestionCorrect = false;
      var sisters = quizQuestions[kk].answer;
      for (var mm=0; mm<sisters.length; mm++) {
        if (userResponse.toUpperCase() === sisters[mm]) {
          sisQuestionCorrect = true;
          correct++;
        }
      }
      if (sisQuestionCorrect) {
        alert('That\'s correct!');
        correct++;
      } else {
        alert('Aw man! My sisters\'s names are actually ' + sisters[0] + ', ' +  sisters[1] + ', and ' + sisters[2] + '. Nice try though!');
        }
    }
}

console.log('Questions answered correctly: ' + correct + '.');

var finalMessage = 'You got ' + correct + ' out of ' + questionCounter + ' questions right, ' + userName + '.';

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
  case 4:
    finalMessage += 'That\'s great! I\'m impressed.';
    break;
  case 5:
    finalMessage += 'Holy crap. Did you cheat?? J/K. Awesome job! Want to be best friends?';
    break;
}

alert(finalMessage + ' (I think the lesson we\'re to learn from all this is clear: Olives are disgusting.)')

}
