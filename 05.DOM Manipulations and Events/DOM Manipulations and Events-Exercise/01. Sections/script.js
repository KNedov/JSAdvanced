function create(words) {
  let getWords = words;
  const divElRef = document.getElementById("content");
  let createDiv = functionForCreate(words);
  function functionForCreate(root) {
    for (let i = 0; i < root.length; i++) {
      const divEl = document.createElement("div");
      const pEl = document.createElement("p");
      pEl.textContent = getWords[i];
      pEl.style.display = "none";
      divEl.append(pEl);
      divEl.addEventListener("click", onClick);
      divElRef.append(divEl);
    }
  }
  function onClick(event) {
    let getTargetDiv = event.currentTarget.children[0];
    let setDisplay = getTargetDiv.style.display;
    if (setDisplay == "none") {
      getTargetDiv.style.display = "block";
    } else {
      getTargetDiv.style.display = "none";
    }
  }
}
