// 201
// 1-mon-lecture/code-demo js

/* INSTRUCTIONS

Using a total of six JavaScript 'prompt' or 'confirm' statements along the lines of our class demo on Monday, have a user answer six questions.

The user's response to each question should be stored in a separate variable. Name your variables carefully.

Using these responses, return an alert to the user that concatenates their response into some kind of reply like we did in class.

In addition, for each response, create a console.log() message that indicates the nature of the question and the user's reponse, as we did in class.

In the HTML file, place the six questions within a series of <p> tags so that they are listed on the screen.
*/

confirm('Hi, friend. I\'d like to know a little about you. Mind if I ask you some questions?');

var uName = prompt('What is your name?');
alert('Hi, ' + uName + ', it\'s really nice to meet you.');
console.log('User name: ' + uName);
name.textContent = 'What is your name?';

var uBirthYear = prompt('What year were you born?');
alert('Ah, so you were born in ' + uBirthYear + '. Cool. I was born in 2013. I\'m a youngin\'.');
console.log('User birth year: ' + uBirthYear);
birthYear.textContent = 'What year were you born?';

var uBirthplace = prompt('What city were you born in?');
alert('I\'m not sure I\'ve ever been to ' + uBirthplace + '. Me, I was born in a factory.');
console.log('User birthplace: ' + uBirthplace);
birthplace.textContent = 'What city were you born in?';

var uAdjective = prompt('Give me an adjective that would have described you as a child.');
alert('Aww. ' + uName + ' was a ' + uAdjective + ' little kid! I wonder what it\'s like to have a childhood. Computers are kinda born grown-ups.');
console.log('As a kid user was: ' + uAdjective);
adjective.textContent = 'Give me an adjective that would have described you as a child.';

var uHighSchool = prompt('What was the name of your high school?');
alert('I\'ll bet you were a great student back in your ' + uHighSchool + ' days.');
console.log('User high school: ' + uHighSchool);
highSchool.textContent = 'What was the name of your high school?';

var uFavoriteClass = prompt('What was your favorite class in high school?');
alert(uFavoriteClass + ' sounds like a fun class. If I had gone to high school, I think computer science would have been my favorite class!');
console.log('User\'s favorite high school class: ' + uFavoriteClass);
faveClass.textContent = 'What was your favorite class in high school?';

/*

var userName = prompt('What is your name?');
console.log('Meow Meow Meow ' + userName + '!!!!');

console.log('userGame before prompt: ', userGame);
var userGame = prompt('What is your game?');
console.log('userGame after prompt: ', userGame);
alert('So, ' + userName + ', I heard you like ' + userGame);

var loveHate = confirm(userName + ' do you love interweb?');
alert('Does, ' + userName + ' love interweb? ' + loveHate);

*/
