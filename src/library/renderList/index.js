/* eslint-disable no-import-assign */
import { Li } from '@/layout/component';

import El from '..';
import { Button } from '@/shares/buttons';
import { svgs } from '@/asset/svgs';
import { HandleEdit } from '../HandleEdit';
import { ShowLoading } from '@/shares/Loding';

export const renderList = async function (url) {
  ShowLoading();
  const response = await fetch(url);
  const getData = await response.json();
  const localData = [...getData];
  const container = document.getElementById('liContainer');
  container.innerHTML = '';
  localData.forEach((item) => {
    container.append(
      Li({
        text1: item.name,
        priority: item.priority,
        status: item.status,
        text4: item.date,
        dateStyle: 'border border-blue-400 rounded-xl px-1',
        text5: El({
          element: 'div',
          className: 'flex flex-row gap-1',
          child: [
            Button({
              id: 'delete',
              child: [
                El({
                  element: 'span',
                  className: 'p-1',
                  innerHTML: svgs.delete,
                }),
              ],
              classes: 'bg-red-500',
              onclick: (e) => {
                console.log('eh');
                const id = e.target.closest('li').id;
                fetch(`http://localhost:3000/tasks/${id}`, {
                  method: 'DELETE',
                }).then(() => renderList('http://localhost:3000/tasks'));
              },
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
              onclick: HandleEdit,
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
  return response;
};
