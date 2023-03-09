import El from "@/library";
import { svgs } from "@/asset/svgs";
import { Button } from "@/shares/buttons";
import { input } from "@/shares/input";

export const Header = () => {
  return El({
    element: "div",
    className: "w-full h-18 bg-[#6200EA] flex flex-row justify-between px-2",
    child: [
      El({
        element: "div",
        className: " flex gap-1 justify-center items-center",
        child: [
          El({
            element: "div",
            innerHTML: svgs.list,
            className: "h-[40px] w-[40px] text-white",
          }),
          El({
            element: "h1",
            child: "My TO-DO Tasks",
            className: "text-2xl text-white",
          }),
        ],
      }),
      El({
        element: "div",
        className: "h-full flex flex-row items-center",
        child: [
          El({
            element: "div",
            className:
              "w-64 h-7 bg-[#7926ED]  rounded mr-4 flex items-center pl-2",
            child: [
              El({
                element: "span",
                innerHTML: svgs.search,
              }),
              input({
                variant: "header",
                classes: "pl-2 text-white",
                placeholder: "search",
              }),
            ],
          }),
          Button({
            variant: "header",
            classes: "h-full",
            innerHTML: svgs.edit,
          }),
          Button({
            variant: "header",
            classes: "h-full",
            innerHTML: svgs.add,
            onclick: () => {
              console.log(document.getElementById("modalContainer"));
              document.getElementById("modalContainer").style.display = "block";
            },
          }),
        ],
      }),
    ],
  });
};
