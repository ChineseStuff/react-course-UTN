let operation = "";
let operationResult = "";

function inputTypingHandler(e) {
  clearBefore();
  let event = e || window.event;
  let key;
  if (event.type === "paste") key = event.clipboardData.getData("text/plain");
  else key = event.key;
  if (isNaN(key)) {
    if (event.preventDefault) event.preventDefault();
  }
}

function onInputChangeHandler() {
  divResult.innerHTML = ` ${op1.value}  ${operation}  ${op2.value}`;
}

function operationClickHandler(e) {
  operation = e.target.innerHTML;
  divResult.innerHTML = ` ${op1.value}  ${operation}  ${op2.value}`;
}

function clearHandler(e) {
  divResult.innerHTML = "";
  op1.value = "";
  op2.value = "";
  operationResult = "";
  operation = "";
}
let clearBefore = () => (operationResult ? clearHandler() : false);

function performOperation(e) {
  let operando1 = parseFloat(op1.value);
  let operando2 = parseFloat(op2.value);
  switch (operation) {
    case "+":
      operationResult = operando1 + operando2;
      break;
    case "-":
      operationResult = operando1 - operando2;
      break;
    case "x":
      operationResult = operando1 * operando2;
      break;
    case "÷":
      operationResult = operando1 / operando2;
      break;
    default:
      break;
  }

  divResult.innerHTML += ` = ${operationResult}`;
}

window.onload = function() {
  divResult = document.getElementById("div-result");

  op1 = document.getElementById("op-1");
  op1.addEventListener("keypress", inputTypingHandler);
  op1.addEventListener("paste", inputTypingHandler);
  op1.addEventListener("blur", onInputChangeHandler);

  op2 = document.getElementById("op-2");
  op2.addEventListener("keypress", inputTypingHandler);
  op2.addEventListener("paste", inputTypingHandler);
  op2.addEventListener("blur", onInputChangeHandler);

  add = document.getElementById("add");
  add.addEventListener("click", operationClickHandler);

  subtract = document.getElementById("subtract");
  subtract.addEventListener("click", operationClickHandler);

  multiply = document.getElementById("multiply");
  multiply.addEventListener("click", operationClickHandler);

  divide = document.getElementById("divide");
  divide.addEventListener("click", operationClickHandler);

  equals = document.getElementById("equals");
  equals.addEventListener("click", performOperation);

  clear = document.getElementById("clear");
  clear.addEventListener("click", clearHandler);
};
