window.addEventListener("load", solve);

function solve() {
  const preview=document.getElementById('preview-list')
  const main=document.getElementById('main')
  let inputs=[
    firstName=document.getElementById('first-name'),
    lastName=document.getElementById('last-name'), 
    age=document.getElementById('age'),
    storyTitle=document.getElementById('story-title'),
    genre=document.getElementById('genre'), 
    storyText=document.getElementById('story')
  ]
  
  const publishBtn=document.getElementById('form-btn')
  publishBtn.addEventListener('click',onPublish)
  function onPublish(event) {
    event.preventDefault()
    
    let values=getInputValues(inputs)
    if (values.some(v=>v==='')) {
      return
    }
    createPublishList(...values)
    disableBtn(publishBtn)
    clearInputFields(inputs)
  }
  function createPublishList(firstName,lastName,age,storyTitle,genre,storyText) {
    const storyInfoEl=createElement('li',preview,null,['story-info'])
    const articleEl=createElement('article',storyInfoEl)
    const nameH4El=createElement('h4',articleEl,`Name: ${firstName} ${lastName}`)
    const ageEl=createElement('p',articleEl,`Age: ${age}`)
    const titleEl=createElement('p',articleEl,`Title: ${storyTitle}`)
    const genreEl=createElement('p',articleEl,`Genre: ${genre}`)
    const storyTextEl=createElement('p',articleEl,`${storyText}`)
    const saveBtn=createElement('button',storyInfoEl,'Save Story',['save-btn'])
    const editBtn=createElement('button',storyInfoEl,'Edit Story',['edit-btn'])
    const deleteBtn=createElement('button',storyInfoEl,'Delete Story',['delete-btn'])

    editBtn.addEventListener('click',onEdit.bind(null,firstName,lastName,age,storyTitle,genre,storyText,storyInfoEl))
    saveBtn.addEventListener('click',onSave)
    deleteBtn.addEventListener('click',onDelete)

  }
  function onDelete(event) {
    const parentNode=event.currentTarget.parentNode
    parentNode.remove()
    enableBtn(publishBtn)
    
  }
  function onSave(event) {
   main.textContent=''
   const messageEl=createElement('h1',main,'"Your scary story is saved!"')
    
    
  }

  function onEdit(firstName,lastName,age,storyTitle,genre,storyText,storyInfoEl) {
  let values=[firstName,lastName,age,storyTitle,genre,storyText]
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    element.value=values[i]
  }    
  storyInfoEl.remove()
  enableBtn(publishBtn)
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
}
