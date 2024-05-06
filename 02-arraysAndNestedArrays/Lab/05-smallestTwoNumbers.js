function smallestTwoNumbers(params) {


let sorted = params.sort((a,b) => a - b);

console.log(sorted[0],sorted[1]);

}
smallestTwoNumbers([30, 15, 50, 5] )