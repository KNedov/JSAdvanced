class InventoryManager {
    items=[]
    outOfStock=[]
    constructor(capacity){
        this.capacity=capacity
    }
    addItem(itemName, quantity){

        if (quantity<=0) {
           throw new Error ('Quantity must be greater than zero.') 
        }
        
        if (this.capacity==0) throw new Error ("The inventory is already full.")
            let inventory=this.items.find(item=>item.itemName==itemName)
        if (!inventory) {
            this.items.push({itemName,quantity})
            this.capacity--
        }else{
            inventory.quantity+=quantity
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }
    sellItem(itemName, quantity){
        let item=this.items.find(i=>i.itemName===itemName)
        if (quantity<=0) throw new Error (	"Quantity must be greater than zero.")
        if (!item) throw new Error (`The item ${itemName} is not available in the inventory.`)
        if (quantity>item.quantity) throw new Error (`Not enough ${itemName}(s) in stock.`)
        item.quantity-=quantity
        if (item.quantity==0) {
            this.items=this.items.filter(q=>q.quantity!==0)
            this.outOfStock.push(itemName)
            this.capacity++
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }
    restockItem(itemName, quantity){
        let item=this.items.find(i=>i.itemName==itemName)
        if (quantity<=0) throw new Error ("Quantity must be greater than zero.")
        if(item) item.quantity+=quantity
        if (!item) this.items.push({itemName,quantity})
        let outStockItem=this.outOfStock.find(i=>i.itemName==itemName)
        if (outStockItem)this.outOfStock=outStockItem.filter(o=>o.itemName!==itemName)
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }
    getInventorySummary() {
        let summary = `Current Inventory:\n`;
        summary += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}`;
        if (this.outOfStock.length > 0) {
          summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
        }
        return summary;
      }
}
const manager = new InventoryManager(3);

console.log(manager.addItem("Hammer", 10));
console.log(manager.sellItem("Hammer", 10));
console.log(manager.restockItem("Chisel", 5)); 
console.log(manager.restockItem("Drill", 1));
// console.log(manager.addItem("Level", 5));
// console.log(manager.sellItem("Level", 5));
// console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



