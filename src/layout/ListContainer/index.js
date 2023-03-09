import El from "@/library";
import { Li } from "../component/Li";

export const List = () => {
  return El({
    element: "ul",
    id: "listContainer",
    className: "w-full",
    child: [
      Li({
        text1: "Task Name",
        priority: "Priority",
        status: "Status",
        text4: "Deadline",
        text5: "Actions",
        classes: "font-semibold",
        id: 222,
      }),
      El({
        element: "ul",
        id: "liContainer",
      }),
    ],
  });
};
