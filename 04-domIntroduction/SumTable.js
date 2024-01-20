function sumTable() {

    let matrix = document.querySelectorAll('table tr');
    let total = 0;
    
    for (let i = 1; i < matrix.length - 1; i++) {
        
        let el = matrix[i].children;
        let result = el[el.length - 1].textContent;
        
        total += Number(result);
    }

    document.getElementById('sum').textContent = total;
}