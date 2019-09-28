<<<<<<< HEAD
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
=======
// all the code for js goes into here
      // scene
      // camera
      // renderer

      // setting up the scene:
      var scene = new THREE.Scene();
      // setting up the camera:
      // There are few different cameras in 3js. Let's use PerspectiveCamera
      // 75 is the field of view. (FOV). The value is in degrees.
      // The secons one is the aspect ratio.
      // 0.1 and 100 are the near and far clipping plane.
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 100);
      // setting up the renderer:
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // we add the renderer element to our HTML document
      document.body.appendChild(renderer.domElement);

      //Let's add the cube now:

      // To create a cube we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube.
      var geometry = new THREE.BoxGeometry(1,1,1);
      // We need a material to color it. 3js comes with several materials, but we will stick to the MeshBasicMaterial for now. All materials take an object of properties which will be applied to them.
      var material = new There.MeshBasicMaterial({color: 0x00ff00});
      // We need a Mesh. This is an object that takes a geometry, and applies a material to it, which we can then insert to our scene, and move freely arround.
      var cube = new THREE.Mesh(geometry, material);
      // By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.
      scene.add (cube);

      camera.position.z = 5;
>>>>>>> 149c8b357f0e5395986b539bd8b0a31af1d4078b
