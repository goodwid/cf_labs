window.onload = function() {

var questionCounter = 0;
var correct = 0;

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
    'question': 'How old was I when I received my first kiss?',
    'answer': 14
  },
  {
    'question': 'Can you guess the name of one of my three sisters?',
    'answer': ['SARA', 'SALEM', 'DEVIN']
  }
];

//put question presentation, answer analysis, and feedback in functions based on answer type (string, number, or array)
function askForString (quizQuestion, quizAnswer) {
  questionCounter++;
  var userResponse = (prompt(quizQuestion)).toUpperCase();
  console.log('When asked, "' + quizQuestion + '" user answered "' + userResponse + '."');
  if (userResponse === quizAnswer) {
    alert('That\'s correct!');
    correct++;
  } else {
    alert('Bummer. The answer was actually ' + quizAnswer + '.');
    }
}

function askForNumber (quizQuestion, quizAnswer) {
  questionCounter++;
  var chancesCounter = 0;
  do {
    var numberCorrect = false;
    var userResponse = prompt(quizQuestion);
    chancesCounter++;
    if (isNaN(parseFloat(userResponse))) {
      alert('Please enter a number using digits only.')
    } else if (parseFloat(userResponse) > quizAnswer && chancesCounter < 4) {
        alert('Sorry, the answer is less than ' + userResponse + '. Try again.');
    } else if (parseFloat(userResponse) < quizAnswer && chancesCounter < 4) {
        alert('Sorry, the answer is more than ' + userResponse + '. Try again.');
    } else if (parseFloat(userResponse) === quizAnswer) {
        alert('That\'s correct!');
        numberCorrect = true;
        correct++;
    }
  } while (!numberCorrect && chancesCounter < 4)
  if (!numberCorrect) {
    alert('Bummer. The answer was actually ' + quizAnswer + '.');
  }
  console.log('When asked, "' + quizQuestions[kk].question + '" user answered "' + userResponse + '."');
}

function askForArray (quizQuestion, quizAnswer) {
  questionCounter++;
  var userResponse = (prompt(quizQuestion)).toUpperCase();
  console.log('When asked, "' + quizQuestions[kk].question + '" user answered "' + userResponse + '."');
  if (quizAnswer.indexOf(userResponse)>=0) {
    alert('That\'s correct!');
    correct++;
  } else {
    var arrayItems = correctResponse.join(', ');
    alert('Sorry, that\'s incorrect. Any of the following would have been correct: ' + arrayItems + '. Nice try though!');
    }
}

//call functions to ask questions and analyze answer
for (var ii=0; ii<4; ii++) {
  
}

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
