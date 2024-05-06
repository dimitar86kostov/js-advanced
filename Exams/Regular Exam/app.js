window.addEventListener("load", solve);

function solve() {

  let snowMaNameEl = document.getElementById("snowman-name");
  let heightEl = document.getElementById("snowman-height");
  let locationEl = document.getElementById("location");
  let creatorNameEl = document.getElementById("creator-name");
  let specAtributeEl = document.getElementById("special-attribute");
  let addBtnElement = document.getElementsByClassName("add-btn")[0];
  let previewUlElement = document.getElementsByClassName("snowman-preview")[0];
  let yourSnowmanUlElement = document.getElementsByClassName("snow-list")[0];
  let mainElement = document.getElementById("hero");
  let image = document.getElementById("back-img");
  let body = document.getElementsByClassName("body")[0];



  addBtnElement.addEventListener('click', onPublish);
  function onPublish(e) {
    e.preventDefault();
    if (snowMaNameEl.value == ''
      || heightEl.value == ''
      || locationEl.value == ''
      || creatorNameEl.value == ''
      || specAtributeEl.value == '') {
      return;
    }

    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'snowman-info')

    let articleElement = document.createElement("article");


    let snowMaName = document.createElement("p");
    snowMaName.textContent = `Name: ${snowMaNameEl.value}`;

    let height = document.createElement("p");
    height.textContent = `Height: ${heightEl.value}`;

    let location = document.createElement("p");
    location.textContent = `Location: ${locationEl.value}`;

    let creatorName = document.createElement("p");
    creatorName.textContent = `Creator: ${creatorNameEl.value}$`;

    let specAtribute = document.createElement("p");
    specAtribute.textContent = `Special Atribute: ${specAtributeEl.value}`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    articleElement.appendChild(snowMaName);
    articleElement.appendChild(height);
    articleElement.appendChild(location);
    articleElement.appendChild(creatorName);
    articleElement.appendChild(specAtribute);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(nextBtn);


    previewUlElement.appendChild(liElement);

    let editsnowMaName = snowMaNameEl.value;
    let editHeight = heightEl.value;
    let editLocation = locationEl.value;
    let editCreatorName = creatorNameEl.value;
    let editSpecAtribute = specAtributeEl.value;


    snowMaNameEl.value = "";
    heightEl.value = "";
    locationEl.value = "";
    creatorNameEl.value = "";
    specAtributeEl.value = "";

    addBtnElement.disabled = true;

    nextBtn.addEventListener("click", onNext);
    function onNext() {

      let liElement = document.createElement('li');
      liElement.setAttribute('class', 'snowman-content')

      let articleElement = document.createElement("article");




      snowMaName = document.createElement("p");
      snowMaName.textContent = snowMaNameEl.value

      height = document.createElement("p");
      height.textContent = heightEl.value


      location = document.createElement("p");
      location.textContent = locationEl.value

      creatorName = document.createElement("p");
      creatorName.textContent = creatorNameEl.value

      specAtribute = document.createElement("p");
      specAtribute.textContent = specAtributeEl.value

      let sendBtn = document.createElement("button");
      sendBtn.setAttribute('class', 'edit-btn');
      sendBtn.textContent = 'Send';

      articleElement.appendChild(snowMaName);
      articleElement.appendChild(height);
      articleElement.appendChild(location);
      articleElement.appendChild(creatorName);
      articleElement.appendChild(specAtribute);

      liElement.appendChild(articleElement);
      liElement.appendChild(sendBtn);

      yourSnowmanUlElement.appendChild(liElement);

      let previewLi = document.querySelector('.snowman-info');
      previewLi.remove();
      // addBtnElement.disabled = false;

      sendBtn.addEventListener("click", onSend);

      function onSend() {

        mainElement.remove();

        let backBtn = document.createElement("button");
        backBtn.setAttribute('class', 'back-btn');
        backBtn.textContent = 'Back';

        backBtn.addEventListener("click", onBack);

        body.appendChild(backBtn)

        function onBack() {

          image.style.display = 'block';
          location.reload();
        }
      }
    }

    editBtn.addEventListener("click", onEdit);
    function onEdit() {
      snowMaNameEl.value = editsnowMaName;
      heightEl.value = editHeight;
      locationEl.value = editLocation;
      creatorNameEl.value = editCreatorName;
      specAtributeEl.value = editSpecAtribute;

      liElement.remove();

      addBtnElement.disabled = false;
    }
  }
}
