import { displayPhotoParTitre } from "./indexPagePhotographe.js";

// Variable attaché à la fleche du menu deroulant "popularité"
const modalOpen = document.querySelectorAll(".btn-fleche-close");

// Lancement de l'évenement de la modal au click sur la fleche
modalOpen.forEach((btn) => btn.addEventListener("click", launchModal));

// Variable rataché au block navigation
const modal = document.querySelector(".modal");

// Variable rataché au block navigation
const modalClose = document.querySelector(".modal-close");

// Variable rataché a la bordure de 'date' dans l'element navigation
const border = document.querySelector(".border");

// Lancement de la fonction qui va effectuer l'action sur la modal
function launchModal() {
  modal.style.display = "flex";
  modalClose.style.display = "none";
}

// Variable attaché à la fleche du menu deroulant "popularité, date, titre"
const toClose = document.querySelectorAll(".btn-fleche");

// Lancement fermeture de l'évenement sur la modal au click par la fleche
toClose.forEach((btn) => btn.addEventListener("click", closeModal));

// Fonction closeModal qui va modifier des elements de styles sur le block modal et modal-close
function closeModal() {
  modal.style.animationName = "scale-down-ver-down";
  modalClose.style.display = "block";
  modalClose.style.zIndex = "1";
  // Utilisation d'un timer pour créer de la fluidité sur la disparition de la bordure de l'élement 'date'
  setTimeout(function () {
    border.style.animationDirection = "reverse";
  }, 350);
  // Réinitialisation des parametres d'origine à la fin de l'animation de retour
  setTimeout(function () {
    modal.style.display = "none";
    modal.style.animationName = "scale-down-ver-top";
    border.style.animationDirection = "normal";
  }, 820);
}

export { launchModal, closeModal, triTitre };

const populaire = document.querySelector(".populaire");

const date = document.querySelector(".date");

const titre = document.querySelector(".titre");

const containerMedia = document.querySelector(".containerFlex");
const carousselMedia = document.querySelector(".caroussel");

populaire.addEventListener("click", function triPopulaire() {
  carousselMedia.remove(containerMedia);
});

date.addEventListener("click", function triDate() {
  modal.style.display = "block";
});

titre.addEventListener("click", triTitre);

function triTitre(photoTitre) {
  carousselMedia.remove(containerMedia);
  let triTitreTableau = [];
  for (let e = 0; e < photoTitre.length; e++) {
    let triPhotoTitre = photoTitre[e].image;
    let triVideoTitre = photoTitre[e].video;

    triTitreTableau.push(triPhotoTitre, triVideoTitre);

    const triElementDifferentUndefined = triTitreTableau.filter(
      (el) => el != undefined
    );

    triElementDifferentUndefined.sort();

    displayPhotoParTitre;
  }
}
