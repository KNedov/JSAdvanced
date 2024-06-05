function solve() {
  let textInputRef = document.getElementById("text");
  let conventionInputref = document.getElementById("naming-convention");
  let resultRef = document.getElementById("result");
  let result = "";
  let text = textInputRef.value;
  let convention = conventionInputref.value;
  let textOutput = "";

  if (convention == "Camel Case") {
    result = camelCase(text);
  } else if (convention == "Pascal Case") {
    result = pascalCase(text);
  } else {
    result = 'Error!'
  }
  resultRef.textContent = result;

  function camelCase(text) {
    let textOutput = "";
    let textForManipulating = text.split(" ");
    let index = 0;
    for (const el of textForManipulating) {
      if (index == 0) {
        textOutput += el;
      } else {
        let bufferLetter = "";
        for (let l = 0; l < el.length; l++) {
          const letter = el[l];
          let transformLetter = "";
          if (l == 0) {
            transformLetter = letter.toUpperCase();
          } else {
            transformLetter = letter.toLowerCase();
          }
          bufferLetter += transformLetter;
        }
        textOutput += bufferLetter;
      }
      index++;
    }
    return textOutput;
  }
  function pascalCase(text) {
    let textOutput = "";
    let textForManipulating = text.split(" ");
    let index = 0;
    for (const el of textForManipulating) {
      let bufferLetter = "";
      for (let l = 0; l < el.length; l++) {
        const letter = el[l];
        let transformLetter = "";
        if (l == 0) {
          transformLetter = letter.toUpperCase();
        } else {
          transformLetter = letter.toLowerCase();
        }
        bufferLetter += transformLetter;
      }
      textOutput += bufferLetter;
  
      index++;
    }
    return textOutput;
  }
  
}
