import { closeBoxSelection, openBoxSelection } from "./modal.js";

import {
  displayBannerPage,
  displayModalInfo,
  triPopularite,
  triDate,
  triTitre,
  lightBoxElements,
} from "./function.js";

function getId() {
  let url = window.location.search;
  let photographer = new URLSearchParams(url);
  return photographer.get("id");
}

fetch("JS/data.json")
  // Je demande une réponse de type JSON
  .then((res) => res.json())
  // Sur un document correspondant à data
  .then((data) => {
    // Je crée une variable qui va récupérer le nom correspondant à l'id séléctionné
    const mediaName = data.photographers.find((name) => name.id == getId());
    // J'éxécute la fonction displayPage avec pour parametre le morceaux de mon document.
    displayBannerPage(mediaName);

    // Ce nom est mis en minuscule et l'espace entre nom et prénom supprimé
    //Je ne récupére que le prénom et j'éxtrès la chaine de caractère du tableau
    const nameFolder = mediaName.name
      .split(" ")
      .slice(0, -1)
      .toString()
      .toLowerCase();

    const mediaPhotos = data.media.filter(
      (media) => media.photographerId == getId()
    );

    triPopularite(mediaPhotos, nameFolder);

    let sommeTotalLikes = 0;
    mediaPhotos.forEach((media) => {
      sommeTotalLikes += media.likes;
    });

    displayModalInfo(mediaName, sommeTotalLikes);

    lightBoxElements(mediaPhotos, nameFolder);

    const populaire = document.querySelector(".populaire");
    populaire.addEventListener("click", () => {
      triPopularite(mediaPhotos, nameFolder);
      lightBoxElements(mediaPhotos, nameFolder);
    });

    const titre = document.querySelector(".titre");
    titre.addEventListener("click", () => {
      triTitre(mediaPhotos, nameFolder);
      lightBoxElements(mediaPhotos, nameFolder);
    });

    const date = document.querySelector(".date");
    date.addEventListener("click", () => {
      triDate(mediaPhotos, nameFolder);
      lightBoxElements(mediaPhotos, nameFolder);
    });
  });

openBoxSelection();
closeBoxSelection();
