    // 90/100
class FlightBookingSystem{
    flights=[]
    bookings =[]
    bookingsCount=0

    constructor(agencyName,){
        this.agencyName=agencyName
      
    }
    addFlight (flightNumber, destination, departureTime, price){
        let number=this.flights.find(number=>number.flightNumber==flightNumber)
        if (number) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }else {
            this.flights.push({flightNumber,destination,departureTime,price})
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
    }
    bookFlight (passengerName, flightNumber){
        let data=this.flights.find(number=>number.flightNumber==flightNumber)
        if (!data) {
            return `Flight ${flightNumber} is not available for booking.`
        }else {
           data.passengerName=passengerName
            this.bookings.push(
              data
            )
            this.bookingsCount++
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }
    cancelBooking (passengerName, flightNumber){
        let data=this.bookings.find(p=>p.passengerName==passengerName&&p.flightNumber==flightNumber)
        if (!data) throw new Error (`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        this.bookings=this.bookings.filter(name=>name.passengerName!==passengerName&&name.flightNumber!==flightNumber)
    this.bookingsCount--
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`  
    }
    showBookings (criteria) {
        if (this.bookings.length==0) throw new Error (`No bookings have been made yet.`)
        
        if (criteria=='all') {
            let result= [`All bookings(${this.bookingsCount}):`]
            this.bookings.forEach(element => {
                result.push(`${element.passengerName} booked for flight ${element.flightNumber}.`)
            });
            return result.join('\n')

        }else if(criteria=='cheap') {
            let dataPrice=this.bookings.find(p=>p.price<=100)
            if (!dataPrice) {
                return "No cheap bookings found."
            }else{
                let result=[]
                let cheapBookings=this.bookings.filter(f=>f.price<=100)
                cheapBookings.forEach(e => {
                    result.push(`${e.passengerName} booked for flight ${e.flightNumber}.`)
                });
                return result.join('\n')
            }
        }else if (criteria=='expensive'){
            let dataPrice=this.bookings.find(price=>price.price>100)
            if (!dataPrice) {
                return "No expensive bookings found."
            }else{
                let result=["Expensive bookings:"]
                let expensiveBookings=this.bookings.filter(p=>p.price>100)
                expensiveBookings.forEach(e => {
                    result.push(`${e.passengerName} booked for flight ${e.flightNumber}.`)
                });
                return result.join('\n')
            }

        }
            
        
    }
}
  const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.showBookings("expensive"));
  console.log(system.showBookings("all"));


