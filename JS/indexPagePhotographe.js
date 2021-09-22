fetch("JS/data.json")
  // Je demande une réponse de type JSON
  .then((res) => res.json())
  // Sur un document correspondant à data
  .then((data) => {
    // J'éxécute la fonction displayPage avec pour parametre le morceaux de mon document.
    displayPage;

    function factory(media) {
      if (media.image) {
        displayPhoto(photographerMedia);
      }
      if (media.video) {
        displayMedia(photographerMedia);
      }
      return undefined;
    }
    factory(media);
    /*// Je crée une boucle qui dit que pour chaque élément correspondant à l'id j'éxécute une condition
    data.media.forEach((photographerMedia) => {
      // Si l'image existe j'éxécute la fonction displayPhoto
      if (
        photographerMedia.photographerId == params2 &&
        photographerMedia.image != undefined
      ) {
        displayPhoto(photographerMedia);
        // Si l'image n'existe pas dans le tableau j'éxécute la fonction displayMedia
      } else if (
        photographerMedia.photographerId == params2 &&
        photographerMedia.image == undefined
      ) {
        displayMedia(photographerMedia);
      }
    });


    data.media.forEach((photographeLikes) => {
      if (photographeLikes.photographerId == params2) {
        displaySum(photographeLikes);
      }
    });*/

    displayModalInfo();

    // fonction displayPhoto qui va ajouté du code html au niveau de la div avec la classe caroussel
    //pour afficher la photo
    function displayPhoto(photographerMedia) {
      carousselMedia.innerHTML += `<div class="containerFlex">
          <div>
            <a href="#">
              <figure class="boxPhoto"><img
                  src="/FishEye_Photos/Photos/${nameFolder}/${photographerMedia.image}"
                  class="boxPhoto"

                />
              </figure>
            </a>
            <div class="likes">
              <figcaption>${photographerMedia.title}</figcaption>
              <div class="block">
                <span>${photographerMedia.likes}</span>
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>`;
    }

    // fonction displayPhoto qui va ajouté du code html au niveau de la div avec la classe caroussel
    //pour afficher la vidéo
    function displayMedia(photographerMedia) {
      carousselMedia.innerHTML += `<div class="containerFlex">
          <div>
            <a href="#">
              <video class="boxPhoto" controls>
                <source
                  src="./FishEye_Photos/Photos/${nameFolder}/${photographerMedia.video}" class="boxPhoto"
                  type="video/mp4" class="box-video"
                />
              </video>
            </a>
            <div class="likes">
              <figcaption>Arc-en-cie</figcaption>
              <div class="block">
                <span>12</span>
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>`;
    }

    function displayModalInfo() {
      modalInfo.innerHTML += `<div class="block info-icon">
        </div>
        <span class="info-icon">${mediaName.price}€/jour</span>`;
    }

    function displaySum(photographeLikes) {
      sum.innerHTML += `<span>${photographeLikes.likes}</span>
          <i class="fas fa-heart"></i>`;
    }
  });

import {
  displayPage,
  photographerID as fonctionPagePhotographe,
} from "./function.js";
fonctionPagePhotographe;
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
