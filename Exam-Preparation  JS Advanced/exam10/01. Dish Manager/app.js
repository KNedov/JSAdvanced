window.addEventListener("load", solve);

function solve() {
  const inProgressList=document.getElementById('in-progress')
  const finishedList=document.getElementById('finished')
  const inputs=[
    firstName=document.getElementById('first-name'),
    lastName=document.getElementById('last-name'),
    age=document.getElementById('age'),
    dishDescription=document.getElementById('task')
  ]
  let progressCount=document.querySelector("#progress-count")
  const gender=document.querySelector('#genderSelect')
  const submitBtn=document.getElementById('form-btn')
  const clearBtn=document.getElementById('clear-btn')
  clearBtn.addEventListener('click',onCancel)
  submitBtn.addEventListener('click',onSubmit)
  function onSubmit(event) {
  
    let values=getInputValues(inputs)
    let genderValue=gender.value
    console.log(genderValue);
    if (values.some(v=>v=='')){return}
    createList(...values,genderValue)
    clearInputFields(inputs)
    gender.value='Male'
   progressCount.textContent++
   
    

  }
  function createList(firstName,lastName,age,dishDescription,genderValue) {
    const listElement=createElement('li',inProgressList,null,['each-line'])
    const articleElement=createElement('article',listElement)
    const h4Element=createElement('h4',articleElement,`${firstName} ${lastName}`)
    const pElement=createElement('p',articleElement,`${genderValue} ${age}`)
    const textElement= createElement('p',articleElement,`${dishDescription}`)
    const editBtnElement=createElement('button',listElement,'Edit',['edit-btn'])
    const completeBtnElement=createElement('button',listElement,'Mark as complete',['complete-btn'])
    editBtnElement.addEventListener('click',onEdit.bind(null,firstName,lastName,age,dishDescription,genderValue,listElement))
    completeBtnElement.addEventListener('click',onComplete.bind(null,listElement,editBtnElement,completeBtnElement))
  }
  function onComplete(listElement,editBtnElement,completeBtnElement) {
    finishedList.appendChild(listElement)
    editBtnElement.remove()
    completeBtnElement.remove()
    progressCount.textContent--

  }
  function onEdit(firstName,lastName,age,dishDescription,gendervalue,listElement) {
   
    listElement.remove()
    let values=[firstName,lastName,age,dishDescription]
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      element.value=values[i]
    }
    gender.value=gendervalue
    progressCount.textContent--
    
  }
  function onCancel(ev) {
    let list=ev.currentTarget.parentElement.children[1].firstChild
   if(list){
    list.remove()
   }
    
    
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
  function getInputValues(inputs) {
    return inputs.map((x) => x.value);
}
function clearInputFields(inputs) {
    inputs.forEach((x) => (x.value = ""));
}

}
