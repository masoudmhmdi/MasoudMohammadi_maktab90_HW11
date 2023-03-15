import { Header } from './layout';
import { Modal } from './layout/component';
import { List } from './layout/ListContainer';
import El from './library';
export const App = function () {
  return El({
    element: 'div',
    className: 'w-full h-full',
    child: [
      El({
        element: 'div',
        id: 'modalParent',
        child: [Modal()],
      }),
      Header(),
      List(),
    ],
  });
};
