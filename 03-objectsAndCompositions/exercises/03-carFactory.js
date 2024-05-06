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

/*
function carFactory(order) {

    let engineEnum = {

        'smallEngine': { power: 90, volume: 1800 },

        'normalEngine': { power: 120, volume: 2400 },

        'monsterEngine': { power: 200, volume: 3500 },
    };

    let result = {
        model: order.model,
        engine: null,
        carriage: null,
        wheels: null,
    }

    if (order.power <= 90) {
        result.engine = engineEnum.smallEngine;
    } else if (order.power <= 120) {
        result.engine = engineEnum.normalEngine;
    } else if (order.power <= 200) {
        result.engine = engineEnum.monsterEngine;
    }

    if (order.carriage == 'hatchback') {
        result.carriage = {type: 'hatchback', color: order.color};
    } else if (order.carriage == 'coupe') {
        result.carriage = {type: 'coupe', color: order.color};
    }

    let size = order.wheelsize % 2 == 0 ? order.wheelsize - 1 : order.wheelsize;

    result.wheels = new Array(4).fill(size);

    return result;

}

console.log(carFactory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
}));
*/