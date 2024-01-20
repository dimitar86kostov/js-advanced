function roadRadar(speed, area) {

    switch (area) {

        case 'motorway':
            let limit = 130
            
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);

            } else if (20 >= speed - limit) {
                console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
            } else if (40 >= speed - limit) {
                console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
            }
            break;
        case 'city':
            let cityLimit = 50;
            
            if (speed <= cityLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);

            } else if (20 >= speed - cityLimit) {
                console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - speeding`);
            } else if (40 >= speed - cityLimit) {
                console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - reckless driving`);
            }
            break;
        case 'residential':
            let residLimit = 20;
            
            if (speed <= residLimit) {
                console.log(`Driving ${speed} km/h in a ${residLimit} zone`);

            } else if (20 >= speed - residLimit) {
                console.log(`The speed is ${speed - residLimit} km/h faster than the allowed speed of ${residLimit} - speeding`);
            } else if (40 >= speed - residLimit) {
                console.log(`The speed is ${speed - residLimit} km/h faster than the allowed speed of ${residLimit} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - residLimit} km/h faster than the allowed speed of ${residLimit} - reckless driving`);
            }
            break;
        case 'interstate':
            let interLimit = 90;
            
            if (speed <= interLimit) {
                console.log(`Driving ${speed} km/h in a ${interLimit} zone`);

            } else if (20 >= speed - interLimit) {
                console.log(`The speed is ${speed - interLimit} km/h faster than the allowed speed of ${interLimit} - speeding`);
            } else if (40 >= speed - interLimit) {
                console.log(`The speed is ${speed - interLimit} km/h faster than the allowed speed of ${interLimit} - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - interLimit} km/h faster than the allowed speed of ${interLimit} - reckless driving`);
            }
            break;

    }

}
roadRadar(40, 'residential');
roadRadar(200, 'motorway');
roadRadar(40, 'city')