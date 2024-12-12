class ParkingLot {

    constructor(totalSpaces, hourlyRate) {
        this.totalSpaces = totalSpaces;
        this.initialSpaces = totalSpaces;
        this.hourlyRate = hourlyRate;
        this.availableSpaces = totalSpaces;
        this.parkedVehicles = [];
        this.revenue = 0;
    }

    parkVehicle(licensePlate) {

        if (!this.totalSpaces) {
            return "The parking lot is full. No available spaces.";
        }

        if (this.parkedVehicles.includes(licensePlate)) {
            return `Vehicle with license plate ${licensePlate} is already parked.`
        }

        this.availableSpaces--;
        this.parkedVehicles.push(licensePlate);
        return `Vehicle with license plate ${licensePlate} parked successfully.`

    };

    unparkVehicle(licensePlate, hoursParked) {

        if (!this.parkedVehicles.includes(licensePlate)) {
            return `No vehicle found with license plate ${licensePlate}.`
        }

        let currCar = this.parkedVehicles.find((car) => car === licensePlate);

        if (currCar) {
            let result = hoursParked * this.hourlyRate;

            this.revenue += result;
            this.availableSpaces++;
            let index = this.parkedVehicles.indexOf(currCar);
            this.parkedVehicles.splice(index, index + 1);
            return `Vehicle with license plate ${licensePlate} has been unparked. Parking fee: $${result}. Duration: ${hoursParked} hours.`
        }
    }

    showAvailableSpaces() {
        return `Available parking spaces: ${this.availableSpaces} out of ${this.initialSpaces}.`
    }

    listParkedVehicles() {

        if (this.parkedVehicles.length != 0) {

            const arr = [];
            arr.push('Currently parked vehicles:');

            this.parkedVehicles.forEach((car) => {
                arr.push(`A vehicle with registration number ${car} is in the parking lot.`);
            });

            return arr.join('\n');
        }

        return "No vehicles currently parked."
    }

    getTotalRevenue() {

        return `Total revenue earned from parking fees: $${this.revenue.toFixed(2)}`

    }
}

// const parkingLot = new ParkingLot(3, 5);  
// console.log(parkingLot.parkVehicle("ABC123"));
// console.log(parkingLot.parkVehicle("ABC123"));
// console.log(parkingLot.parkVehicle("XYZ789"));
// console.log(parkingLot.parkVehicle("XYZ789"));

// const parkingLot = new ParkingLot(3, 5);
// console.log(parkingLot.parkVehicle("ABC123"));
// console.log(parkingLot.parkVehicle("XYZ789"));
// console.log(parkingLot.unparkVehicle("ABC123", 4));
// console.log(parkingLot.unparkVehicle("BBC123", 14));


// const parkingLot = new ParkingLot(3, 5);
// console.log(parkingLot.parkVehicle("ABC123"));
// console.log(parkingLot.parkVehicle("XYZ789"));
// console.log(parkingLot.showAvailableSpaces());
// console.log(parkingLot.listParkedVehicles());

// const parkingLot = new ParkingLot(3, 5);  
// console.log(parkingLot.parkVehicle("ABC123"));
// console.log(parkingLot.parkVehicle("XYZ789"));
// console.log(parkingLot.unparkVehicle("ABC123", 4));
// console.log(parkingLot.unparkVehicle("XYZ789", 24));
// console.log(parkingLot.showAvailableSpaces())
// console.log(parkingLot.getTotalRevenue());

//Testing All
// const ParkingLot = result;
// let parking = new ParkingLot(3, 5);

// assert.equal(parking.parkVehicle("XYZ789")
//     , "Vehicle with license plate XYZ789 parked successfully.");
// assert.equal(parking.unparkVehicle("XYZ789", 24)
//     , "Vehicle with license plate XYZ789 has been unparked. Parking fee: $120. Duration: 24 hours.");
// assert.equal(parking.getTotalRevenue(), "Total revenue earned from parking fees: $120.00");
// assert.equal(parking.showAvailableSpaces(), "Available parking spaces: 3 out of 3.");
// assert.equal(parking.listParkedVehicles(), "No vehicles currently parked.");

const parkingLot = new ParkingLot(3, 5);  
console.log(parkingLot.parkVehicle("XYZ789"));
console.log(parkingLot.unparkVehicle("XYZ789", 24));
console.log(parkingLot.getTotalRevenue());
console.log(parkingLot.showAvailableSpaces());
console.log(parkingLot.listParkedVehicles());

