function toggle() {
  let myButton = document.getElementsByClassName("button")[0];
  let textRef = document.getElementById("extra");
  let text = textRef.textContent;
  if (textRef.style.display === "block") {
    textRef.style.display = "none";
    myButton.textContent = "More";
  } else {
    textRef.style.display = "block";
    myButton.textContent = "Less";
  }
}
