function focused() {
    
    const inputFields = Array.from(document.querySelectorAll('[type="text"]'));

    for (const field of inputFields) {
        
        field.addEventListener('focus', onclick);
        field.addEventListener('blur', otherClick)
    }

    function onclick(event) {
        let field = event.target;
        field.parentElement.classList.add('focused')
    }
    function otherClick(event) {
        let field = event.target;
        field.parentElement.classList.remove('focused')  
    }
}