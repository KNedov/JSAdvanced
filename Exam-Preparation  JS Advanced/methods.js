// когато искаме да извадим даден обект от масива
this.availableSmartphones=this.availableSmartphones.filter(phone=>phone.model!==model)
// когато искаме да намерим даден обект в масив
const data = this.products.find((p) => p.product == product);
// ако критерия е model или storage
let sort={
    storage: (a,b)=>b.storage-a.storage,
    model: (a,b)=>a.model.localeCompare(b.model)
}
this.soldSmartphones.sort(sort[criteria])
// сортиране по азбучен Ред
function listOfNames(array) {
  array.sort((a, b) => a.localeCompare(b))
      .forEach((element, i) => console.log(`${i + 1}.${element}`));
}
//  мап
array.map(({name,lastname})=>`this is ${Name} ${lastname}`)
//Проверка за цяло число
Number.isInteger(value)

// ако в даден импут има елемент с празен стринг return 
if (ticketData.some((x) => x === "")) {
    return
}
//  търси в дадения продуктСток и само ако има productName и size индекса ще е 0 или повече
sendProduct(productName, size) {
    let productIndex = this.productStock.findIndex(p => p.productName === productName && p.size === size);
    
    if (productIndex === -1) {
      throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
    } else {
      this.productStock.splice(productIndex, 1);
      return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }
  }