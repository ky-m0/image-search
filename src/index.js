// return image thumbnails and show in a grid
//function displayImages(response) {

//let imageLink = "https://images.ala.org.au/image/" + imageID;

//}

// API response: update search term in h3 + number of results
function showTaxa(response) {
  console.log(response);
  console.log(response.data.q);
  let imageID = response.data.images[0].imageIdentifier;
  console.log(imageID);
  let images = response.data.images;
  let imageLink = "https://images.ala.org.au/image/" + imageID;
  let imagesElement = document.querySelector("#return-images");
  let imagesHTML = `<div class="row">`;

  // update h3 with search term
  document.querySelector("h3").innerHTML =
    "You searched for " + response.data.q;

  //displayResultsNumber
  document.querySelector("h4").innerHTML =
    response.data.totalImageCount + " images found";

  // test: display the first image link : WORKS
  console.log(imageLink);
  document.querySelector("#return-images").innerHTML = imageLink;

  // test 2: display first image
  //document.querySelector("#return-images").innerHTML =
  //response.data.images[0].originalFilename;
  //src = `${response.data.images[0].imageIdentifier}`;
  //alt = "";
  //width = "40";

  //Display image grid
  //images.forEach(function (originalFilename, index) {
  //if (index < 6) {
  //images.forEach(function (image, index) {
  //const imageLink =
  //"https://images.ala.org.au/image/" + image.imageIdentifier;
  //imagesHTML += `
  //<div class="col-2 imageThumbnail">
  // <a href="${imageLink}"><img src="${imageLink}" width="200" /></a>
  //</div>
  //`;
  // });

  //imagesHTML =
  //imagesHTML +
  //`
  //<div class="col-2 imageThumbnail">
  //<a href="${imageLink}"><img src="${imageLink}" width="200" /></a>
  //</div>
  //`;
  //}
  //});

  images.forEach(function (image, index) {
    const imageLink =
      "https://images.ala.org.au/image/" + image.imageIdentifier;
    imagesHTML += `
    <div class="col-2 imageThumbnail">
      <a href="${imageLink}"><img src="${imageLink}" width="200" /></a>
    </div>
  `;
  });

  imagesHTML = imagesHTML + `</div>`;
  imagesElement.innerHTML = imagesHTML;
}

// Search form + trigger API call
function searchForTaxa(event) {
  event.preventDefault();
  let inputTaxa = document.querySelector("#searchTaxa").value;
  let apiUrl = `https://api.ala.org.au/images/ws/search?q=${inputTaxa}&fq=fileType%3Aimage&max=25`;
  axios.get(`${apiUrl}`).then(showTaxa);
}

// search form submit event listener
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchForTaxa);

//search default on load: lizard
//function searchLizard() {
//  let inputTaxa = "Lizard";
//  let apiUrl = `https://api.ala.org.au/images/ws/search?q=${inputTaxa}&fq=fileType%3Aimage&max=25`;
//  axios.get(`${apiUrl}`).then(showTaxa);
//}

//search default taxa on load
//searchLizard();
