alert('Hey, pal. It\'s Taylor. How well do you know me? Let\'s find out! Click OK to read a little bit about me. After that you can play a little Taylor trivia game.');

function printBio(heading, par) {
  var sectHeading = heading.toUpperCase();
  document.getElementById(heading).textContent = sectHeading; //Why console.log error saying "can't set textContent of null"?
  document.getElementById(par).textContent = parText;
}

/*ABOVE FUNCTION IS AN ATTEMPT TO GET AROUND THIS REPETITIVE CODE

var elChildhood = Document.getElementById("childhood");
var elBioChild = Document.getElementById("bioChild");
var elCollege = Document.getElementById("college");
var elBioCollege = Document.getElementById("bioCollege");
var elAdulthood = Document.getElementById("adulthood");
var elBioAdult = Document.getElementById("bioAdult");
*/

var parText = 'Taylor was born on October 20, 1986, in Winston-Salem, North Carolina. She was Cindy and Scott Shirley\'s second daughter, though the adoption of an older sister ';
printBio('childhood', 'bioChild');
var parText = 'Taylor studied at UNC-Chapel Hill and graduated in 2009 with a BA in Linguistics.';
printBio('college', 'bioCollege');
var parText = 'Taylor has worked as a Spanish interpreter and a massage therapist and currently lives in Portland, Oregon, with her wife Evelyn.';
printBio('adulthood', 'bioAdult');
