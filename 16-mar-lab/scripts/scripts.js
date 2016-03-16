alert('Hey, pal. It\'s Taylor. How well do you know me? Let\'s find out! Click OK to read a little bit about me. After that you can play a little Taylor trivia game.');

var parText = [
'Taylor was born on October 20, 1986, in Winston-Salem, North Carolina. She was Cindy and Scott Shirley\'s second daughter, though the adoption of an older sister would eventually make her the third of four daughters. As a child she learned to play the guitar, took dance classes, sang in the church choir, and almost lost a toe to eczema.',

'Taylor studied at UNC-Chapel Hill and graduated in 2009 with a BA in Linguistics and a minor in Hispanic Studies. She spent her penultimate semester studying in Lima, Peru.',

'Taylor has worked as a Spanish interpreter and a massage therapist and currently lives in Portland, Oregon, with her wife Evelyn. She is now learning coding in the hopes of launching a startup with Evelyn, where they will attempt to use their respective skills to take over the world.'
];

for (var ii=0; ii<parText.length; ii++) {
  var bioText = parText[0];
  var elementId = ['childhood', 'bioChild', 'college', 'bioCollege', 'adulthood', 'bioAdult'];
  for (jj=0; jj<elementId.length; jj++) {
    var htmlElement = document.getElementById(elementId[jj]);
    if (jj%2 === 0) {
      htmlElement.textContent = elementId[jj].toUpperCase()
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

alert('Peruse my bio, and then click OK when you\'re ready to test how well you know me.')
