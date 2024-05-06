function attachEventsListeners() {

    const buttons = document.querySelectorAll("input[type='button']");

    for (const btn of buttons) {
        btn.addEventListener('click', convertHandler);
    }

    function convertHandler(event) {

        let currentInputUnit = event.target.parentElement.children[1];
        let value = Number(currentInputUnit.value);
        let unit = currentInputUnit.id;

        switch (unit) {
            case 'days': propagate(value); break;
            case 'hours': propagate(value / 24); break;
            case 'minutes': propagate(value / 24 / 60); break;
            case 'seconds': propagate(value / 24 / 60 / 60); break;
        }
    }

    function propagate(days) {

        let input = document.querySelectorAll("input[type='text']");
        input[0].value = days;
        input[1].value = days * 24;
        input[2].value = days * 24 * 60;
        input[3].value = days * 24 * 60 * 60;
    }
}