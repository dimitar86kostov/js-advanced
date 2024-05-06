function circleArea(params) {

    let type;

    if (typeof params === 'number') {

        let result = Math.pow(params, 2) * Math.PI;
        console.log(result.toFixed(2));

    } else {
        type = typeof params;
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }

}
circleArea(5);
circleArea('name')