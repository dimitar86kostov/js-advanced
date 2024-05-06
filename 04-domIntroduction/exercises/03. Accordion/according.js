function toggle() {

    let button = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');
    let text = button.textContent;

    if (text == 'More') {

        extra.style.display = 'block';
        button.textContent = 'Less'

    } else if (text == 'Less') {

        extra.style.display = 'none';
        text = 'More'
    }
}