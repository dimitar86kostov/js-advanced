window.addEventListener('load', solve);

function solve() {

    const formEl = document.querySelector("#form form");

    const checkUL = document.getElementById("check-list");
    const validateUL = document.getElementById("validate-list");
    const discountUL = document.getElementById("discount-list");

    const addBtn = document.getElementById("add-btn");
    const clearBtn = document.getElementById("clear");


    const discountInput = document.getElementById("discount");
    const dateInput = document.getElementById("date");
    const storeInput = document.getElementById("store");
    const productInput = document.getElementById("product");
    const codeInput = document.getElementById("code");

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let discount = discountInput.value;
        let date = dateInput.value;
        let store = storeInput.value;
        let product = productInput.value;
        let code = codeInput.value;

        if (discount == '' || date == '' || store == '' || product == '' || code == '') {
            return;
        }

        const liElement = createEl(discount, date, store, product, code);

        checkUL.appendChild(liElement);

        formEl.reset();
        addBtn.disabled = true;

    });

    function createEl(discount, date, store, product, code) {

        const pDateEl = document.createElement('p');
        pDateEl.textContent = `Expire: ${date}`

        const pStoreEl = document.createElement('p');
        pStoreEl.textContent = `Store: ${store}`

        const pProductEl = document.createElement('p');
        pProductEl.textContent = `Product: ${product}`

        const pCodeEl = document.createElement('p');
        pCodeEl.textContent = `Code: ${code}`;

        const pDiscountEl = document.createElement('p');
        pDiscountEl.textContent = `Discount: ${discount}`;

        const article = document.createElement('article');

        article.appendChild(pDateEl);
        article.appendChild(pStoreEl);
        article.appendChild(pProductEl);
        article.appendChild(pCodeEl);
        article.appendChild(pDiscountEl);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';

        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';

        const li = document.createElement('li');
        li.classList.add('discount-content');

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        editButton.addEventListener('click', () => {

            discountInput.value = discount;
            dateInput.value = date;
            storeInput.value = store;
            productInput.value = product;
            codeInput.value = code;

            li.remove();

            addBtn.disabled = false;
        });

        continueButton.addEventListener('click', () => {

            li.remove();

            validateUL.appendChild(li);
            editButton.remove();
            continueButton.remove();

            const validateBtn = document.createElement('button');
            validateBtn.classList.add('validate-btn');
            validateBtn.textContent = 'Validate';

            validateUL.appendChild(validateBtn);

            validateBtn.addEventListener('click', () => {

                li.remove();
                validateBtn.remove();

                discountUL.appendChild(li);

                addBtn.disabled = false;
                
                clearBtn.addEventListener('click', () => {
                    li.remove();
                });
            });

        });
        return li;
    }
}




