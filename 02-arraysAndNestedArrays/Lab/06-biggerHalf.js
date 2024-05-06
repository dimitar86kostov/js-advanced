function biggerHalf(params) {

    let sorted = params.sort((a, b) => a - b);
    let result = sorted.slice(Math.floor(sorted.length / 2), sorted.length);
    return result

}
// console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));