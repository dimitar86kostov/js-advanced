function extract() {

    let content = document.getElementById('content').textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];
    let match = pattern.exec(content);

    while (match != null) {

        if (match) {
            result.push(match[1])
        }
        match = pattern.exec(content);
    }

    return result.join('; ')
}
