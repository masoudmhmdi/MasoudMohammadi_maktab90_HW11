import { svgs } from '@/asset/svgs';
import El from '@/library';
import { renderList } from '@/library/renderList';
import { SelectField } from '@/shares/Select';

export const sidebar = () => {
  return El({
    element: 'div',
    id: 'sidebarContainer',
    className:
      ' h-screen bg-white p-0 transition-all z-20 fixed w-[0px] duration-1000 bottom-0 right-0',
    child: [
      El({
        element: 'header',
        className: 'w-full flex justify-between',
        child: [
          El({
            element: 'h2',
            child: 'Filter',
            className: 'font-semibold text-lg',
          }),
          El({
            element: 'span',
            className: 'cursor-pointer',
            innerHTML: svgs.blackDelete,
            onclick: () => {
              const el = document.getElementById('sidebarContainer');
              el.style.width = '0px';
              el.style.padding = '0px';
            },
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full flex flex-col mt-8 gap-1',
        child: [
          El({
            element: 'p',
            className: 'text-md',
            child: 'priority:',
          }),
          SelectField({
            child: [
              El({
                element: 'option',
                className: 'text-xs',
                child: 'All',
              }),
              El({
                element: 'option',
                child: 'Low',
              }),
              El({
                element: 'option',
                child: 'Medium',
              }),
              El({
                element: 'option',
                child: 'Hight',
              }),
            ],
            className: 'w-full border h-10 opacity-80 shadow',
            name: 'priority',
            onchange: (e) => {
              const val = e.target.value;
              if (val === 'All') renderList(`http://localhost:3000/tasks`);
              else {
                renderList(`http://localhost:3000/tasks?priority=${val}`);
              }
            },
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full flex flex-col mt-8 gap-1',
        child: [
          El({
            element: 'p',
            className: 'text-md',
            child: 'Status:',
          }),
          SelectField({
            child: [
              El({
                element: 'option',
                className: 'text-xs',
                child: 'All',
              }),
              El({
                element: 'option',
                child: 'Todo',
              }),
              El({
                element: 'option',
                child: 'Doing',
              }),
              El({
                element: 'option',
                child: 'Done',
              }),
            ],
            className: 'w-full border h-10 opacity-80 shadow',
            onchange: (e) => {
              const val = e.target.value;
              if (val === 'All') renderList(`http://localhost:3000/tasks`);
              else {
                renderList(`http://localhost:3000/tasks?status=${val}`);
              }
            },
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full flex flex-col mt-8 gap-1',
        child: [
          El({
            element: 'p',
            className: 'text-md',
            child: 'Deadline:',
          }),
          SelectField({
            child: [
              El({
                element: 'option',
                className: 'text-xs',
                child: 'All',
              }),
              El({
                element: 'option',
                child: 'Low',
              }),
              El({
                element: 'option',
                child: 'Medium',
              }),
              El({
                element: 'option',
                child: 'Hight',
              }),
            ],
            className: 'w-full border h-10 opacity-80 shadow',
            name: 'priority',
          }),
        ],
      }),
    ],
  });
};
