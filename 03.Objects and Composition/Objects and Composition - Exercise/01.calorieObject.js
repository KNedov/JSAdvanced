function calorieObject(array) {
  let listOfProducts = {};

  for (let el = 0; el < array.length; el += 2) {
    if (el !== undefined) {
      const nameProduct = array[el];
      const valueProduct = Number(array[el + 1]);
      listOfProducts[nameProduct] = valueProduct;
    } else {
      break;
    }
  }
  console.log(listOfProducts);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
