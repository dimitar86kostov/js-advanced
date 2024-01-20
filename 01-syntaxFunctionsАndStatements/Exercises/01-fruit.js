function fruit(type, weight, price) {

    let money = price * (weight / 1000);

    console.log(`I need $${money.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${type}.`);

}
fruit('orange', 2500, 1.80)