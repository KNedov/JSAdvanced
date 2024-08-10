            // 91/100
class RefurbishedSmartphones{
    availableSmartphones=[]
    soldSmartphones=[]
    constructor(retailer,revenue=0){
        this.retailer=retailer
        this.revenue=revenue
    }
    addSmartphone (model, storage, price, condition) {
        let smartphone=this.availableSmartphones.find(smartphone=>smartphone.model==model)
       if (!model||!condition) {
        throw new Error ("Invalid smartphone!")
       }
       if (price<0) {
        throw new Error ("Invalid smartphone!")
       }
       storage=Number(storage)
       if (!Number.isInteger(storage)||storage<0) {
        throw new Error ("Invalid smartphone!")
       }
        if (!smartphone) {
            this.availableSmartphones.push(
                smartphone={
                    model,
                    storage,
                    price,
                    condition
                })
                return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${Number(price).toFixed(2)}$`
        }
    }
    sellSmartphone (model, desiredStorage){
      let smartphone=this.availableSmartphones.find(phone=>phone.model==model)
      
      if (!smartphone) {
        throw new Error (`${model} was not found!`)
      }else{
        let discountPrice=smartphone.price
        let diference=smartphone.storage-desiredStorage
        if (diference<0) {
            if (diference>=-128) {
            discountPrice=smartphone.price*0.90
            }
            else if (diference<-128){
                discountPrice=smartphone.price*0.80
            }
        }
        let model=smartphone.model
        let storage=smartphone.storage
        let price=discountPrice
        this.availableSmartphones.sort(phone=>phone.model!==model)
        this.soldSmartphones.push({model,storage,price})
        this.revenue+=discountPrice
        return`${model} was sold for ${Number(discountPrice).toFixed(2)}$`
      }
    }
    upgradePhones () {
        if (this.availableSmartphones.length===0) {
            throw new Error("There are no available smartphones!")
        }else {
            let result=['Upgraded Smartphones:']
            this.availableSmartphones.forEach(element => {
                
                element.storage=element.storage*2
                result.push(`${element.model} / ${element.storage} GB / ${element.condition} condition / ${Number(element.price).toFixed(2)}$
                `)
            });
            return result.join('\n')
        }
    }
    salesJournal (criteria) {
       let criterias=['storage','model']
       if (!criterias.includes(criteria)) {
        throw new Error ("Invalid criteria!")
       }
       
       let sorting={
        storage: (a,b)=>b.storage-a.storage,
        model: (a,b)=>a.model.localeCompare(b.model)
       }
       this.soldSmartphones.sort(sorting[criteria])
       let finalResult=[`${this.retailer} has a total income of ${Number(this.revenue).toFixed(2)}$`,`${this.soldSmartphones.length} smartphones sold:`]
       this.soldSmartphones.forEach(element => {
        finalResult.push(`${element.model} / ${element.storage} GB / ${Number(element.price).toFixed(2)}$`)
       });
       return finalResult.join('\n')
    }
}




try {
    test1()
} catch (err) {
    console.log(err.message);
}



function test1() {
    let retailer = new RefurbishedSmartphones('SecondLife Devices');
    retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
    retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
    retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
    console.log(retailer.upgradePhones());
    
    
    // retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
    
    // retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
    
    // retailer.sellSmartphone('Samsung S20 Ultra', 256);
    
    // retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
    
    // console.log(retailer.salesJournal('model'));
    
}
// 'Samsung S20 Ultra was sold for 1000.00$
//     Xiaomi Redmi Note 10 Pro was sold for 297.00$
//     Uncaught Error Error: Samsung Galaxy A13 was not found'