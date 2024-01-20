function colorize() {
    let matrix = Array.from(document.querySelectorAll('tr'));

    for (let i = 1; i < matrix.length; i += 2) {

        let row = matrix[i];
        row.style.background = 'Teal';
    }

}