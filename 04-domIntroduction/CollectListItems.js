function extractText() {

    let list = [];

    const elements = document.getElementById('items');

    for (const el of Array.from(elements.children)) {
        list.push(el.textContent);
    }
    const textArea = document.getElementById('result')
    
    let output = list.join('\n');

    textArea.value = output;
}