import El from "@/library";
import { Button } from "@/shares/buttons";
import { input } from "@/shares/input";
import { addData } from "@/library/AddData";
import { renderList } from "@/library/renderList";
import { db } from "@/db";
import { SetItem } from "@/library/setItemtoLocalStorage";

export const Modal = () => {
  return El({
    element: "div",
    id: "modalContainer",
    onclick: (e) => {
      if (e.target.id === "modalContainer") {
        e.target.style.display = "none";
        // e.target.querySelector("form");
        // e.target.querySelector("form").style.opacity = "1";
      }
    },
    className:
      "hidden w-screen h-screen bg-slate-900 transition bg-opacity-20 flex items-end  backdrop-blur-sm  fixed w-full bottom-0 right-0",
    child: [
      El({
        element: "div",
        id: "form",
        className:
          "w-[600px]  bg-white rounded shadow-xl absolute   top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20",
        child: [
          El({
            element: "header",
            className: "w-full h-12 text-xl border-b p-2 border-gray-500",
            child: "New Task",
          }),
          El({
            element: "form",
            onsubmit: (e) => {
              e.preventDefault();
              addData();
              renderList(db);
              SetItem(db);
            },
            className: "w-full  h-[380px] p-4",
            child: [
              El({
                element: "div",
                className: "w-full h-8   border-xs shadow mt-4 relative",
                child: [
                  input({
                    variant: "header",
                    id: "nameInput",
                    classes:
                      "w-full h-full p-1 focus:outline-purple-500 rounded-[1px]",
                    onfocus: (e) => {
                      e.target.nextElementSibling.style.opacity = "1";
                      e.target.nextElementSibling.style.bottom = "28px";
                      e.target.nextElementSibling.style.left = "5px";
                    },
                    onblur: (e) => {
                      e.target.nextElementSibling.style.opacity = "0";
                      e.target.nextElementSibling.style.bottom = "0";
                      e.target.nextElementSibling.style.left = "30px";
                    },
                  }),
                  El({
                    element: "div",
                    className:
                      " bg-white px-2 text-xs text-purple-500 absolute bottom-0 left-40 transition transition-all opacity-0 duration-1000",
                    child: "Task Name",
                  }),
                  El({
                    element: "div",
                    className: "w-full h-8 flex flex-row gap-2 mt-12",
                    child: [
                      El({
                        element: "select",
                        id: "priority",
                        className: "w-1/3 border text-xs opacity-80 shadow",
                        child: [
                          El({
                            element: "option",
                            className: "text-xs",
                            child: "Priority",
                          }),
                          El({
                            element: "option",
                            child: "Low",
                          }),
                          El({
                            element: "option",
                            child: "Medium",
                          }),
                          El({
                            element: "option",
                            child: "Hight",
                          }),
                        ],
                      }),
                      El({
                        element: "select",
                        className: "w-1/3 border text-xs opacity-80 shadow",
                        id: "status",
                        child: [
                          El({
                            element: "option",
                            className: "text-xs",
                            child: "Status",
                          }),
                          El({
                            element: "option",
                            child: "Todo",
                          }),
                          El({
                            element: "option",
                            child: "Doing",
                          }),
                          El({
                            element: "option",
                            child: "Done",
                          }),
                        ],
                      }),
                      El({
                        element: "input",
                        className: "w-1/3 border text-xs opacity-80 shadow",
                        type: "date",
                        id: "deadline",
                      }),
                    ],
                  }),
                  El({
                    element: "textarea",
                    className: "w-full h-36 text-xs p-4 mt-8",
                    id: "detail",
                    placeholder: "Details (optional)",
                  }),
                  El({
                    element: "div",
                    className: "w-full  flex items-center justify-between p-4",
                    child: [
                      Button({
                        variant: "outlined",
                        child: "cancel",
                        type: "button",
                        classes: "w-14 pb-1",
                        onclick: () => {
                          document.getElementById(
                            "modalContainer"
                          ).style.display = "none";
                        },
                      }),
                      Button({
                        variant: "contained",
                        child: "save",
                        type: "submit",
                        classes: "w-14 pb-1",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
