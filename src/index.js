const results = document.querySelector("#results");

const searchMovies = (keyword) => {
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>"${result.Title}"</p>
          <p id= "year">${result.Year}</p>
        </li>`;

        results.insertAdjacentHTML("beforeend", movie);

      });
    });
};

const searchForm = document.querySelector("#search-movies");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  results.innerHTML = "";
  const keyword = document.querySelector("#keyword").value;
  searchMovies(keyword);

  if(keyword){
    document.getElementById('togglee').style.visibility = 'visible';
  }
  else{
    document.getElementById('togglee').style.visibility = 'hidden';
  }
});

