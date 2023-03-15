/* eslint-disable no-import-assign */
import { Li } from '@/layout/component';

import El from '..';
import { Button } from '@/shares/buttons';
import { svgs } from '@/asset/svgs';

export const renderList = (arr) => {
  // eslint-disable-next-line array-callback-return
  const container = document.getElementById('liContainer');
  container.innerHTML = '';
  arr.forEach((item) => {
    container.append(
      Li({
        text1: item.TaskName,
        priority: item.priority,
        status: item.status,
        text4: item.deadline,
        dateStyle: 'border border-blue-400 rounded-xl px-1',
        text5: El({
          element: 'div',
          className: 'flex flex-row gap-1',
          child: [
            Button({
              child: [
                El({
                  element: 'span',
                  className: 'p-1',
                  innerHTML: svgs.delete,
                  onclick: (e) => {
                    // const id = e.target.closest('li').id;
                    // console.log(id);
                    // const filterArr = db.filter((item) => item.id !== +id);
                    // renderList(filterArr);
                    // SetItem(filterArr);
                  },
                }),
              ],
              classes: 'bg-red-500',
            }),
            Button({
              child: [
                El({
                  element: 'span',
                  className: 'p-1',
                  innerHTML: svgs.editBtn,
                }),
              ],
              classes: 'bg-blue-500',
            }),
            Button({
              child: [
                El({
                  element: 'span',
                  className: 'p-1',
                  innerHTML: svgs.show,
                }),
              ],
              classes: 'bg-gray-300',
            }),
          ],
        }),
        classes: 'text-xs',
        id: item.id,
      })
    );
  });
};
