// API response: update search term in h3 + list of results
function showTaxa(response) {
  console.log(response);
  console.log(response.data.q);

  // update h3 with search term
  document.querySelector("h3").innerHTML =
    "You searched for " + response.data.q;

  //displayResultsNumber
  document.querySelector("h4").innerHTML =
    response.data.totalImageCount + " images found";

  //TO FIX!!!!!!  display image grid
  //document.querySelector("#imageGrid").innerHTML =
  //  response.data.images.[0].originalFilename;
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
