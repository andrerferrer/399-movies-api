// 1 define the functions
// 2 export the functions

const apiKey = "yourKeyHere";

const fetchDataAndUpdateDOM = (searchWord) => {
  // Calling the omdapi
  fetch(`http://www.omdbapi.com/?s=${searchWord}&apikey=${apiKey}`)
    // receiving a string as a response and parsing it into a JSON (Hash in JS)
    .then(response => response.json())
    // taking this 'json' and do THE MAGIC
    .then((json) => {
      //  Console Log Driven Development - CLDD
      // console.log(json['Search'])
      // console.log(json.Search)
      const movies = json.Search;
      results.innerHTML = "";
      movies.forEach((movie) => {
        const movieHTML = `<li class="list-inline-item">
                             <img style="width: 180px;" src="${movie.Poster}" alt="">
                           </li>`;
        results.insertAdjacentHTML("beforeend", movieHTML);
      });
    });
};

const callAPI = (event) => {
  // 3 do behavior (callback)
  // call the API with the submited searchWord

  // The default behavior of a form is to go to another page
  // We want to prevent that the page reloads
  event.preventDefault();
  const currentTarget = event.currentTarget;
  const keywordElement = currentTarget.querySelector("#keyword");
  const searchWord = keywordElement.value;
  fetchDataAndUpdateDOM(searchWord);
};

export { callAPI, fetchDataAndUpdateDOM };
