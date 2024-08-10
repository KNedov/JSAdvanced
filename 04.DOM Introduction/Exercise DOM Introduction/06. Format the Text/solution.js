function solve() {
  const areaInputRef = document.getElementById("input");
  const outputRef = document.getElementById("output");
  let textInput = areaInputRef.value.split(".").filter((e) => e.length > 0);

  let arrResult = [];
  document.getElementById("output").textContent = "";
  for (let i = 0; i < textInput.length; i++) {
    const el = textInput[i];
    arrResult.push(el + ".");
    if (arrResult.length == 3) {
      let p = document.createElement("p");
      p.textContent = arrResult.join("");
      outputRef.appendChild(p);
      arrResult = [];
    } else if (i == textInput.length - 1) {
      let p = document.createElement("p");
      p.textContent = arrResult.join("");
      outputRef.appendChild(p);
      arrResult = [];
    }
  }
}
