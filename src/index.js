import { callAPI, fetchDataAndUpdateDOM } from './movies';
import { initSortable } from './plugins/init_sortable';

// actually run the function
initSortable();

// find the elements
const results = document.querySelector("#results");
const form = document.querySelector("#search-movies");

// make the magic happen
form.addEventListener('submit', callAPI);

fetchDataAndUpdateDOM('Lion');
