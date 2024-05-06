function addItem() {
    
    let text = document.getElementById('newItemText').value;

    if (text.length == 0) {
        return;
    }
    let li = document.createElement('li');
    li.textContent = text;
    
    let deletebtn = document.createElement('a');
    deletebtn.textContent = '[Delete]';
    deletebtn.href = '#';
    deletebtn.addEventListener('click', onclick);
    li.appendChild(deletebtn);
    

    
    let items = document.getElementById('items');
    items.appendChild(li);

    document.getElementById('newItemText').value = '';

    function onclick(event) {
        let liElement = event.target
        liElement.parentElement.remove();
    }

}