// 1. import the plugin
import Sortable from 'sortablejs';

// 2. initialize the plugin in a function
const initSortable = () => {
  // do some magic here
  const list = document.querySelector('#results');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
};

// 3. export the function
export { initSortable };
