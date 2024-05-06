function deleteByEmail() {


    const input = document.querySelector('[name="email"]');

    const rows = Array.from(document.querySelectorAll('#customers tbody tr'));
    const output = document.getElementById('result');

    let succes = false;

    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            succes = true;
        }
    }

    if (succes) {
        output.textContent = 'Deleted'
    }else{
        output.textContent = 'Not Found'
    }
}