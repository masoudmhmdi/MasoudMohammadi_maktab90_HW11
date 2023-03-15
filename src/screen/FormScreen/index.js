import El from '@/library';

export const FormScreen = ({ child }) => {
  return El({
    element: 'div',
    className: 'w-full h-full p-4 ',
    child,
  });
};
