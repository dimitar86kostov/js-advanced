window.addEventListener("load", solve);

function solve() {
  const formEl = document.getElementById("form-container");

  const previewUL = document.getElementById("preview-activity");
  const activityTable = document.getElementById("activities-table");

  const addBtn = document.getElementById("add-activity");

  const typeInput = document.getElementById("type");
  const intensityInput = document.getElementById("intensity");
  const caloriesInput = document.getElementById("calories");
  const durationInput = document.getElementById("duration");
  const dateInput = document.getElementById("date");

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let type = typeInput.value;
    let intensity = intensityInput.value;
    let calories = caloriesInput.value;
    let duration = durationInput.value;
    let date = dateInput.value;

    if (type == '' || intensity == '' || calories == '' || duration == '' || date == '') {
      return
    }

    const liEl = createEl(type, intensity, calories, duration, date);

    previewUL.appendChild(liEl);

    addBtn.disabled = true;

    console.log(type);
    
    typeInput.value = "";
    intensityInput.value = "";
    caloriesInput.value = "";
    durationInput.value = "";
    dateInput.value = "";

  })

  function createEl(type, intensity, calories, duration, date) {

    let pType = document.createElement('p');
    pType.textContent = type;
    let pIntensity = document.createElement('p');
    pIntensity.textContent = intensity;
    let pCalories = document.createElement('p');
    pCalories.textContent = calories;
    let pDuration = document.createElement('p');
    pDuration.textContent = duration;
    let pDate = document.createElement('p');
    pDate.textContent = date;

    let articleEl = document.createElement('article');

    articleEl.appendChild(pType);
    articleEl.appendChild(pIntensity);
    articleEl.appendChild(pCalories);
    articleEl.appendChild(pDuration);
    articleEl.appendChild(pDate);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = "Edit"
    let nextBtn = document.createElement('button');
    nextBtn.classList.add('next-btn');
    nextBtn.textContent = "Next"

    let divButtons = document.createElement('div');
    divButtons.classList.add('btn-container')

    divButtons.appendChild(editBtn);
    divButtons.appendChild(nextBtn);

    const li = document.createElement('li');

    li.appendChild(articleEl);
    li.appendChild(divButtons);

    editBtn.addEventListener('click', () => {

      typeInput.value = type;
      intensityInput.value = intensity;
      caloriesInput.value = calories;
      durationInput.value = duration;
      dateInput.value = date;

      li.remove();

      addBtn.disabled = false;

    })

    nextBtn.addEventListener('click', () => {

      let tdType = document.createElement('td');
      tdType.classList.add('type-cell');
      tdType.textContent = type;

      let tdDuration = document.createElement('td');
      tdDuration.classList.add('duration-cell');
      tdDuration.textContent = duration;

      let tdCalories = document.createElement('td');
      tdCalories.classList.add('calories-cell');
      tdCalories.textContent = calories;

      let tdDate = document.createElement('td');
      tdDate.classList.add('date-cell');
      tdDate.textContent = date;

      let tdIntensity = document.createElement('td');
      tdIntensity.classList.add('intensity-cell');
      tdIntensity.textContent = intensity;

      let tdBtn = document.createElement('td');
      tdIntensity.classList.add('btn-cell');

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete';

      tdBtn.appendChild(deleteBtn);

      let trElement = document.createElement('tr');

      trElement.appendChild(tdType);
      trElement.appendChild(tdDuration);
      trElement.appendChild(tdCalories);
      trElement.appendChild(tdDate);
      trElement.appendChild(tdIntensity);
      trElement.appendChild(tdBtn);

      activityTable.appendChild(trElement);

      li.remove();

      addBtn.disabled = false;

      deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
      })

    })

    return li;
  }



}
