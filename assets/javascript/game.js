var possibleInputs = ['a','b','c','d','e','f','g','h','i','j','k','l',
 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

 alert("Start entering you guesses by pressing a button.");
 alert("YOU HAVE 9 CHANCES TO USE!");

var wins = 0;
var losses = 0;
var guessesLeft= 9;
var yourGuess = [];

document.onkeyup = function(event){

  // track which key is pressed
  var userGuess= event.key;

  // Send a source to computer for its random guess in this range
  var computerGuess = possibleInputs[Math.floor(Math.random() * possibleInputs.length)];

  // if user enter a correct guess then add to the win otherwise rdecrease guesses one
  if (userGuess === computerGuess){
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    alert("Good Job!");

  } else {
    guessesLeft--;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
    alert("You lost another guess");
    yourGuess.push(userGuess);
  }

  // Check if user lost are guesses
  if(guessesLeft === 0){
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    alert("GAME OVER!");

    // document.getElementById("losses").reset();
    // document.getElementById("guesses").reset();
    // document.getElementById("wins").reset();
    // document.getElementById("yourGuesses").reset();
  }
  document.getElementById("yourGuesses").innerHTML = "Your Guesses so far: " + yourGuess.join(', ');
};
