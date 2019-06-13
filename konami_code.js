const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // a key map of allowed keys

// a variable to remember the 'position' the user has reached so far.
var codePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = code[codePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    codePosition++;

    // if the last key is reached, activate cheats
    if (codePosition == code.length) {
      alert("Congratulations!");
      codePosition = 0;
    }
  } else {
    codePosition = 0;
  }
});

}
