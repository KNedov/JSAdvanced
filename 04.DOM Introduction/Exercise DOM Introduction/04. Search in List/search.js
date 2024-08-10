function search() {
  let citiesRef = Array.from(document.getElementsByTagName("li"));
  let searchedTextRef = document.getElementById("searchText");
  let resultsRef = document.getElementById("result");

  let text = searchedTextRef.value;
  let matchesCounter = 0;
  for (const city of citiesRef) {
    if (city.textContent.includes(text)) {
      console.log(city);
      city.style.textDecoration = "underline";
      city.style.fontWeight = "bold";
      matchesCounter++;
    } else {
      console.log("not match");
    }
  }

  resultsRef.textContent = `${matchesCounter} matches found`;
}
