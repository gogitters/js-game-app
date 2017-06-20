function clickOne() {
  alert("You've won!");
}

var counter = 0;
function clickFive() {
  counter++;
  if (counter === 5) {
    alert("You win!");
  }
}

var boxNumbers = [];
function allThree(purpleHippo) {
  if (boxNumbers.indexOf(purpleHippo) === -1) {
    boxNumbers.push(purpleHippo);
  }
  if (boxNumbers.length === 3) {
    alert("You have won!");
    boxNumbers = [];
  }
}

var nextNumber = 1;
function numbersGame(number) {
  if (number === nextNumber) {
    if (nextNumber === 10) {
      alert("You win!!");
      location.reload();
    } else {
      nextNumber++;
    }
  } else {
    nextNumber = 1;
    alert("You messed up. Try again.");
  }
}