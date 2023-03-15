export const handleSubmitForm = ({ e, handleSubmit, handleErrors }) => {
  e.preventDefault();
  const formInputs = e.target.querySelectorAll('input');
  const selectInput = e.target.querySelectorAll('select');
  const textArea = e.target.querySelectorAll('textarea');
  const allElArr = [...formInputs, ...selectInput, ...textArea];
  const data = {};
  allElArr.forEach((el) => {
    if (el.value) {
      el.dataset.valid = true;
      data[el.name] = el.value;
    } else {
      el.dataset.valid = false;
    }
  });
  data.id = Date.now();

  const isFormValid = allElArr.every((i) => i.dataset.valid === 'true');
  if (isFormValid) {
    handleSubmit(data);
  } else {
    handleErrors();
  }
};
