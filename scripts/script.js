// calculator 1
function calculate(num1, operator, num2) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else if (operator === "%") {
    console.log((num1 / 100) * num2);
  } else {
    console.log(`Null`);
  }
}

calculate(30, "+", 40);
calculate(220, "-", 40);
calculate(30, "*", 40);
calculate(300, "/", 10);
calculate(10, "%", 225);

// calculate inputs values
function showInputValue() {
  let num1 = document.getElementById("firstValue").value;
  let num2 = document.getElementById("secondValue").value;
  let operator = document.getElementById("operator").value;

  if (operator === "+") {
    console.log(Number(num1) + Number(num2));
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  } else if (operator === "%") {
    console.log((num1 / 100) * num2);
  } else {
    console.log(
      "Undefined operator. Please, enter one of the following: +, -, *, /, %"
    );
  }
}

showInputValue();
