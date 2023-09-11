var collectionButtons = document.querySelectorAll("button");

var calcDisplay = document.getElementById("displayCalc");

var currentValue = "";
var previousValue = "";

collectionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    var value = button.textContent;
    if (value === "DEL") {
      // Delete the last character
      currentValue = currentValue.slice(0, -1);
    } else if (value === "RESET") {
      // Reset the calculator
      currentValue = "";
    } else {
      // Append the clicked value
      currentValue += value;
    }

    // Update the display
    calcDisplay.textContent = currentValue;
  });
});

var tmpAnswer = "";
document.getElementById("compareBtn").addEventListener("click", function () {
  tmpAnswer = calcDisplay.textContent;
  tmpAnswer = tmpAnswer.slice(0, -1);
  if (tmpAnswer.includes("+")) {
    tmpAnswer = eval(tmpAnswer);
    calcDisplay.innerText = tmpAnswer;
    tmpAnswer = "";
  } else if (tmpAnswer.includes("-")) {
    tmpAnswer = eval(tmpAnswer);
    calcDisplay.innerText = tmpAnswer;
    tmpAnswer = "";
  } else if (tmpAnswer.includes("*")) {
    tmpAnswer = eval(tmpAnswer);
    calcDisplay.innerText = tmpAnswer;
    tmpAnswer = "";
  } else if (tmpAnswer.includes("/")) {
    tmpAnswer = eval(tmpAnswer);
    calcDisplay.innerText = tmpAnswer;
    tmpAnswer = "";
  } else {
    tmpAnswer = "wrong answer";
  }
});
