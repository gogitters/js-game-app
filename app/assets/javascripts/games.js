/* global $ */
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

function changeColors() {
  setTimeout(function() {
    document.getElementById('first').style['color'] = "red";
    setTimeout(function() {
      document.getElementById('second').style['color'] = "blue";
      // nested callbacks
    }, 1000);
  }, 1000);
}

// var response = $.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json");
// console.log(response);
function hideInfo(element) {
  element.style['color'] = 'blue';
  element.nextSibling.classList.toggle('hidden');
}
function showMarkets() {
  $.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json", function(response) {
    // console.log(response);
    var marketDiv = document.getElementById('markets');
    var marketHTML = "";
    for (var i = 0; i < response.length; i++) {
      marketHTML += "<h2 class='purple-hippo' onclick='hideInfo(this)'>" + response[i]["market_name"] + "</h2>";
      marketHTML += "<div><div>" + response[i]["street_address"] + "</div>";
      marketHTML += "<div>" + response[i]["hours"] + "</div></div>";
      marketHTML += "<hr>";
    }
    // marketHTML = "<div>Reilly's Market</div><div>David's Farm</div>";
    marketDiv.innerHTML = marketHTML;
  });
}

