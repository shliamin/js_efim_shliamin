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
}:

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
  if(keyword){
    document.getElementById('togglee1').style.visibility = 'visible';
  }
  else{
    document.getElementById('togglee1').style.visibility = 'hidden';
  }
});

document.querySelector('button#togglee').onclick = function () {
    sortList('data-sort');
}
document.querySelector('button#togglee1').onclick = function () {
    sortListDesc('data-sort');
}

function sortList(sortType) {
    let items = document.querySelector('.cards');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.cards');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
