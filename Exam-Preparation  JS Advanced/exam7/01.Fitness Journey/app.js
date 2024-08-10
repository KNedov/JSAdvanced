window.addEventListener('load', solve);

function solve() {
    const classInfoList=document.querySelector('.class-info')
    const confirmclass=document.querySelector('.confirm-class')
    const mainDiv=document.getElementById('main')
    const body=document.getElementById('body')
const inputs=[
    nameText=document.getElementById('name'),
    email=document.getElementById('email'),
    contactNumber=document.getElementById('contact-number'),
    classType=document.getElementById('class-type'),
    classTime=document.getElementById('class-time')
]
const nextBtn=document.getElementById('next-btn')
nextBtn.addEventListener('click',onNext)
function onNext(event) {
    event.preventDefault()
    let values=getInputValues(inputs)
    if (values.some((x)=>x=="")) {
        return
    }
   clearInputFields(inputs)
   disableBtn(nextBtn)
   CreateInfoList(...values)
    
}

function CreateInfoList(nameText,email,contactNumber,classType,classTime) {
    const listElement=createElement('li',classInfoList,null,['info-item'])
    const articleElement=createElement('article',listElement)
    const nameElement=createElement('p',articleElement,`${nameText}`)
    const emailElement=createElement('p',articleElement,`${email}`)
    const contactNumberElement=createElement('p',articleElement,`${contactNumber}`)
    const classTypeElement=createElement('p',articleElement,`${classType}`)
    const classTimeElement=createElement('p',articleElement,`${classTime}`)
    const editBtnElement=createElement('button',listElement,'Edit',['edit-btn'])
    const continueBtnElement=createElement('button',listElement,'Continue',['continue-btn'])
    editBtnElement.addEventListener('click',onEdit.bind(null,nameText,email,contactNumber,classType,classTime,listElement))
    continueBtnElement.addEventListener('click',onContinue.bind(null,nameText,email,contactNumber,classType,classTime,listElement))

function onEdit(nameText,email,contactNumber,classType,classTime,listElement) {
    listElement.remove()
    let values=[nameText,email,contactNumber,classType,classTime]
    
    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        element.value=values[i]
    }
    enableBtn(nextBtn)
}
function onContinue(nameText,email,contactNumber,classType,classTime,listElement) {
    listElement.remove()
    const confirmListElement=createElement('li',confirmclass,null,['confirm-class'])
    const articleElement=createElement('article',confirmListElement,null,['perosnal-info'])
    const nameElement=createElement('p',articleElement,`${nameText}`)
    const emailElement=createElement('p',articleElement,`${email}`)
    const contactNumberElement=createElement('p',articleElement,`${contactNumber}`)
    const classTypeElement=createElement('p',articleElement,`${classType}`)
    const classTimeElement=createElement('p',articleElement,`${classTime}`)
    const cancelBtnElement=createElement('button',confirmListElement,'Cancel',['cancel-btn'])
    const confirmBtnElement=createElement('button',confirmListElement,'Confirm',['confirm-btn'])
    cancelBtnElement.addEventListener('click',onCancel.bind(null,confirmListElement))
    confirmBtnElement.addEventListener('click',onConfirm.bind(null,))
}
function onCancel(confirmListElement) {
    confirmListElement.remove()
    enableBtn(nextBtn)
    
}
function onConfirm(params) {
    mainDiv.remove()
    const h1Element=createElement('h1',body,'Thank you for scheduling your appointment, we look forward to seeing you!',null,'tank-you')
    const doneBtnElement=createElement('button',body,"Done",null,'done-btn')
    doneBtnElement.addEventListener('click',()=>reloadPage())
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




