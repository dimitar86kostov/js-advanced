function sameNums(params) {

    let num = params.toString()

    let set = new Set();
    let sum = 0;

    for (const n of num) {

        set.add(n);
        sum += Number(n);

    }

    if (set.size == 1) {
        console.log('true');
    } else {
        console.log('false');
    }

console.log(sum);
}
sameNums(2222222);
sameNums(1234)