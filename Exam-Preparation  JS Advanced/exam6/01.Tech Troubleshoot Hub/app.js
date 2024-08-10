window.addEventListener('load', solution);

function solution() {
  const previewList=document.querySelector('.preview-list')
  const pendingList=document.querySelector('.pending-list')
  const resolvedList=document.querySelector('.resolved-list')
  
  const inputs=[
    employee=document.getElementById('employee'),
    category=document.getElementById('category'),
    urgency=document.getElementById('urgency'),
    team=document.getElementById('team'),
    description=document.getElementById('description')
  ]
  const addBtn=document.getElementById('add-btn')
  addBtn.addEventListener('click',OnAdd)
  function OnAdd(event) {
    event.preventDefault()
    let values=getInputValues(inputs)
    if (values.some((v)=>v==='')) {
      return
      
    }
    disableBtn(addBtn)
    clearInputFields(inputs)
    createList(...values)
    
  }
  function createList(employee,category,urgency,team,description) {
    const listElement=createElement('li',previewList,null,['problem-content'])
    const articleElement=createElement('article',listElement)
    const employeeElement=createElement('p',articleElement,`Form: ${employee}`)
    const categoryElement=createElement('p',articleElement,`Category: ${category}`)
    const urgencyElement=createElement('p',articleElement,`Urgency: ${urgency}`)
    const teamElement=createElement('p',articleElement,`Assigned to: ${team}`)
    const descriptionElement=createElement('p',articleElement,`Description: ${description}`)
    const editBtnElement=createElement('button',listElement,'Edit',['edit-btn'])
    const continueBtnElement=createElement('button',listElement,'Continue',['continue-btn'])
    editBtnElement.addEventListener('click',onEdit.bind(null,employee,category,urgency,team,description,listElement))
    continueBtnElement.addEventListener('click',onContinue.bind(null,listElement,editBtnElement,continueBtnElement))
  } 
  function onEdit(employee,category,urgency,team,description,listElement) {
    
    let values=[employee,category,urgency,team,description]
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value=values[i]
    }
    listElement.remove()
    enableBtn(addBtn)
    

  }
  function onContinue(listElement,editBtnElement,continueBtnElement) {
    pendingList.appendChild(listElement)
    editBtnElement.remove()
    continueBtnElement.remove()
   
    const resolvedBtnElement=createElement('button',listElement,'Resolved',['resolve-btn'])
    resolvedBtnElement.addEventListener('click',onResolved.bind(null,listElement,resolvedBtnElement))


  }
function onResolved(listElement,resolvedBtnElement) {
  resolvedList.appendChild(listElement)
  resolvedBtnElement.remove()
  const clearBtnElement=createElement('button',listElement,'Clear',['clear-btn'])
  clearBtnElement.addEventListener('click',onClear.bind(null,listElement))
} 
function onClear(listElement) {
  listElement.remove()
  enableBtn(addBtn)
 
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

    
    
