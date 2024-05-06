function lockedProfile() {

    const buttons = document.querySelectorAll("button");
    const radioButtos = document.querySelector(".input[type='radio']");

    let user1isLocked = true;
    let user2isLocked = true;
    let user3isLocked = true;

    let user1isHidden = true;
    let user2isHidden = true;
    let user3isHidden = true;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            // console.log(event.target.parentElement)
            console.log(i);
            event.preventDefault();
            showMoreBtnHandler(i + 1, buttons[i], event);
        });
    }

    function showMoreBtnHandler(userNumber, btn, event) {
        console.log(event.target.parentElement.children)
        const id = "user"+ userNumber + "HiddenFields";
        const userHiddenFields = document.getElementById(id);

        switch(userNumber) {
            case 1: 
                if (user1isHidden) {
                    btn.textContent = "Hide it"
                    userHiddenFields.style.display = "block";
                    user1isHidden = false;
                } else {
                    btn.textContent = "Show more";
                    userHiddenFields.style.display = "none";
                    user1isHidden = true;
                }
                break;
            case 2: 
                if (user1isHidden) {
                    btn.textContent = "Hide it"
                    userHiddenFields.style.display = "block";
                    user1isHidden = false;
                } else {
                    btn.textContent = "Show more"
                    userHiddenFields.style.display = "none";
                    user1isHidden = true;
                }
                break;
            case 3: 
                if (user1isHidden) {
                    btn.textContent = "Hide it"
                    userHiddenFields.style.display = "block";
                    user1isHidden = false;
                } else {
                    btn.textContent = "Show more"
                    userHiddenFields.style.display = "none";
                    user1isHidden = true;
                } 
                break;
            }
            debugger
        

        // let uHiddenInfo = document.querySelectorAll("input[type='text']");
        // let type = document.querySelectorAll("input[type='radio']")
        // let button = e.target

        // for (let i = 0; i < uHiddenInfo.length; i++) {
        //     let value = type[i].value;
        //     uHiddenInfo[i].style.display = 'block'
        //     uHiddenInfo[i].textContent
        //     debugger
        //     // if (value != 'lock') {
        //     //     if (uHiddenInfo[i].style.display == '') {
        //     //         uHiddenInfo[i].style.display = 'block'
        //     //     }
        //     // }


        // }


    }
}