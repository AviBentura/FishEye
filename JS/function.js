import {
  containePost,
  containePage,
  containerButton,
  carousselMedia,
  modalInfo,
  sum,
  url,
  params,
  params2,
} from "./variables.js";

function getAllTags(photographers) {
  let tags = [];
  photographers.forEach((photographer) => {
    tags = tags.concat(photographer.tags);
  });
  let tagSet = new Set(tags);
  return Array.from(new Set(tags));
}

function displayPhotograph(photographer) {
  containePost.innerHTML += `<a href="photographePage.html?id=${
    photographer.id
  }"><div class="artist">
  <figure class="boxContainer">
  <img class="boxImage" src="./FishEye_Photos/Photos/Photographers ID Photos/${
    photographer.portrait
  }"/></figure>
  <figcaption class="colorTitle">${photographer.name}</figcaption>
  <h3>${photographer.city}, ${photographer.country}</h3>
  <p>${photographer.tagline}</p>
  <h4>${photographer.price}€/jour</h4></a>${photographer.tags
    .map(
      (tagArtist) =>
        `<button class="styleBouton tag ${tagArtist}" data-filter="${tagArtist}">${tagArtist}</button>`
    )
    .join("")}</div>`;
}

function displayNav(tags) {
  document.querySelector(".flexible").innerHTML = tags
    .map(
      (tag) =>
        `<button class="styleBouton tag ${tag}" data-filter="${tag}">#${tag}</button>`
    )
    .join("");
}

function addListenersToTags(container, photographers) {
  container.querySelectorAll(".tag").forEach((tag) => {
    tag.addEventListener("click", (event) => {
      const filterTags = event.target.dataset.filter;
      const filterPhotographers = photographers.filter((photographer) =>
        photographer.tags.includes(filterTags)
      );
      containePost.innerHTML = "";
      filterPhotographers.forEach((photographer) => {
        displayPhotograph(photographer);
      });
      addListenersToTags(containePost, photographers);
    });
  });
}

export { displayPhotograph, displayNav, getAllTags, addListenersToTags };

function photographerID() {
  fetch("JS/data.json")
    // Je demande une réponse de type JSON
    .then((res) => res.json())
    // Sur un document correspondant à data
    .then((data) => {
      // Je crée une variable qui va venir chercher dans mon document l'élement ID
      const photographerPage = data.photographers.find(
        // En demandant que l'id de l'url et du document corresponder
        (element) => element.id == params2
      );

      // Je crée une variable qui va récupérer le nom correspondant à l'id séléctionné
      const mediaName = data.photographers.find((name) => name.id == params2);

      // Ce nom est mis en minuscule et l'espace entre nom et prénom supprimé
      //Je ne récupére que le prénom et j'éxtrès la chaine de caractère du tableau
      const nameFolder = mediaName.name
        .split(" ")
        .slice(0, -1)
        .toString()
        .toLowerCase();
    });
}

// Fonction qui va écrire mon code HTML en récuperant les informations du photographe en question
function displayPage(media) {
  containePage.innerHTML += `<div class="boxPhotographers">
        <div>
          <h1 class="colorTitle">${media.name}</h1>
          <h3>${media.city}, ${media.country}</h3>
          <p>${media.tagline}</p>
          <div class="bouton">${(containerButton.innerHTML += media.tags
            .map(
              (tagArtist) =>
                `<button class="styleBouton tag ${tagArtist}" data-filter="${tagArtist}">${tagArtist}</button>`
            )
            .join(""))}</div>
        </div>
        <button class="contactButton">Contactez-moi</button>
        <figure class="boxContainer">
          <img class="boxImagePhotographers" src="./FishEye_Photos/Photos/Photographers ID Photos/${
            media.portrait
          }"/>
        </figure>
      </div>`;
}

export { displayPage, photographerID };
