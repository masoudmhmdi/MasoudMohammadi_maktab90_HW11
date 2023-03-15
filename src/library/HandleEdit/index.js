import { Modal } from '@/layout/component';

export function HandleEdit(e) {
  const id = e.target.closest('li').id;
  const modalParent = document.querySelector('#modalParent');
  modalParent.innerHTML = '';
  modalParent.append(Modal(true, id));
  document.getElementById('modalContainer').style.display = 'block';

  // ------------------------get input--------------------------------//
  const nameInput = document.querySelector('#editNameInput');
  const prioritySelect = document.querySelector('#priorityEdit');
  const statusSelect = document.querySelector("select[name='status']");
  const dateInput = document.querySelector("input[name='date']");
  const textArea = document.querySelector("textarea[name='textarea']");

  fetch(`http://localhost:3000/tasks/${id}`).then((response) =>
    response.json().then((data) => {
      nameInput.value = data.name;
      console.log(data.priority);
      prioritySelect.value = data.priority;
      statusSelect.value = data.status;
      dateInput.value = data.date;
      textArea.value = data.textarea;
    })
  );
}
