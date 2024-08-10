window.addEventListener('load', solve);

function solve() {
    const inputs=[
        time=document.getElementById('time'),
        date=document.getElementById('date'),
        place=document.getElementById('place'),
        eventName=document.getElementById('event-name'),
        email=document.getElementById('email')]
   const addBtn=document.getElementById('add-btn')
   const checkList=document.getElementById('check-list')
   const upcomingList=document.getElementById('upcoming-list')
   const finishedList=document.getElementById('finished-list')
   const clearBtn=document.getElementById('clear')
   clearBtn.addEventListener('click',onClear)
   addBtn.addEventListener('click',onAdd)
   function onAdd(event) {
    let values=getInputValues(inputs)
    if (values.some((x) => x === "")) {
        return
    }
    disableBtn(addBtn)
    clearInputFields(inputs)
    createList(...values)

    
   }
   function createList(time,date,place,eventName,email) {
    const listElement=createElement('li',checkList,null,['event-content'])
    const articleElement=createElement('article',listElement)
    const dateElement=createElement('p',articleElement,`Begins: ${date} at: ${time}`)
    const placeElement=createElement('p',articleElement,`In: ${place}`)
    const eventNameElement=createElement('p',articleElement,`Event: ${eventName}`)
    const emailElement=createElement('p',articleElement,`Contact: ${email}`)
    const editBtnElement=createElement('button',listElement,"Edit",['edit-btn'])
    const continueBtnElement=createElement('button',listElement,'Continue',['continue-btn'])
    editBtnElement.addEventListener('click',onEdit.bind(null,time,date,place,eventName,email,listElement))
    continueBtnElement.addEventListener('click',onContinue.bind(null,listElement,editBtnElement,continueBtnElement))
    
   }
   function onEdit(time,date,place,eventName,email,listElement) {
    let values=[time,date,place,eventName,email,listElement]
    listElement.remove()
    enableBtn(addBtn)
    for (let i = 0; i < inputs.length; i++) {
        
        inputs[i].value=values[i]
        
        
    }
   }
   function onContinue(listElement,editBtnElement,continueBtnElement) {
    enableBtn(addBtn)
    upcomingList.appendChild(listElement)
    editBtnElement.remove()
    continueBtnElement.remove()
    const finishBtn=createElement('button',listElement,"Move to Finished",['finished-btn'])
    finishBtn.addEventListener('click',onFinish.bind(null,listElement,finishBtn))
   }
   function onFinish(listElement,finishBtn) {
    finishedList.appendChild(listElement)
    finishBtn.remove()
    
   }
   function onClear(event) {
    finishedList.firstChild.remove()
    // const list=event.currentTarget
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


    
    
