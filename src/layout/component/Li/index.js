import El from "@/library";

export const Li = ({
  text1,
  priority,
  status,
  text4,
  text5,
  classes,
  id,
  dateStyle,
  ...rest
}) => {
  const priorityType = {
    Low: "bg-gray-100 rounded-xl  p-1",
    Medium: "bg-[#FFD007] rounded-xl  p-1",
    Hight: "bg-[#EA394A] rounded-xl text-white p-1",
  };
  const statusType = {
    Done: "bg-[#338539] rounded-xl text-white  p-1",
    Doing: "bg-[#FFD007] rounded-xl  p-1",
    Todo: "bg-[#EA394A] rounded-xl text-white p-1",
  };
  return El({
    element: "li",
    id,
    className: `w-full h-12 border border-slate-400 flex  ${classes}`,
    child: [
      El({
        element: "div",
        child: text1,
        className:
          "w-1/5 border-x h-full border-slate-400 p-1 flex items-center ",
      }),
      El({
        element: "div",
        child: [
          El({
            element: "div",
            className: priorityType[priority],
            child: priority,
          }),
        ],
        className:
          "w-1/5 border-x h-full border-slate-400 p-1 flex items-center justify-center",
      }),
      El({
        element: "div",
        child: [
          El({
            element: "div",
            className: statusType[status],
            child: status,
          }),
        ],
        className:
          "w-1/5 border-x h-full border-slate-400 p-1 flex items-center justify-center",
      }),
      El({
        element: "div",
        child: [
          El({
            element: "div",
            className: `${dateStyle}`,
            child: text4,
          }),
        ],
        className:
          "w-1/5 border-x h-full border-slate-400 p-1 flex items-center justify-center",
      }),
      El({
        element: "div",
        child: text5,
        className:
          "w-1/5 border-x h-full border-slate-400 p-1 flex items-center justify-center",
      }),
    ],
    ...rest,
  });
};
