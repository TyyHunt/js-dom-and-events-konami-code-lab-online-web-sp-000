const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let codePosition = 0;

function init() {


document.body.addEventListener('keydown', function(e) {

  const key = parseInt(e.detail || e.which);

  if (key == code[codePosition]) {

    codePosition++;

    if (codePosition == code.length) {
      alert("Congratulations!");
      codePosition = 0;
    }
  } else {
    codePosition = 0;
  }
});

}
