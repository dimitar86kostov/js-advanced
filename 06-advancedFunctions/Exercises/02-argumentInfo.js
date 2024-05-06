function argumentInfo(...args) {

    let result = {};

    for (const arg of args) {

        let type = typeof arg;

        console.log(`${type}: ${arg}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;

    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);



    for (const [key, value] of sorted) {

        console.log(`${key} = ${value}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })