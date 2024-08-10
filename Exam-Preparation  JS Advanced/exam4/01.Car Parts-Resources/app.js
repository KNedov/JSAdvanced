        // 95/100
window.addEventListener("load", solve);

function solve() {
 
  const nextBtn = document.getElementById("next-btn");
  const completeText = document.getElementById("complete-text");

  const infoList = document.querySelector(".info-list");
  const confirmList= document.querySelector('.confirm-list')
  const img=document.getElementById('complete-img')
  nextBtn.addEventListener("click", onNext);

  const inputs = [
    carModel = document.getElementById("car-model"),
    carYear = document.getElementById("car-year"),
    partName = document.getElementById("part-name"),
    partNumber = document.getElementById("part-number"),
    condition = document.getElementById("condition"),
  ];

  function onNext(event) {
   
    event.preventDefault();
    const values = getInputValues(inputs)
    console.log(values);
    if (values.some((x) => x === "")) {
      return
  }

    img.style.visibility = 'hidden'
    completeText.textContent=''
    clearInputFields(inputs);
    disableBtn(nextBtn);
    createInfoList(...values);
    console.log(values);
  }
  function createInfoList(carModel, carYear, partName, partNumber, condition) {
    const listElement = createElement("li", infoList, null, ["part-content"]);
    const articleElement = createElement("article", listElement);
    const modelElement = createElement("p",articleElement,`Car Model: ${carModel}`);
    const carYearElement = createElement(
      "p",
      articleElement,
      `Car Year: ${carYear}`
    );
    const partNameElement = createElement(
      "p",
      articleElement,
      `Part Name: ${partName}`
    );
    const partNumberElement = createElement(
      "p",
      articleElement,
      `Part Number: ${partNumber}`
    );
    const conditionElement = createElement(
      "p",
      articleElement,
      `Condition: ${condition}`
    );
    const editBtnElement = createElement("button", listElement, "Edit", [
      "edit-btn",
    ]);
    const continueBtnElement = createElement(
      "button",
      listElement,
      "Continue",
      ["continue-btn"]
    );
    continueBtnElement.addEventListener(
      "click",
      onContinue.bind(null,editBtnElement, continueBtnElement,listElement,)
    );
    editBtnElement.addEventListener(
      "click",
      onEdit.bind(null, carModel, carYear, partName, partNumber, condition,listElement)
    );
    
  }
  function onEdit(carModel, carYear, partName, partNumber, condition,listElement) {
    let values = [carModel, carYear, partName, partNumber, condition];
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].value = values[index];
      enableBtn(nextBtn);
      listElement.remove();
    }
  }
  function onContinue(editBtnElement,continueBtnElement,listElement) {
    
    let list=confirmList.appendChild(listElement)
    editBtnElement.remove()
    continueBtnElement.remove()
    const confirmBtnElement=createElement('button',listElement,'Confirm',['confirm-btn'])
    const cancelBtnElement=createElement('button',listElement,'Cancel',['cancel-btn'])
    confirmBtnElement.addEventListener('click',onConfirm.bind(null,listElement))
    cancelBtnElement.addEventListener('click',onCancel.bind(null,listElement))

    
    
  }
  function onConfirm(listElement) {
    listElement.remove()
    enableBtn(nextBtn)
  
    img.style.visibility = 'visible'
    completeText.textContent='Part is Ordered!'

  }
  function onCancel(listElement) {
    listElement.remove()
    enableBtn(nextBtn)
  }

  function createElement(
    tagName,
    parentElement,
    textContent,
    classList,
    elementId
  ) {
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
  function reloadPage(listElement) {
 
  }
}
