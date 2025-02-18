let calc_area = document.querySelector("textarea");

// function for add number :
function addNums(text) {
  let { value } = calc_area;

  let ruleA = value.length === 0 && value === ".";

  if (!ruleA) {
    calc_area.value += text;
  }
}

const operList = ["+", "-", "%", "/", "*", "."];

function addOpr(text) {
  const { value } = calc_area;

  const lastChar = value[value.length - 1];

  if (lastChar !== text) {
    if (value.length > 0) {
      calc_area.value += text;
    }
  }
  if (operList.includes(lastChar)) {
    calc_area.value = value.substr(0, value.length - 1) + text;
  }
}

// deleting the input :
function del() {
  const { value } = calc_area;

  if (value.length > 0) {
    calc_area.value = value.substr(0, value.length - 1);
  }
}

// clear the input:
function clearInput() {
  const { value } = calc_area;

  if (value.length > 0) {
    calc_area.value = "";
  }
}

// calc :
function calc() {
  const { value } = calc_area;

  try {
    const result = eval(value);

    if (!isNaN(result)) {
      calc_area.value = result.toString();
    } else {
      alert("Invalid input, please check your expression.");
    }
  } catch (error) {
    alert("Invalid input, please check your expression.");
  }
}

// when user cliks the number that time addNum funtion should call :
document.querySelectorAll(".button_group > button").forEach((e) => {
  e.addEventListener("click", (f) => {
    const { classList, innerText } = f.target;

    console.log(innerText);

    console.log(classList);

    if (classList.contains("num")) {
      addNums(innerText);
    } else if (classList.contains("clear")) {
      clearInput();
    } else if (classList.contains("opr")) {
      addOpr(innerText);
    } else if (classList.contains("calc")) {
      calc(innerText);
    } else if (classList.contains("delete")) {
      del();
    }
  });
});

// what innerText should be typed :

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
      addNums(e.key);
      break;

    case "+":
    case "-":
    case "%":
    case "/":
    case ".":
      addOpr(e.key);
      break;

    case "c":
      clearInput();
      break;

    case "Enter":
      calc();
      break;

    case "Backspace":
      del();
      break;
  }
});
