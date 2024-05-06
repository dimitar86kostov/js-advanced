function sortArray(arr, action) {

    if (action == 'asc') {
       arr.sort((a, b) => a - b);

    } else if (action == 'desc') {
        arr.sort((a, b) => b - a);
    }

    return arr;
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));