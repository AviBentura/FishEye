import { launchModal, closeModal /*, triTitre*/ } from "./modal.js";

export { displayPhotoParTitre };

// Création de la variable attaché à l'élement HTML qui contient le banner photographer
const containePage = document.querySelector(".containerImport");
// Création de la variable attaché à l'élement HTML qui contient les tags photographe dans le banner
const containerBouton = document.querySelector(".bouton");
// Création de la variable attaché à l'élement HTML qui contient là modal d'info du photographe séléctionné
const carousselMedia = document.querySelector(".caroussel");

const modalInfo = document.querySelector(".modal-info");

const sum = document.querySelector(".info-icon");
// Création de la variable qui va chercher dans la page l'url
let url = window.location.search;
// Je formate avec URLSearchParams les informations à récupérer
let params = new URLSearchParams(url);
// Je demande à récuperer la string id => ?id=243
let params2 = params.get("id");
// J'importe mon document qui contient les informations des photographes

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
    // J'éxécute la fonction displayPage avec pour parametre le morceaux de mon document.
    displayPage(mediaName);

    // Ce nom est mis en minuscule et l'espace entre nom et prénom supprimé
    //Je ne récupére que le prénom et j'éxtrès la chaine de caractère du tableau
    const nameFolder = mediaName.name
      .split(" ")
      .slice(0, -1)
      .toString()
      .toLowerCase();

    const mediaPhotos = data.media.filter(
      (media) => media.photographerId == params2
    );

    // Je crée une boucle qui dit que pour chaque élément correspondant à l'id j'éxécute une condition
    data.media.forEach((photographerMedia) => {
      // Si l'image existe j'éxécute la fonction displayPhoto
      if (
        photographerMedia.photographerId == params2 &&
        photographerMedia.image != undefined
      ) {
        displayPhoto(photographerMedia, nameFolder);
        // Si l'image n'existe pas dans le tableau j'éxécute la fonction displayMedia
      } else if (
        photographerMedia.photographerId == params2 &&
        photographerMedia.image == undefined
      ) {
        displayMedia(photographerMedia, nameFolder);
      }
    });

    let nombLikes = [];

    for (let i = 0; i < mediaPhotos.length; i++) {
      let nombreLikesPhoto = mediaPhotos[i].likes;

      // Mettre le nb de likes par photo dans un tableau nombLikes
      nombLikes.push(nombreLikesPhoto);
    }

    // Additioner le prix total dans la variable nombLikes avec .reduce
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    const likeTotal = nombLikes.reduce(reducer, 0);

    displayModalInfo(mediaName, likeTotal);

    //triTitre(mediaPhotos);

    displayPhotoParTitre(mediaPhotos, nameFolder);
  });

launchModal();
closeModal();

// Fonction qui va écrire mon code HTML en récuperant les informations du photographe en question
function displayPage(media) {
  containePage.innerHTML += `<div class="boxPhotographers">
        <div>
          <h1 class="colorTitle">${media.name}</h1>
          <h3>${media.city}, ${media.country}</h3>
          <p>${media.tagline}</p>
          <div class="bouton">${(containerBouton.innerHTML += media.tags
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

function displayModalInfo(pricing, likeTotal) {
  modalInfo.innerHTML += `<div class="block info-icon"><span>${likeTotal} </span><i class="fas fa-heart"></div></i><span class="info-icon">${pricing.price}€ / jour</span></div>`;
}

function displayPhoto(media, folder) {
  carousselMedia.innerHTML += `<div class="containerFlex">
          <div>
            <a href="#">
              <figure class="boxPhoto"><img
                  src="/FishEye_Photos/Photos/${folder}/${media.image}"
                  class="boxPhoto"

                />
              </figure>
            </a>
            <div class="likes">
              <figcaption>${media.title}</figcaption>
              <div class="block">
                <span>${media.likes}</span>
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>`;
}

function displayPhotoParTitre(media, folder) {
  /*carousselMedia.innerHTML += `<div class="containerFlex">
          <div>
            <a href="#">
              <figure class="boxPhoto"><img
                  src="/FishEye_Photos/Photos/${folder}/${media.image}"
                  class="boxPhoto"

                />
              </figure>
            </a>
            <div class="likes">
              <figcaption>${media.title}</figcaption>
              <div class="block">
                <span>${media.likes}</span>
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>`;*/
}

function displayMedia(photographerMedia, nameFolder) {
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
