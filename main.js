var num2 = [5, 6, 3, 9, 7, 8, 3, 0];
var collectionButtons = document.querySelectorAll("button");

var calcDisplay = document.getElementById("displayCalc");

collectionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    var value = button.innerHTML;
  });
});
