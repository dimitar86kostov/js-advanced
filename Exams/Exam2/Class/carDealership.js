class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model.length === 0) {
            throw new Error("Invalid input!")
        }

        if (horsepower < 0) {
            throw new Error("Invalid input!")
        }

        if (price < 0) {
            throw new Error("Invalid input!")
        }

        if (mileage < 0) {
            throw new Error("Invalid input!")
        }

        const car = new Car(model, horsepower, price, mileage);
        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        // find the model
        let foundCar = null;
        let carIndex = -1;

        for (let i = 0; i < this.availableCars.length; i++) {
            const car = this.availableCars[i];

            if (car.model === model) {
                foundCar = car;
                carIndex = i;
                break;
            }
        }

        if (foundCar == null) {
            throw new Error(`${model} was not found!`);
        }

        let differenceMileage = foundCar.mileage - desiredMileage;
        
        if (differenceMileage <= 0) {
            foundCar.price *= 0.95;
        } else {
            foundCar.price *= 0.90;
        }

        this.availableCars.splice(carIndex, 1);

        this.soldCars.push({
            model: foundCar.model,
            horsepower: foundCar.horsepower,
            soldPrice: foundCar.price
        });
        this.totalIncome += Number(foundCar.price.toFixed(2));

        return `${model} was sold for ${foundCar.price.toFixed(2)}$`

    }

    currentCar() {
        let result = 'Available cars:\n';

        for (const car of this.availableCars) {
            result += ` ---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
        }
        if (result.length == 0) {
            return 'There are no available cars'
        }
        return result;

    }

    salesReport(criteria) {

        if (criteria == 'horsepower') {

            this.soldCars.sort((carA, carB) => carB.horsepower - carA.horsepower);

        } else if (criteria == 'model') {

            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

        } else {
            throw new Error('Invalid criteria!')
        }

        let result = `-${this.name} has a total income of ${this.totalIncome}$\n- ${this.soldCars.length} cars sold:\n `

        for (const car of this.soldCars) {

            result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice}$\n`

        }
        return result
    }

}

class Car {
    constructor(model, horsepower, price, mileage) {
        this.model = model;
        this.horsepower = horsepower;
        this.price = price;
        this.mileage = mileage;
    }
}



let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));






// let newCarDealerShip = new CarDealership("test");
// newCarDealerShip.addCar("Honda", 200, 10000, 134000)
// newCarDealerShip.addCar("Toyota", 160, 12000, 14000)
// newCarDealerShip.addCar("Tesla", 300, 110000, 1000)
// newCarDealerShip.addCar("BMW", 300, 110000, 1000)
// newCarDealerShip.addCar("Lada", 300, 110000, 1000)
// newCarDealerShip.sellCar("Toyota", 125362);
// newCarDealerShip.sellCar("Lada", 736324);
// newCarDealerShip.sellCar("Honda", 73353624);
// newCarDealerShip.currentCar()
// newCarDealerShip.salesReport('model')
