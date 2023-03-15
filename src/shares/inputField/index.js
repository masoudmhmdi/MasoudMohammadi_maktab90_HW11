import El from '@/library';

export const inputField = ({
  variant = 'header',
  classes,
  labelText = '',
  helperElement = '',
  ...rest
}) => {
  const variants = {
    header: 'bg-transparent outline-none',
    form: 'border border-purple-500',
  };
  return El({
    element: 'div',
    child: [
      El({
        element: 'label',
        child: labelText,
      }),
      El({
        element: 'input',
        className: `${variants[variant]} ${classes}`,
        restAttrs: {
          'data-valid': false,
        },
        ...rest,
      }),
      helperElement,
    ],
  });
};
