function storageCatalogue(array) {
  let sortedInput = array.sort((a, b) => a.localeCompare(b));
  let sortedArray = [];
  for (const el of array) {
    let [productName, productPrice] = el.split(" : ");
    let firstLetter = productName[0];
    let productNameAndPrice = `  ${productName}: ${productPrice}`;
    if (!sortedArray.includes(firstLetter)) {
      sortedArray.push(firstLetter);
      sortedArray.push(productNameAndPrice);
    } else {
      sortedArray.push(productNameAndPrice);
    }
  }
  for (const el of sortedArray) {
    console.log(el);
  }
}
storageCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
