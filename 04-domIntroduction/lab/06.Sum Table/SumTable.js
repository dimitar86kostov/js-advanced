function sumTable() {

    let el = Array.from(document.querySelectorAll('td'));

    let sum = 0;

    for (let i = 1; i < el.length - 1; i += 2) {
        let num = Number(el[i].textContent)
        sum += num;
    }

    document.getElementById('sum').textContent = sum
}