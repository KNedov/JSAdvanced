            // 100/100
window.addEventListener("load", solve);

function solve() {
  const containerText = document.querySelector(".container-text");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");
  const verification = document.getElementById("verification");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onNextClick);

  const inputs = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    dateIn: document.getElementById("date-in"),
    dateOut: document.getElementById("date-out"),
    peopleCount: document.getElementById("people-count"),
  };


  function onNextClick(event) {
    event.preventDefault();
    

    if (
      inputs.firstName.value == "" ||
      inputs.lastName.value == "" ||
      inputs.dateIn.value == "" ||
      inputs.dateOut.value == "" ||
      inputs.peopleCount.value == ""
    ) {
      return;
    }
   
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const dateIn = inputs.dateIn.value
    const dateOut = inputs.dateOut.value
    const peopleCount = inputs.peopleCount.value;

    if ((new Date(dateIn)).getTime() >= (new Date(dateOut)).getTime()) {
        console.log('return');
      return;
    }
   nextBtn.parentElement.reset()

    const li = createReservationInfo(
      firstName,
      lastName,
      dateIn,
      dateOut,
      peopleCount
    );
    const editBtn = e("button", "Edit");
    editBtn.className = "edit-btn";
    editBtn.addEventListener(
      "click",
      onEdit.bind(null, firstName, lastName, dateIn, dateOut, peopleCount)
    );

    const continueBtn = e("button", "Continue");
    continueBtn.className = "continue-btn";
    continueBtn.addEventListener(
      "click",
      onContinue.bind(null, firstName, lastName, dateIn, dateOut, peopleCount)
    );
    li.append(editBtn, continueBtn);
    infoList.append(li);
    
  
    nextBtn.disabled = true;
    {
    }
  }
  function createReservationInfo(
    firstName,
    lastName,
    dateIn,
    dateOut,
    peopleCount
  ) {
    const li = e("li");
    li.className = "reservation-content";
    const article = e("article");
    const h3 = e("h3", `Name: ${firstName} ${lastName}`);
    const p1 = e("p", `From date: ${dateIn}`);
    const p2 = e("p", `To date: ${dateOut}`);
    const p3 = e("p", `For ${peopleCount} people`);
    li.append(article);
    article.append(h3, p1, p2, p3);
    return li;
  }
  function e(name, textContent) {
    const el = document.createElement(name);
    el.textContent = textContent;

    return el;
  }
  function onEdit(firstName, lastName, dateIn, dateOut, peopleCount) {
    infoList.innerHTML = "";
    inputs.firstName.value = firstName;
    inputs.lastName.value = lastName;
    inputs.dateIn.value = dateIn;
    inputs.dateOut.value = dateOut;
    inputs.peopleCount.value = peopleCount;
    nextBtn.disabled = false;
  }
  function onContinue(firstName, lastName, dateIn, dateOut, peopleCount) {
    infoList.textContent = "";
    const li = createReservationInfo(
      firstName,
      lastName,
      dateIn,
      dateOut,
      peopleCount
    );
    confirmList.append(li);
    let confirmBtn = e("button", "Confirm");
    confirmBtn.className = "confirm-btn";
    confirmBtn.addEventListener("click", onFinish.bind(null, true));
    let cancelBtn = e("button", "Cancel");
    cancelBtn.addEventListener("click", onFinish.bind(null, false));
    cancelBtn.className = "cancel-btn";

    li.append(confirmBtn, cancelBtn);
  }
  function onFinish(confirmed) {
    confirmList.textContent = "";
    let className = confirmed
      ? "reservation-confirmed"
      : "reservation-cancelled";
    let textContent = confirmed ? "Confirmed." : "Cancelled.";
    verification.className = className;
    verification.textContent = textContent;

    nextBtn.disabled = false;
  }
}
