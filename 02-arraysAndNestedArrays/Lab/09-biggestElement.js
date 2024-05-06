function biggestEl(array) {
    let compare = [];

    for (let i = 0; i < array.length; i++) {
        let arr = array[i];
        arr.sort((a, b) => b - a);
        compare.push(arr[0]);
    }
    compare.sort((a, b) => b - a);
    return compare[0]
}
biggestEl([[20, 50, 10],
[8, 33, 145]])