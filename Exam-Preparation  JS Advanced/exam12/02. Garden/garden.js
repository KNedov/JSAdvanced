class Garden {
  plants = [];
  storage = [];
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
  }
  addPlant(plantName, spaceRequired) {
    spaceRequired = Number(spaceRequired);
    if (this.spaceAvailable <spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }
    let plant = this.plants.find((f) => f.plantName == plantName);
    if (plant) {
      plant.spaceRequired = spaceRequired;
      this.spaceAvailable-=spaceRequired
    } else {
      let ripe = false;
      let quantity = 0;
      this.plants.push({ plantName, spaceRequired, ripe, quantity });
      this.spaceAvailable-=spaceRequired
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }
  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((f) => f.plantName == plantName);
    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else {
      if (plant.ripe == true) {
        throw new Error(`The ${plantName} is already ripe.`);
      }
      if (quantity <= 0) {
        throw new Error("The quantity cannot be zero or negative.");
      }
      plant.ripe=true
      plant.quantity=quantity
      if (plant.quantity==1) {
        return `${quantity} ${plantName} has successfully ripened.`
      }else {
        return `${quantity} ${plantName}s have successfully ripened.`
      }

    }
  }
  harvestPlant(plantName) {
    let plant=this.plants.find(f=>f.plantName==plantName)
    if (!plant) {
        throw new Error (`There is no ${plantName} in the garden.`) 
    }else {
        if (plant.ripe==false) {
            throw new Error  (`The ${plantName} cannot be harvested before it is ripe.`)
        }else {
            this.spaceAvailable+=plant.spaceRequired
            let quantity=plant.quantity
            this.storage.push({plantName,quantity})
            this.plants=this.plants.filter(f=>f.plantName!==plantName)
            return `The ${plantName} has been successfully harvested.`
            
        }
    }
  }
  generateReport(){
    let gardenResult=`The garden has ${ this.spaceAvailable } free space left.\n`
   
    

    this.plants=this.plants.sort((a,b)=>a.plantName.localeCompare(b.plantName))

     gardenResult+=`Plants in the garden: ${this.plants.map(({plantName})=>`${plantName}`).join(', ')}`
  let storageResult=`Plants in storage: ${this.storage.map(({plantName,quantity})=>`${plantName} (${quantity})`).join(', ')}`
let result=[gardenResult,storageResult]
return result.join('\n')
  }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("raspberry"));
console.log(myGarden.harvestPlant("olive"))

