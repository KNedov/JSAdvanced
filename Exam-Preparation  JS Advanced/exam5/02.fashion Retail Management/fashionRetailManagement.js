export class FashionRetailInventory{
    productStock=[]
    constructor(storehouse,location){
        this.storehouse=storehouse
        this.location=location
    }
    addProduct (productName, size, quantity, price){
        let product=this.productStock.find(product=>product.productName==productName)
        if (product&&product.size==size) {
            product.quantity+=quantity
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        }else {
            this.productStock.push({productName,size,quantity,price})
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }
    sendProduct(productName, size) {
        let productIndex = this.productStock.findIndex(p => p.productName === productName && p.size === size);
        
        if (productIndex === -1) {
          throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
          this.productStock.splice(productIndex, 1);
          return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
      }
    findProductsBySize(size){
        let products = this.productStock.filter(p => p.size === size);
        if (products.length===0) {
            return `There are no products available in that size`
        }else{
            return products.map(p => `${p.productName}-${p.quantity} pieces`).join(', ')
        }
        
    }
    listProducts () {
        let result=[`${this.storehouse} storehouse in ${this.location} available products:`]
        if (this.productStock.length==0) {
            return `${this.storehouse} storehouse is empty`

        }else {
            this.productStock=this.productStock.sort((a='',b)=>a.productName.localeCompare(b.productName))
            this.productStock.forEach(element => {
                result.push(`${element.productName}/Size:${element.size}/Quantity:${element.quantity}/Price:${element.price}$`)
            });
            return result.join('\n')
        }
    }
}
//   const storeHouse = new FashionRetailInventory("East", "Milano");
//   console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// //   console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
//   console.log(storeHouse.sendProduct("Shirt", "L"));
// //   console.log(storeHouse.findProductsBySize("XL"));

