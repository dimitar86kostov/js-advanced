function carFactory(params) {

    let car = { ...params };

    if (car.power <= 90) {
        car.engine = { power: 90, volume: 1800 };
        delete car.power;
    } else if (car.power <= 120) {
        car.engine = { power: 120, volume: 2400 };
        delete car.power;
    } else if (car.power <= 200) {
        car.engine = { power: 200, volume: 3500 };
        delete car.power;
    }

    if (car.carriage == 'hatchback') {
        car.carriage = { type: 'hatchback', color: car.color };
        delete car.color;
    } else if (car.carriage == 'coupe') {
        car.carriage = { type: 'coupe', color: car.color };
        delete car.color;
    }

    if (car.wheelsize % 2 === 0) {
        let size = car.wheelsize - 1;
        car.wheels = [size, size, size, size]
    } else {
        let size = car.wheelsize;
        car.wheels = [size, size, size, size]
    }

    return car;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)