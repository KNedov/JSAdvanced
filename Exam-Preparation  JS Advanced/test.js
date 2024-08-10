function createElement(tagName, parentElement, textContent, classList, elementId) {
    const element = document.createElement(tagName);
    if (textContent) {
        element[tagName === "input" ? "value" : "textContent"] = textContent;
    }
    if (Array.isArray(classList)) {
        element.classList.add(...classList);
    }
    if (elementId) {
        element.setAttribute("id", elementId);
    }
    if (parentElement) {
        parentElement.appendChild(element);
    }
    return element;
}
  function disableBtn(nameBtn) {
    nameBtn.setAttribute("disabled", true);
  }

  function enableBtn(nameBtn) {
    nameBtn.removeAttribute("disabled");
  } 
  function getInputValues(inputs) {
    return inputs.map((x) => x.value);
}
function clearInputFields(inputs) {
    inputs.forEach((x) => (x.value = ""));
}
function reloadPage() {
    window.location.reload();
}
function checkInputsForEmpyString(values) {
    if (values.some(v=>v==='')) {
      return
    }
  }
  // LastList.innerHTML='' изчиства всичко от ластЛист