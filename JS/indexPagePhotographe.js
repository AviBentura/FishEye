import {
  closeBoxSelection,
  openBoxSelection,
  triDuSelectionneur /*triTitre*/,
} from "./modal.js";

import {
  displayMediaPhotographer,
  displayBannerPage,
  displayModalInfo,
  displayPhotoParTitre,
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

    displayMediaPhotographer(mediaPhotos, nameFolder);

    let sommeTotalLikes = 0;
    mediaPhotos.forEach((media) => {
      sommeTotalLikes += media.likes;
    });

    displayModalInfo(mediaName, sommeTotalLikes);

    //triTitre(mediaPhotos);

    let triMediaParPopularité = mediaPhotos.sort((a, b) => a.likes - b.likes);

    console.log(triMediaParPopularité);

    displayPhotoParTitre(mediaPhotos, nameFolder);
  });

openBoxSelection();
closeBoxSelection();
triDuSelectionneur();
