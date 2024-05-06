function sumFirstLast(params) {

    let first = params.shift();
    let last = params.pop();

    let sum = Number(first) + Number(last);

    console.log(sum);

}
sumFirstLast(['20', '30', '40'])