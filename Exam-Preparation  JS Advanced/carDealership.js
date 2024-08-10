class CarDealership {
  availableCars = [];
  soldCars = [];
  totalIncome = 0;
  constructor(name) {
    this.name = name;
  }
  addCar(model, horsepower, price, mileage) {
    horsepower=Number(horsepower)
    price=Number(price)
    mileage=Number(mileage)
    if (model == ""|| price <0 || mileage <0) {
      throw new Error("Invalid input!");
    }
    if(!Number.isInteger(horsepower)||horsepower<0)throw new Error ("Invalid input!")
        this.availableCars.push({model,horsepower,price,mileage})
    return `New car added: ${model} - ${horsepower} HP - ${Number(mileage).toFixed(2)} km - ${Number(price).toFixed(2)}$`
    
    
  }
  sellCar (model, desiredMileage){
    desiredMileage=Number(desiredMileage)
    let car=this.availableCars.find(car=>car.model==model)
    if (!car) {
        throw new Error (`${model} was not found!`)
    }else {
        if(car.mileage>desiredMileage){
            let difference=car.mileage-desiredMileage
         
            if (difference<=40000) {
                 car.price*=0.95
            }if (difference>40000) {
                 car.price*=0.90
            }

        }
        let model=car.model
        let horsepower=car.horsepower
        let price=car.price
        this.availableCars=this.availableCars.filter(car=>car.model!==model)
        this.soldCars.push({model,horsepower,price: price})
        this.totalIncome+=Number(price)
        return `${model} was sold for ${price.toFixed(2)}$`
    }
        
    
  }
  currentCar () {
    if(this.availableCars.length==0)return "There are no available cars"
    let result=[`-Available cars:`]
    result.push(this.availableCars.map(({model,horsepower,price,mileage})=>`---${model} - ${horsepower} HP - ${(mileage).toFixed(2)} km - ${(price).toFixed(2)}$`).join('\n'))
    return result.join('\n')
  }
  salesReport (criteria) {
    if(!criteria=='horsepower'||!criteria=='model') throw new Error ("Invalid criteria!")
    
     if (criteria=='model') {
        this.soldCars=this.soldCars.sort((a,b)=>a.model.localeCompare(b.model))
    }else{
         this.soldCars=this.soldCars.sort((a,b)=>b.horsepower-a.horsepower)
     } 
     let result=[`-${this.name} has a total income of ${(this.totalIncome).toFixed(2)}$`,`-${this.soldCars.length} cars sold:`]
     result.push(this.soldCars.map(({model,horsepower,price})=>`---${model} - ${horsepower} HP - ${Number(price).toFixed(2)}$`).join('\n'))
    return result.join('\n')
  }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));






