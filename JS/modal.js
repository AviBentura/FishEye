import {} from "./function.js";

function openBoxSelection() {
  const selectionneurOpen = document.querySelectorAll(".btn-fleche-close");
  selectionneurOpen.forEach((btn) =>
    btn.addEventListener("click", launchSelectionneur)
  );
}

function closeBoxSelection() {
  const toClose = document.querySelectorAll(".btn-fleche");
  toClose.forEach((btn) => btn.addEventListener("click", closeSelectionneur));
}

// Lancement de la fonction qui va effectuer l'action sur la modal
function launchSelectionneur() {
  const selectionneur = document.querySelector(".modal");
  const selectionneurClose = document.querySelector(".modal-close");
  selectionneur.style.display = "flex";
  selectionneurClose.style.display = "none";
}

// Fonction closeModal qui va modifier des elements de styles sur le block modal et modal-close
function closeSelectionneur() {
  const selectionneur = document.querySelector(".modal");
  const selectionneurClose = document.querySelector(".modal-close");
  const border = document.querySelector(".border");
  selectionneur.style.animationName = "scale-down-ver-down";
  selectionneurClose.style.display = "block";
  selectionneurClose.style.zIndex = "1";
  // Utilisation d'un timer pour créer de la fluidité sur la disparition de la bordure de l'élement 'date'
  setTimeout(function () {
    border.style.animationDirection = "reverse";
  }, 350);
  // Réinitialisation des parametres d'origine à la fin de l'animation de retour
  setTimeout(function () {
    selectionneur.style.display = "none";
    selectionneur.style.animationName = "scale-down-ver-top";
    border.style.animationDirection = "normal";
  }, 820);
}

function triDuSelectionneur() {
  const populaire = document.querySelector(".populaire");
  populaire.addEventListener("click", triParPopularité);

  const date = document.querySelector(".date");
  date.addEventListener("click", fonction);

  const titre = document.querySelector(".titre");
  titre.addEventListener("click", fonction);
}

function fonction() {
  console.log("tri");
}

function triParPopularité(media) {
  const carousselMedia = document.querySelector(".caroussel");
  const containerMedia = document.querySelector(".containerFlex");
  carousselMedia.remove(containerMedia);
}

export { openBoxSelection, closeBoxSelection, triDuSelectionneur /*triTitre*/ };

/*const populaire = document.querySelector(".populaire");

const date = document.querySelector(".date");

const titre = document.querySelector(".titre");

const containerMedia = document.querySelector(".containerFlex");
const carousselMedia = document.querySelector(".caroussel");

populaire.addEventListener("click", function triPopulaire() {
  carousselMedia.remove(containerMedia);
});

date.addEventListener("click", function triDate() {
  selectionneur.style.display = "block";
});

titre.addEventListener("click", triTitre);

function triTitre(photoTitre) {
  carousselMedia.remove(containerMedia);
  let triTitreTableau = [];
  for (let e = 0; e < photoTitre.length; e++) {
    let triPhotoTitre = photoTitre[e].image;
    let triVideoTitre = photoTitre[e].video;

    //triTitreTableau.push(triPhotoTitre, triVideoTitre);

    const triElementDifferentUndefined = triTitreTableau.filter(
      (el) => el != undefined
    );

    triElementDifferentUndefined.sort();

    displayPhotoParTitre;
  }
}*/
