import El from "@/library";
const variants = {
  contained: "bg-blue-600 text-white flex  items-center justify-center rounded",
  outlined:
    " border border-1 text-blue-700  border-blue-700 flex  items-center justify-center rounded",
  header: "text-white flex justify-center items-center py-2 px-2 rounded-md",
};

export const Button = ({
  element = "button",
  child,
  classes,
  variant = "contained",
  ...rest
}) => {
  return El({
    element,
    className: `${variants[variant]} ${classes} inline-block  text-sm `,
    child,
    ...rest,
  });
};
