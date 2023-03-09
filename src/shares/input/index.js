import El from "@/library";

export const input = ({ variant = "header", classes, ...rest }) => {
  const variants = {
    header: "bg-transparent outline-none",
    form: "border border-purple-500",
  };
  return El({
    element: "input",
    type: "text",
    className: `${variants[variant]} ${classes}`,
    ...rest,
  });
};
