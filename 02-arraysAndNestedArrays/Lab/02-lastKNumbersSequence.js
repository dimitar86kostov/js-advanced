function lastKNumbersSequence(n, k) {
    let result = [1];


    for (let i = 1; i < n; i++) {
        let sum = 0;

        if (i >= k) {

            let sliced = result.slice(result.length - k);
            sum = sliced.reduce((a, b) => a + b);
            result.push(sum);

            // for (let j = result.length - 1; j >= i - k; j--) {

            //     sum += result[j];
            // }
            // result.push(sum);

        } else {
            result.push(i);

        }

    }
    return result;
}
console.log(lastKNumbersSequence(8, 2));
