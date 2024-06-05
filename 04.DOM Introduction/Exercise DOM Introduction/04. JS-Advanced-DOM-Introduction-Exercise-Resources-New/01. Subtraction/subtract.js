function subtract() {
  let firstInputRef = document.getElementById("firstNumber");
  let secondInputRef = document.getElementById("secondNumber");
  let resultRef = document.getElementById("result");

  let firstNumber = Number(firstInputRef.value);
  let secondNumber = Number(secondInputRef.value);
  let result = firstNumber - secondNumber;
  resultRef.textContent = result;
}
