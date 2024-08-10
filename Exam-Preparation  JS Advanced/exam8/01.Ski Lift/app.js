window.addEventListener('load', solve);

function solve() {
    const infoList=document.querySelector('.ticket-info-list')
    const confirmList=document.querySelector('.confirm-ticket')
    const mainDiv=document.getElementById('main')
    const body=document.getElementById('body')
    let inputs=[
        firstName=document.getElementById(`first-name`),
        lastName=document.getElementById(`last-name`),
        numberOfPeople=document.getElementById(`people-count`),
        fromDate=document.getElementById(`from-date`),
        numberOfDays=document.getElementById(`days-count`)
    ]

    const nextButton=document.getElementById('next-btn')
    nextButton.addEventListener('click',onNext)

    function onNext(event) {
        event.preventDefault()
        let values=getInputValues(inputs)
        if (values.some(v=>v==='')) {
            return
        }
        clearInputFields(inputs)
        disableBtn(nextButton)
        createListElement(...values)
        
    }

    function createListElement(firstName,lastName,numberOfPeople,fromDate,numberOfDays) {
            const listElement=createElement('li',infoList,null,['ticket'])
            const articleElement=createElement('article',listElement)
            const nameElement=createElement('h3',articleElement,`Name: ${firstName} ${lastName}`)
            const fromDateElement= createElement('p',articleElement,`From date: ${fromDate}`)
            const forDaysElement=createElement('p',articleElement,`For ${numberOfDays} days`)
            const numberOfPeopleElement=createElement('p',articleElement,`For ${numberOfPeople} people`)
            const editBtnElement=createElement('button',listElement,'Edit',['edit-btn'])          
            const continueBtnElement=createElement('button',listElement,'Continue',['continue-btn'])         
            
            editBtnElement.addEventListener('click',onEdit.bind(null,firstName,lastName,numberOfPeople,fromDate,numberOfDays,listElement))
            continueBtnElement.addEventListener('click',onContinue.bind(null,firstName,lastName,numberOfPeople,fromDate,numberOfDays,listElement))
           
   
    }
    function onEdit(firstName,lastName,numberOfPeople,fromDate,numberOfDays,listElement) {
        let values=[firstName,lastName,numberOfPeople,fromDate,numberOfDays]
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            element.value=values[i]
        }
        enableBtn(nextButton)
        listElement.remove()
    }
    function onContinue(firstName,lastName,numberOfPeople,fromDate,numberOfDays,listElement) {
        listElement.remove()
        const confirmListElement=createElement('li',confirmList,null,['ticket-content'])
        const articleElement=createElement('article',confirmListElement)
        const nameElement=createElement('h3',articleElement,`Name: ${firstName} ${lastName}`)
        const fromDateElement= createElement('p',articleElement,`From date: ${fromDate}`)
        const forDaysElement=createElement('p',articleElement,`For ${numberOfDays} days`)
        const numberOfPeopleElement=createElement('p',articleElement,`For ${numberOfPeople} people`)
        const confirmBtnElement=createElement('button',confirmList,'Confirm',['confirm-btn'])          
        const cancelBtnElement=createElement('button',confirmList,'Cancel',['cancel-btn'])
        cancelBtnElement.addEventListener('click',onCancel.bind(null,confirmList))
        confirmBtnElement.addEventListener('click',onConfirm)
        
    }
    function onConfirm(event) {
       mainDiv.remove()
       const textElement=createElement('h1',body,'Thank you, have a nice day!',null,'thank-you')
       const backBtn=createElement('button',body,'Back',null,'back-btn')
       backBtn.addEventListener('click',reloadPage)
    }
    function onCancel(confirmListElement) {
        confirmListElement.remove()
        enableBtn(nextButton)
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
        for (const el of inputs) {
            el.value=''
        }
    }
    function reloadPage() {
        window.location.reload();
    }
}


    
    
