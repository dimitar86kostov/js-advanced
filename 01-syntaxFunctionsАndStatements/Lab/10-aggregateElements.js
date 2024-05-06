function aggregateElements(params) {



    console.log(params.reduce((acc, value) => acc + value, 0));
    let sum = 0;
    let concat = '';
    for (const el of params) {

        sum += 1 / el;
        concat += el.toString();
    }
    console.log(sum);
    console.log(concat);


}
aggregateElements([2, 4, 8, 16]);
aggregateElements([1, 2, 3])