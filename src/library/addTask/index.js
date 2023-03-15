import { renderList } from '../renderList';

export const AddTask = async function (data) {
  await fetch('http://localhost:3000/tasks', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  renderList();
};
