import El from '@/library';

export const SelectField = ({ child, ...rest }) => {
  return El({
    element: 'select',
    child,
    restAttrs: {
      'data-valid': false,
    },
    ...rest,
  });
};
