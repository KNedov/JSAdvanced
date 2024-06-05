function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const searchFieldRef = document.getElementById("searchField");
  const tableRowRef = document.querySelectorAll("tbody tr");

  function onClick() {
    let searchField = searchFieldRef.value;
    searchFieldRef.value = "";

    for (const row of tableRowRef) {
      const tableDataRef = row.querySelectorAll("td");
      for (const data of tableDataRef) {
        if (data.textContent.includes(searchField)) {
          row.classList.add("select");
          break;
        } else {
          row.classList.remove("select");
        }
      }
    }
  }
}
