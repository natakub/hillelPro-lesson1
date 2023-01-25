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

calculate(10, "%", 100);
