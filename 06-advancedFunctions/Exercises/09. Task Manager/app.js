function solve() {

    let formRef = document.querySelector('form');
    let [addTask, openTask, inProgress, complete] = document.querySelectorAll('section');

    let btnHandlerEnum = {
        start: function (e) {
            let currArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            currArticle.innerHTML += getBtnPartial({ classes: 'red', text: 'Delete' }, { classes: 'orange', text: 'Finish' })
            let btns = document.querySelectorAll('button');
            addEventListenerToButton(btns);
            inProgress.children[1].appendChild(currArticle);
        },
        finish: function (e) {
            let currArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            complete.children[1].appendChild(currArticle);
        },
        delete: function (e) { 
            e.target.parentElement.parentElement.remove();
        }
    }



    formRef.addEventListener('submit', onSubmitHandler);

    function onSubmitHandler(event) {
        event.preventDefault();

        let formElements = event.target.elements;
        let task = formElements[0].value;
        let desc = formElements[1].value;
        let date = formElements[2].value;

        if (!task || !desc || !date) {
            return;
        }

        createArticle(task, desc, date)
        clearForm(formElements);
    }

    function clearForm(formElements) {
        formElements[0].value = '';
        formElements[1].value = '';
        formElements[2].value = '';
    }

    function createArticle(task, desc, date) {
        let newArticle = document.createElement('article');
        newArticle.innerHTML = getArticleTemp(task, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = document.querySelectorAll('button');
        addEventListenerToButton(btns);
    }

    function clickHandler(e) {
        let currAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currAction](e);
    }

    function addEventListenerToButton(btns) {

        Array.from(btns).forEach(btn => btn.addEventListener('click', clickHandler));
    }

    function getArticleTemp(task, desc, date) {

        return `<h3>${task}</h3>` +
            ` <p>Description: ${desc}</p>` +
            `<p>Due Date: ${date}</p>` +
            getBtnPartial({ classes: 'green', text: 'Start' }, { classes: 'red', text: 'Delete' });

    }

    function getBtnPartial(b1, b2) {

        return `<div class="flex">` +
            `<button class=${b1.classes}>${b1.text}</button>` +
            `<button class=${b2.classes}>${b2.text}</button>` +
            `</div>`
    }

    function removeBtn(target) {
        target.remove();
    }
}