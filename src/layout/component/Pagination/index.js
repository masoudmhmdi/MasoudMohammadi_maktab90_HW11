import { svgs } from '@/asset/svgs';
import El from '@/library';
import { renderList } from '@/library/renderList';
import { SelectField } from '@/shares/Select';

export const Pagination = () => {
  // eslint-disable-next-line no-unused-vars, prefer-const
  let limit;
  // eslint-disable-next-line no-unused-vars, prefer-const
  let page = 1;
  return El({
    element: 'div',
    className: 'w-full flex justify-end px-8 py-2 gap-1 text-xs',
    child: [
      El({
        element: 'span',
        child: 'Rows per page',
      }),
      SelectField({
        className: 'bg-white w-[30x]',
        child: [
          El({
            element: 'option',
            child: 'All',
          }),
          El({
            element: 'option',
            child: '3',
          }),
          El({
            element: 'option',
            child: '10',
          }),
          El({
            element: 'option',
            child: '25',
          }),
          El({
            element: 'option',
            child: '100',
          }),
        ],
        onchange: async function (e) {
          page = 1;
          limit = e.target.value;
          renderList(
            `http://localhost:3000/tasks?_page=${page}&_limit=${limit}`
          );
        },
      }),
      El({
        element: 'span',
        child: `${page} of ${'5'}`,
      }),
      El({
        element: 'span',
        innerHTML: svgs.prev,
        onclick: () => {
          if (page > 1) {
            page--;
            console.log(page);
            renderList(
              `http://localhost:3000/tasks?_page=${page}&_limit=${limit}`
            );
          }
        },
      }),
      El({
        element: 'span',
        innerHTML: svgs.next,
        onclick: async function () {
          page++;
          console.log(page);
          renderList(
            `http://localhost:3000/tasks?_page=${page}&_limit=${limit}`
          );
        },
      }),
    ],
  });
};
