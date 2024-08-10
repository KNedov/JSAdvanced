window.addEventListener("load", solve);

function solve() {
    const snowmanName = document.getElementById("snowman-name");
    const snowmanHeight = document.getElementById("snowman-height");
    const location = document.getElementById("location");
    const creatorName = document.getElementById("creator-name");
    const specialAttribute = document.getElementById("special-attribute");
    const addBtn = document.querySelector(".add-btn");
    const preview = document.querySelector(".snowman-preview");
    const snowList=document.querySelector('.snow-list')
    const bodyList=document.querySelector('body')
    const heroList=document.getElementById('hero')
    const img=document.getElementById('back-img')
  
  
    const inputs = [
      snowmanName,
      snowmanHeight,
      location,
      creatorName,
      specialAttribute,]
     
    
    
    addBtn.addEventListener("click", onAdd);
    function onAdd(event) {
      event.preventDefault();
      let inputValue=getInputValues()
      if (inputValue.some((x) => x === "")) {
          return
      }
  createPreviewElement(...inputValue)
  clearInputFields()
      disableBtn(addBtn);
  }
      function createPreviewElement(snowmanName,snowmanHeight,location,creatorName,specialAttribute) {
          const previewElement = createElement("li", preview, null,["snowman-info"]);
      const article = createElement("article",previewElement);
      const nameElement = createElement("p",article, `Name: ${snowmanName}`);
      const heightElement = createElement("p",article, `Height: ${snowmanHeight}`);
      const locationElement = createElement("p",article, `Location: ${location}`);
      const creatorElement = createElement("p",article, `Creator: ${creatorName}`);
      const attributteElement = createElement("p",article,`Attribute: ${specialAttribute}`);
      const divElement=createElement('div',previewElement,null,['btn-container'])
      const editBtnElement=createElement('button',divElement,'Edit',['edit-btn'])
      const nextBtnElement=createElement('button',divElement,'Next',['next-btn'])
      editBtnElement.addEventListener('click',()=>{
          let values=[snowmanName,snowmanHeight,location,creatorName,specialAttribute]
          for (let index = 0; index < inputs.length; index++) {
              inputs[index].value=values[index]
              enableBtn(addBtn)
              previewElement.remove()
              
          }
      })
      nextBtnElement.addEventListener('click',(onNext).bind(null,editBtnElement,nextBtnElement,previewElement,article,divElement))
      }
      
  
    
   
    function onNext(editBtnElement,nextBtnElement,previewElement,article,divElement) {
     snowList.appendChild(previewElement)
     previewElement.classList.remove("snowman-info")
     previewElement.classList.add('snowman-content')
  editBtnElement.remove()
  nextBtnElement.remove()
  divElement.remove()
  const sendBtn=createElement('button',article,'Send',['send-btn'])
  sendBtn.addEventListener('click',onSend)
  
    }
    function onSend() {
  heroList.remove()
  
  img.removeAttribute('hidden')
  const backBtn=createElement('button',bodyList,'Back',['back-btn'])
  backBtn.addEventListener('click',()=>{reloadPage()})
      
    }
  
  
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
    function getInputValues() {
      return inputs.map((x) => x.value);
  }
  function clearInputFields() {
      inputs.forEach((x) => (x.value = ""));
  }
  function reloadPage() {
      window.location.reload();
  }
  }