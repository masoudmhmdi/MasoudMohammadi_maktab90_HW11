import El from '..';
import { handleSubmitForm } from './handleSubmitForm';

export const Form = ({ child, handleSubmit, handleErrors, ...rest }) => {
  return El({
    element: 'form',
    child,
    onsubmit: (e) => handleSubmitForm({ e, handleSubmit, handleErrors }),
    ...rest,
  });
};
