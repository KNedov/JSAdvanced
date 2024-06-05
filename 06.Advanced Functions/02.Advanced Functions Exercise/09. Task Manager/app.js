function solve() {
  const getTask = document.getElementById("task");
  const getDescription = document.getElementById("description");
  const getDate = document.getElementById("date");

  const open =
    document.querySelector(".orange").parentElement.parentElement.children[1];
  const inProgress =
    document.querySelector(".yellow").parentElement.parentElement.children[1];
  const complete =
    document.querySelector(".green").parentElement.parentElement.children[1];

  const addEvent = document.querySelector("form");
  addEvent.addEventListener("submit", onSubmit);

  function onSubmit(event) {
    event.preventDefault();
    if (!getTask || !getDescription || !getDate) {
      return;
    }
    let article = createArticle(getTask, getDescription, getDate);
    open.append(article);
  }

  function createArticle(getTask, getDescription, getDate) {
    const article = document.createElement("article");
    const createH3 = document.createElement("h3");
    createH3.textContent = getTask.value;
    const createPDescript = document.createElement("p");
    createPDescript.textContent = `Description: ${getDescription.value}`;
    const createPDate = document.createElement("p");
    createPDate.textContent = `Due Date: ${getDate.value}`;
    const createDiv = document.createElement("div");
    createDiv.classList.add("flex");
    article.append(createH3, createPDescript, createPDate, createDiv);
    let startBtn = createButton("Start", "green", start);
    createDiv.append(startBtn);
    let delBtn = createButton("Delete", "red", del);
    createDiv.append(delBtn);

    return article;
  }
  function createButton(text, colour, handler) {
    const createButton = document.createElement("button");
    createButton.textContent = text;
    createButton.classList.add(colour);
    createButton.addEventListener("click", handler);

    return createButton;
  }
  function start(event) {
    let article = event.currentTarget.parentElement.parentElement;
    inProgress.append(article);
    let divBtn =event.target.parentElement
    divBtn.innerHTML = "";
    let delBtn = createButton("Delete", "red", del);
    let finishBtn = createButton("Finish", "orange", finish);
    divBtn.append(delBtn, finishBtn);
  }
  function del(event) {

    let article =event.currentTarget.parentElement.parentElement
    let container=article.parentElement
    container.removeChild(article)
  }
  function finish(event) {
    let btnDiv=event.currentTarget.parentElement
    let article=btnDiv.parentElement
    complete.append(article)
    article.removeChild(btnDiv)
    debugger;
  }
}
