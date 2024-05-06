window.addEventListener('load', solution);

function solution() {

  // Getting HTML elements
  const addBtn = document.getElementById("add-btn");
  const employeeInputField = document.getElementById("employee");
  const categorySelectField = document.getElementById("category");
  const urgencySelectField = document.getElementById("urgency");
  const teamSelectField = document.getElementById("team");
  const descriptionInputField = document.getElementById("description");
  const previewList = document.getElementById("preview-list");
  let pendingList = document.getElementById("pending-list");


  // Getting HTML elements values
  let employeeValue = employeeInputField.value;
  let categoryValue = categorySelectField.value;
  let urgencyValue = urgencySelectField.value;
  let teamValue = teamSelectField.value;
  let descriptionValue = descriptionInputField.value;

  addBtn.addEventListener('click', handleAddClick)

  function handleAddClick(event) {
    event.preventDefault()
    employeeValue = employeeInputField.value;
    categoryValue = categorySelectField.value;
    urgencyValue = urgencySelectField.value;
    teamValue = teamSelectField.value;
    descriptionValue = descriptionInputField.value;

    if (employeeValue.trim().length == 0) {
      
      return;
    }

    if (categoryValue.trim().length == 0) {
  
      return;
    }

    if (urgencyValue.trim().length == 0) {
    
      return;
    }

    if (teamValue.trim().length == 0) {
  
      return;
    }

    if (descriptionValue.trim().length == 0) {
     
      return;
    }

    previewList.innerHTML = `<li class="problem-content"
      <article>
        <p>From: ${employeeValue}</p>
        <p>Category: ${categoryValue}</p>
        <p>Urgency: ${urgencyValue}</p>
        <p>Assigned to: ${teamValue}</p>
        <p>Description: ${descriptionValue}</p>
      </article>
      <button id="edit-btn" class="edit-btn">Edit</button>
      <button id="continue-btn" class="continue-btn">Continue</button>
    </li>`;

    employeeInputField.value = '';
    categorySelectField.value = '';
    urgencySelectField.value = '';
    teamSelectField.value = '';
    descriptionInputField.value = '';

    const editBtn = document.getElementById("edit-btn");
    const continueBtn = document.getElementById("continue-btn");

    editBtn.addEventListener('click', handleEditBtnClick);
    continueBtn.addEventListener('click', handleContinueBtn);

    addBtn.disabled = true;
  }



  function handleEditBtnClick(event) {
    event.preventDefault()
    employeeInputField.value = employeeValue;
    categorySelectField.value = categoryValue;
    urgencySelectField.value = urgencyValue;
    teamSelectField.value = teamValue;
    descriptionInputField.value = descriptionValue;
    addBtn.disabled = false;

    const editBtn = document.getElementById("edit-btn");
    const continueBtn = document.getElementById("continue-btn");
    editBtn.hidden = true;
    continueBtn.hidden = true;
    const listItems = document.getElementsByClassName('problem-content');

    for (let i = 0; i < listItems.length; i++) {

      listItems.hidden = true;
    }

  }

  function handleContinueBtn(event) {
    event.preventDefault()

    pendingList = document.getElementById("pending-list");

    pendingList.innerHTML = `<li class="problem-content"
      <article>
        <p>From: ${employeeValue}</p>
        <p>Category: ${categoryValue}</p>
        <p>Urgency: ${urgencyValue}</p>
        <p>Assigned to: ${teamValue}</p>
        <p>Description: ${descriptionValue}</p>
      </article>
      <button id="resolve-btn" class="resolve-btn">Resolved</button>
    </li>`;

    const resolvedBtn = document.getElementById('resolve-btn');
    resolvedBtn.addEventListener('click', handleResolveBtnClick)

    previewList.innerHTML = "";
  }

  function handleResolveBtnClick(event) {

    event.preventDefault()

    const resolvedList = document.getElementById("resolved-list");

    resolvedList.innerHTML = `<li class="problem-content"
      <article>
        <p>From: ${employeeValue}</p>
        <p>Category: ${categoryValue}</p>
        <p>Urgency: ${urgencyValue}</p>
        <p>Assigned to: ${teamValue}</p>
        <p>Description: ${descriptionValue}</p>
      </article>
      <button id="clear-btn" class="clear-btn">Clear</button>
    </li>`;

    const cleardBtn = document.getElementById('clear-btn');
    cleardBtn.addEventListener('click', handleClearBtnClick)

    pendingList.innerHTML = "";    
  }

  function handleClearBtnClick(event) {
    
    event.preventDefault()
    event.target.hidden = true;

    const resolvedList = document.getElementById("resolved-list");
    resolvedList.innerHTML = '';
    addBtn.disabled = false;
  }
}
