var collectionButtons = document.querySelectorAll("button");

var calcDisplay = document.getElementById("displayCalc");

var currentValue = "";

collectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    var value = button.textContent;
    if (value === "DEL") {
      currentValue = currentValue.slice(0, -1);
    } else if (value === "RESET") {
      currentValue = "";
    } else {
      currentValue += value;
    }

    calcDisplay.textContent = currentValue;
  });
});

compareBtn.addEventListener("click", () => {
  let strTmp = calcDisplay.textContent;
  let sum = 0;
  let tmp = "";

  if (strTmp.includes("+")) {
    for (let i = 0; i < strTmp.length; i++) {
      if ((strTmp[i] >= 0 && strTmp[i] <= 9) || strTmp[i] == "+") {
        console.log(strTmp[i]);
        tmp += strTmp[i];
      }
    }

    strTmp = tmp.split("+");
    console.log(strTmp);

    for (let j = 0; j < strTmp.length; j++) {
      sum += Number(strTmp[j]);
    }
    calcDisplay.textContent = sum;
  } else if (strTmp.includes("-")) {
    for (let i = 0; i < strTmp.length; i++) {
      if ((strTmp[i] >= 0 && strTmp[i] <= 9) || strTmp[i] == "-") {
        tmp += strTmp[i];
      }
    }

    strTmp = tmp.split("-");

    sum = strTmp[0] - strTmp[1];
    for (let j = 2; j < strTmp.length; j++) {
      sum = sum - strTmp[j];
    }
    calcDisplay.textContent = sum;
  } else if (strTmp.includes("*")) {
    for (let i = 0; i < strTmp.length; i++) {
      if ((strTmp[i] >= 0 && strTmp[i] <= 9) || strTmp[i] == "*") {
        tmp += strTmp[i];
      }
    }
    strTmp = tmp.split("*");
    sum = strTmp[0] * strTmp[1];
    for (let j = 2; j < strTmp.length; j++) {
      sum = sum * strTmp[j];
    }
    calcDisplay.textContent = sum;
  } else if (strTmp.includes("/")) {
    for (let i = 0; i < strTmp.length; i++) {
      if ((strTmp[i] >= 0 && strTmp[i] <= 9) || strTmp[i] == "/") {
        tmp += strTmp[i];
      }
    }
    strTmp = tmp.split("/");
    sum = parseFloat(strTmp[0]) / parseFloat(strTmp[1]);
    for (let j = 2; j < strTmp.length; j++) {
      sum = sum / parseFloat(strTmp[j]);
    }
    calcDisplay.textContent = sum;
  } else {
    calcDisplay.textContent = "wrong number";
  }
});
