import El from '@/library';
import { renderList } from '@/library/renderList';
import { ShowLoading } from '@/shares/Loding';
import { Li } from '../component/Li';
import { Pagination } from '../component/Pagination';

export const List = () => {
  return El({
    element: 'ul',
    id: 'listContainer',
    className: 'w-full',
    child: [
      Li({
        text1: 'Task Name',
        priority: 'Priority',
        status: 'Status',
        text4: 'Deadline',
        text5: 'Actions',
        classes: 'font-semibold',
        id: 222,
      }),
      El({
        element: 'ul',
        id: 'liContainer',
        child: [ShowLoading(), renderList('http://localhost:3000/tasks')],
      }),
      Pagination(),
    ],
  });
};
