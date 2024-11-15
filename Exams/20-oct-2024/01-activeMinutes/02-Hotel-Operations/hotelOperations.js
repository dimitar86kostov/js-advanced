class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let result = '';

        for (const line of supplies) {
            let [name, quantity, price] = line.split(' ');

            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.initialBudget) {

                if (this.supplyStock.hasOwnProperty(name)) {
                    this.supplyStock[name] += quantity;

                } else {
                    this.supplyStock[name] = quantity;
                    this.initialBudget -= price;
                    result += `Successfully stocked ${quantity} ${name}\n`;
                }
            } else {
                return `There was not enough money to restock ${quantity} ${name}`;

            }
        }

        return result;
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        let roomSupplies = {};

        pricePerNight = Number(pricePerNight);

        for (const supply of neededSupplies) {
            let [name, quantity] = supply.split(' ');

            roomSupplies[name] = Number(quantity);
        }

        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            this.roomAvailability[roomType] = { pricePerNight: pricePerNight, neededSupplies: roomSupplies };

            return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`
        } else {
            return `The ${roomType} is already available in our hotel, try something different.`
        }
    }

    showAvailableRooms() {
        let result = '';

        let entries = Object.entries(this.roomAvailability);

        for (const [room, obj] of entries) {
            result += `${room} - $ ${obj['pricePerNight']}\n`
        }

        return result;
    }

    bookRoom(roomType) {

        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`

        } else {

            let entries = Object.entries(this.roomAvailability[roomType]['neededSupplies']);


            for (const el of entries) {
                if (this.supplyStock.hasOwnProperty(el[0])) {

                } else {
                    return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
                }
            }
            return `Your booking for ${roomType} has been confirmed! The price is ${this.roomAvailability[roomType]['pricePerNight']} per night.`
        }
    }
}

let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
