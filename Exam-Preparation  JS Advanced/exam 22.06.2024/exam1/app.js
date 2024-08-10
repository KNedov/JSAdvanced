window.addEventListener('load', solve);


function solve() {
    const infoList=document.querySelector('.info-list')
    const confirmList=document.querySelector('.confirm-list')
    const textList=document.querySelector('#status')
    let inputs=[
        firstName=document.getElementById('first-name'),
        lastName=document.getElementById('last-name'),
        fromDate=document.getElementById('from-date'),
        toDate=document.getElementById('to-date')
    ]
    const nextBtn=document.getElementById('next-btn')
    nextBtn.addEventListener('click',onNext)

    function onNext(event) {
        event.preventDefault()
        let values=getInputValues(inputs)
        if(values.some((x)=>x==="")){
            return
        }

        if ((new Date(values[2])).getTime() >= (new Date(values[3])).getTime()) {
            
          return;
        }
        
        createInfoList(...values)
        
        clearInputFields(inputs)
        disableBtn(nextBtn)
    }
    function createInfoList(firstName,lastName,fromDate,toDate) {
        const listEl=createElement('li',infoList,null,['vacation-content'])
        const articleEl= createElement('article',listEl)
        const nameEl=createElement('h3',articleEl,`Name: ${firstName} ${lastName}`)
        const fromDateEL=createElement('p',articleEl,`From date: ${fromDate}`)
        const toDateEl=createElement('p',articleEl,`To date: ${toDate}`)
        const editBtn=createElement('button',listEl,'Edit',['edit-btn'])
        const continueBtn=createElement('button',listEl,'Continue',['continue-btn'])
        editBtn.addEventListener('click',onEdit.bind(null,firstName,lastName,fromDate,toDate,listEl))
        continueBtn.addEventListener('click',onContinue)

    }
    function onEdit(firstName,lastName,fromDate,toDate,listEl) {
        listEl.remove()
        enableBtn(nextBtn)
        let values=[firstName,lastName,fromDate,toDate,listEl]
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value=values[i]
        }

    }
    function onContinue(event) {
        let listEl=event.currentTarget.parentElement
        confirmList.appendChild(listEl)
        let editBtn=listEl.childNodes[1]
        let continueBtn=listEl.childNodes[2]
        editBtn.remove()
        continueBtn.remove()
        const confirmBtn=createElement('button',listEl,'Confirm',['confirm-btn'])
        const cancelBtn=createElement('button',listEl,'Cancel',['cancel-btn'])
        confirmBtn.addEventListener('click',onConfirm)
        cancelBtn.addEventListener('click',onCancel)
    }
    function onConfirm(event) {
        let listEl=event.currentTarget.parentElement
        listEl.remove()
        enableBtn(nextBtn)
        textList.classList.add('vacation-confirmed')
        textList.textContent='Vacation Requested'
        textList.addEventListener('click',reloadPage)
        
    }
    function onCancel(event) {
        let listEl=event.currentTarget.parentElement
        listEl.remove()
        enableBtn(nextBtn)
        textList.classList.add('vacation-cancelled')
        textList.textContent='Cancelled Vacation'
        textList.addEventListener('click',reloadPage)
        
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
    
//TODO...
    }


    
    
