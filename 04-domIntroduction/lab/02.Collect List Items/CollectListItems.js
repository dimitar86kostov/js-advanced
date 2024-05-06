function extractText() {

    let list = Array.from(document.querySelectorAll('li'));

    let result = [];

    for (const li of list) {
        result.push(li.textContent);
    }

    document.getElementById('result').value = result.join('\n');
}