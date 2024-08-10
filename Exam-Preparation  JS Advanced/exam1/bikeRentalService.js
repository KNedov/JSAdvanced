class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = [];
  }
  addBikes(bikes) {
    let addedBrands = [];
    for (let bike of bikes) {
      let [brand, quantity, price] = bike.split("-");
      quantity = Number(quantity);
      price = Number(price);
      let existingBike = this.availableBikes.find((b) => b.brand === brand);
      if (existingBike) {
        existingBike.quantity += quantity;
        existingBike.price = Math.max(existingBike.price, price);
      } else {
        this.availableBikes.push({ brand, quantity, price });
        addedBrands.push(brand);
      }
    }
    return `Successfully added ${addedBrands.join(", ")}`;
  }
  rentBikes(selectedBikes) {
    let unavailable = false;
    let totalPrice = 0;
    for (const selectedBike of selectedBikes) {
      let [brand, quantity] = selectedBike.split("-");
      quantity = Number(quantity);
      let data = this.availableBikes.find((b) => b.brand == brand);
      if (!data || data.quantity < quantity) {
        unavailable = true;
      } else {
        totalPrice += quantity * data.price;
        data.quantity -= quantity;
      }
    }
    if (unavailable) {
      return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
    } else {
      return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(
        2
      )}.`;
    }
  }
  returnBikes(returnedBikes) {
    let areReturned = true;
    for (const returnedBike of returnedBikes) {
      let [brand, quantity] = returnedBike.split("-");
      quantity = Number(quantity);
      let data = this.availableBikes.find((bike) => bike.brand == brand);
      if (!data) {
        areReturned = false;

        //
      } else {
        data.quantity += quantity;
      }
    }
    if (!areReturned) {
      return "Some of the returned bikes are not from our selection.";
    } else {
      return "Thank you for returning!";
    }
  }
  revision() {
    let message = "Available bikes:\n";
    let sorted = this.availableBikes.sort((a, b) => a.price - b.price)
    sorted.forEach((b)=>{
      message += `${b.brand} quantity:${b.quantity} price:$${b.price}\n`
    });
    message += `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
    return message;
  }
}

try {
  test1();
} catch (err) {
  console.error(err.message);
}
function test1() {
  const rentalService = new BikeRentalService("MyBikes", "CityCenter");

  console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
  console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));
  console.log(rentalService.returnBikes(["Mountain Bike-2", "City Bike-3"]));
  console.log(rentalService.revision());



// "Available bikes:\n
// City Bike quantity:8 price:$100\n
// Mountain Bike quantity:5 price:$150\n
// Electric Bike quantity:11 price:$400\n
// The name of the bike rental service is MyBikes, and the location is CityCenter."
}

//*Successfully added Mountain Bike, City Bike, Electric Bike
// Some of the bikes are unavailable or low on quantity in the bike rental
// service.
// Some of the returned bikes are not from our selection.
// Available bikes:
// City Bike quantity:8 price:$100
// Mountain Bike quantity: 4 price:$150
