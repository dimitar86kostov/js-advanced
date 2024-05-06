function diagonalSums(array) {
    let firstDiag = 0;
    let secondDiag = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        for (let j = 0; j < element.length; j++) {
            let insideEl = element[j];
            if (j == i) {
                firstDiag += insideEl;
            }
            if (j == element.length - i - 1) {
                secondDiag += insideEl
            }
        }
    }
    let result = `${firstDiag} ${secondDiag}`;
    return result;
}
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])