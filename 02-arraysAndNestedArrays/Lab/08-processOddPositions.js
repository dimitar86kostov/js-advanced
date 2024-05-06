function processOddPositions(params) {
    let result = [];

    // for (let i = 0; i < params.length; i++) {
    //     let element = params[i];
    //     if (i % 2 !== 0) {
    //         element *= 2;
    //         result.push(element);
    //     }
    // }
    // return result.reverse();

    let finalResult = params.filter((x, i) => i % 2 !== 0)
        .map((x => x * 2))
        .reverse()
        .join(' ');

        return finalResult
}
console.log(processOddPositions([10, 15, 20, 25]));