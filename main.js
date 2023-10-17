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

const inputs = document.querySelectorAll("input");
const lables = document.querySelectorAll("label");

console.log(inputs);
inputs.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.checked = true;
    if (na.checked == true) {
      // #242729
      lables[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      lables[2].style.backgroundColor = "hsl(0, 5%, 81%)";
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
      document.querySelector("#displayCalc").style.backgroundColor =
        " hsl(0, 0%, 93%)";
      document.querySelector("#displayCalc").style.color = "black";
      document.getElementById("calacNumbers").style.backgroundColor =
        "hsl(0, 5%, 81%)";
      document.querySelector(".switch-toggle").style.backgroundColor =
        "hsl(0, 5%, 81%)";
      lables[index].style.backgroundColor = "hsl(25, 98%, 40%)";
      document.querySelector("#compareBtn").style.backgroundColor =
        "hsl(25, 98%, 40%)";
      document.querySelector("#delBtn").style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.querySelector("#restBtn").style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.querySelector(".toggleAndTXt").style.color = "black";
      for (let i = 0; i < lables.length; i++) {
        lables[i].style.color = "black";
      }
      document.querySelector("#calc").style.color = "black";
    } else if (off.checked == true) {
      lables[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      lables[1].style.backgroundColor = "hsl(268, 71%, 12%)";
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
      document.querySelector("#displayCalc").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      document.getElementById("calacNumbers").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      document.querySelector(".switch-toggle").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      for (let i = 0; i < collectionButtons.length; i++) {
        collectionButtons[i].style.backgroundColor = "hsl(268, 71%, 12%)";
        collectionButtons[i].style.color = "hsl(52, 100%, 62%)";
      }
      lables[index].style.backgroundColor = "hsl(177, 92%, 70%)";
      document.querySelector("#compareBtn").style.backgroundColor =
        "hsl(290, 70%, 36%)";
      document.querySelector("#delBtn").style.backgroundColor =
        "hsl(281, 89%, 26%)";
      document.querySelector("#compareBtn").style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.querySelector("#restBtn").style.color = "white";
      document.querySelector("#restBtn").style.backgroundColor =
        "hsl(281, 89%, 26%)";
      document.querySelector(".toggleAndTXt").style.color =
        "hsl(52, 100%, 62%)";
      for (let i = 0; i < lables.length; i++) {
        lables[i].style.color = "hsl(52, 100%, 62%)";
      }
      document.querySelector("#calc").style.color = "hsl(52, 100%, 62%)";
    } else {
      location.reload();
    }
  });
});
