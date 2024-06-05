function generateReport() {
  const outputRef = document.getElementById("output");
  const checkRef = document.querySelectorAll("thead tr th input");
  const rowRef = Array.from(document.querySelectorAll('tbody tr'));
  const checked={};
  const result= [];

  for (let i = 0; i < checkRef.length; i++) {
   if (checkRef[i].checked===true) {
     checked[checkRef[i].name]=i;
   }
    
  }
  for (const row of rowRef) {
    const obj = {};

    for (const [header, index] of Object.entries(checked)) {
        obj[header] = row.children[index].textContent;
    }

    result.push(obj);
}

outputRef.value = JSON.stringify(result);
  
}
