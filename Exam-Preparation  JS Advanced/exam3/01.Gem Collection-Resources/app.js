window.addEventListener("load", solve);

function solve() {
const addBtn=document.getElementById('add-btn')
const preview=document.getElementById('preview-list')
const collection=document.getElementById('collection')
addBtn.addEventListener('click',onAdd)

let inputs=[
    gemName=document.getElementById('gem-name'),
    color=document.getElementById('color'),
    carats=document.getElementById('carats'),
    price=document.getElementById('price'),
    type=document.getElementById('type')
]
function onAdd() {
    let values=getInputValues(inputs)
    values.forEach(input => {
        if (input=='') {
            return
        }
    });
    disableBtn(addBtn)
    clearInputFields(inputs)

 addElements(...values)

}

function addElements(gemName,color,carats,price,type
) {
    const listElement=createElement('li',preview,null,['gem-info'])
    const articleElement=createElement('article',listElement)
    const nameElement= createElement('h4',articleElement,gemName)
    const colorElement=createElement('p',articleElement,`Color: ${color}`)
    const caratsElement=createElement('p',articleElement,`Carats: ${carats}`)
    const priceElement=createElement('p',articleElement,`Price: ${price}$`)
    const typeElement=createElement('p',articleElement,`Type: ${type}`)
    const saveBtnElement=createElement('button',listElement,'Save to Collection',['save-btn'])
    const editBtnElement=createElement('button',listElement,'Edit Information',['edit-btn'])
    const cancelBtnElement=createElement('button',listElement,'Cancel',['cancel-btn'])
    saveBtnElement.addEventListener('click',onSave.bind(null,gemName,color,carats,price,type,listElement))
    editBtnElement.addEventListener('click',onEdit.bind(null,gemName,color,carats,price,type,listElement))
    cancelBtnElement.addEventListener('click',onCancel.bind(null,listElement))
    
}
function onEdit(gemName,color,carats,price,type,listElement) {
    let values=[gemName,color,carats,price,type]
    listElement.remove()
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        element.value=values[index] 
    }
    enableBtn(addBtn)

}
function onSave(gemName,color,carats,price,type,listElement) {
listElement.remove()
const newlistElement=createElement('li',collection,)
const collectionElement=createElement('p',newlistElement,`${gemName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`)
  enableBtn(addBtn)  
}
function onCancel(listElement) {
    debugger
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
      function getInputValues(inputs) {
        return inputs.map((x) => x.value);
    }
    function clearInputFields(inputs) {
        inputs.forEach((x) => (x.value = ""));
    }
    function reloadPage() {
        window.location.reload();
    }
}
