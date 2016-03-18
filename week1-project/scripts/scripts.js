window.onload = function() {

var userName = prompt('What is your name?');

alert('Hi, ' + userName + '. It\'s Taylor. I\'d like to introduce myself. Please feel free to peruse this page, and then click OK when you\'re ready to play a trivia game about me. Warning: The questions have nothing to do with this bio.')

var questionCounter = 0;
var numberCorrect = 0;
var correctAnswer = false;

var questions = [   //Array with objects that each represent a question-answer pair
  {
    'question': 'For what television competition show did I audition, make it through the first round, and then go on to the second round only to embarrass myself in a brilliant supernova of nerve-driven failure?',
    'answer': 'AMERICAN IDOL',
    'answerType': 'string',
    'answerQuant': 'single'
  },
  {
    'question': 'What sport did I play in high school?',
    'answer': 'VOLLEYBALL',
    'answerType': 'string',
    'answerQuant': 'single'
  },
  {
    'question': 'Who was the first celebrity whom I was told I resemble, gravely damaging my already fragile adolescent self-esteem?',
    'answer': 'CONAN O\'BRIEN',
    'answerType': 'string',
    'answerQuant': 'single'
  },
  {
    'question': 'Do I absolutely LOVE olives? (YES/NO)',
    'answer': 'NO',
    'answerType': 'string',
    'answerQuant': 'single'
  },
  {
    'question': 'How old was I when I received my first kiss?',
    'answer': 14,
    'answerType': 'number',
    'answerQuant': 'single'
  },
  {
    'question': 'Can you guess the name of one of my three sisters?',
    'answer': ['SARA', 'SALEM', 'DEVIN'],
    'answerType': 'array',
    'answerQuant': 'multiple'
  }
];

//for every round, regardless of question type, we want to ask the question and log the answer
for (ii=0; ii<questions.length; ii++) {
  var userResponse = prompt(quizQuestions[ii].question);
  console.log('When asked, "' + quizQuestions[ii].question + '" user answered "' + userResponse + '."');
  questionCounter++;
  //SWITCH TO HANDLE DIFFERENT ANSWER TYPES AND CORRESPONDING ANALYSIS APPROACHES
  var answerType = questions[kk].answerType;
  switch (answerType) {
    case string:
      if (userResponse.toUpperCase() === questions[ii].answer) {
        numberCorrect++;
        correctAnswer = true;
      }
      break;
    case number:
      //DO X
      break;
    case array:
      //DO X
      break;
  }
  if (questions[ii].answerQuant === 'single') {
    if (correctAnswer) {
      alert('That\'s correct!');
      numberCorrect++;
      correctAnswer = false;
    } else {
      alert('Bummer. The answer was actually ' + quizQuestions[ii].answer + '.');
    }
  }
}

// //functions askString, askNumber, and askArray for processing answers
// function askString(answer) {
//   if (userResponse.toUpperCase() === answer) {
//     alert('That\'s correct!');
//     correct++;
//   } else {
//     alert('Bummer. The answer was actually ' + answer + '.');
//   }
// }
//
// function askNumber(answer) {
//   var chancesCounter = 0;
//   do {
//     var kissCorrect = false;
//     chancesCounter++;
//     if (isNaN(parseFloat(userResponse))) {
//       alert('Please enter a year in number form, e.g., 1995 (which is not the answer, by the way).')
//     } else if (parseFloat(userResponse) > answer && chancesCounter < 4) {
//         alert('Actually, I was younger than ' + (userResponse-1986) + '. Try again.');
//     } else if (parseFloat(userResponse) < answer && questionCounter < 4) {
//         alert('Actually, I was older than ' + (userResponse-1986) + '. Try again.');
//     } else if (parseFloat(userResponse) === answer) {
//         alert('That\'s correct!');
//         kissCorrect = true;
//         correct++;
//     }
//   } while (parseInt(userResponse) !== answer && kissQuestionCounter < 4)
//   if (!kissQuestionCorrect) {
//     alert('Bummer. The answer was actually ' + quizQuestions[kk].answer + '.');
//   }
// }
//
// function askArray(answer) {
//
// }

var questionCounter = 0;
var correct = 0;

/*TRYING TO "DRY" THE BELOW CODE, ABOVE
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
      //MAKE THIS (BELOW) MORE DRY (like David's)
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
*/

console.log('Questions answered correctly: ' + correct + '.');

var finalMessage = 'You got ' + correct + ' out of ' + questionCounter + ' questions right, ' + userName + '. ';

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
