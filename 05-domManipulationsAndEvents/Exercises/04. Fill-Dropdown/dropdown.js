function addItem() {

    const textRef = document.getElementById("newItemText");
    const valueRef = document.getElementById("newItemValue");
    const selectMenu = document.getElementById('menu')
    const addBtn = document.querySelector("input[type='button']")
    
    const optionEl = document.createElement('option');
    optionEl.textContent = textRef.value;
    optionEl.value = valueRef.value;
    
    selectMenu.appendChild(optionEl);

    textRef.value = '';
    valueRef.value = '';

}