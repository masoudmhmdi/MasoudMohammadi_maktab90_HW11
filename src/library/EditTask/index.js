// import { renderList } from '../renderList';

import { renderList } from '../renderList';

export const EditTask = async function (e, id) {
  e.preventDefault();
  const nameInput = document.querySelector('#editNameInput');
  const prioritySelect = document.querySelector('#priorityEdit');
  const statusSelect = document.querySelector("select[name='status']");
  const dateInput = document.querySelector("input[name='date']");
  const textArea = document.querySelector("textarea[name='textarea']");
  const allElArr = [
    nameInput,
    prioritySelect,
    statusSelect,
    dateInput,
    textArea,
  ];
  const data = {};
  allElArr.forEach((el) => {
    if (el.value) {
      el.dataset.valid = true;
      data[el.name] = el.value;
    } else {
      el.dataset.valid = false;
    }
  });
  data.id = id;

  console.log(data);
  const isFormValid = allElArr.every((i) => i.dataset.valid === 'true');

  if (isFormValid) {
    await fetch(`http://localhost:3000/tasks/${data.id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(() => {
      renderList('http://localhost:3000/tasks');
    });
  }

  document.querySelector('#modalContainer').style.display = 'none';
};
