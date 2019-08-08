const results = document.querySelector("#results");

const searchMovies = (keyword) => {
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<div class="card-category" data-sort = "${result.Year}" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${result.Poster})">
          <p>"${result.Title}" <br/> Year: ${result.Year}</p>
        </div>`;

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




