function negativePositiveNumbers(params) {

    let arr = [];

    for (const el of params) {
        if (el < 0) {
            arr.unshift(el);
        } else {
            arr.push(el)
        }
    }
    console.log(arr.join('\n'));

}
negativePositiveNumbers([7, -2, 8, 9])