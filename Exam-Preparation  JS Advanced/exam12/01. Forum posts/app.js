window.addEventListener("load", solve);

function solve() {
  const previewList=document.getElementById('review-list')
  const publishedList=document.getElementById('published-list')
  const clearBtn=document.getElementById('clear-btn')
  clearBtn.addEventListener('click',onClear)

 
 let inputs=[
    title=document.getElementById('post-title'),
    category=document.getElementById('post-category'),
    content=document.getElementById('post-content')
 ]
 const publishBtn=document.getElementById('publish-btn')
 publishBtn.addEventListener('click',onPublish)
 function onPublish(event) {
  let values=getInputValues(inputs)
  if (values.some(v=>v=='')) {
    return
  }
  clearInputFields(inputs)
  createList(...values)
  
  
 
 }
 function createList(title,category,content,...values) {
  const listEl=createElement('li',previewList,null,['rpost'])
  const articleEL=createElement('article',listEl)
  const titleEl=createElement('h4',articleEL,`${title}`)
  const categoryEl=createElement('p',articleEL,`Category: ${category}`)
  const contentEl=createElement('p',articleEL,`Content: ${content}`)

  const editBtnEl=createElement('button',listEl,'Edit')
  editBtnEl.className='action-btn edit'
  editBtnEl.addEventListener('click',onEdit.bind(null,title,category,content,listEl))

  const approveBtnEl=createElement('button',listEl,'Approve')
  approveBtnEl.className='action-btn approve'
  approveBtnEl.addEventListener('click',onApprove.bind(null,listEl))
  
 }
 function onEdit(title,category,content,listEl) {
let values=[title,category,content]
listEl.remove()
  
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    element.value=values[i]
    
  }

 }
 function onApprove(listEl) {
  publishedList.appendChild(listEl)
  let editBtnEl=listEl.children[1]
  let approveBtnEl=listEl.children[2]
  editBtnEl.remove()
  approveBtnEl.remove()
 
  
  
 }
 function onClear(event) {
 publishedList.innerHTML=''

  
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
function reloadPage() {
  window.location.reload();
}

}
