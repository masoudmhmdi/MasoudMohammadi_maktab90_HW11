import El from '@/library';

export const FormScreen = ({ child, onsubmit }) => {
  return El({
    element: 'div',
    className: 'w-full h-full p-4 ',
    child,
    onsubmit,
  });
};
