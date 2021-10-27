import { removeCaroussel } from "./modal.js";

import Image from "./image.class.js";
import Video from "./video.class.js";

function getAllTags(photographers) {
  let tags = [];
  photographers.forEach((photographer) => {
    tags = tags.concat(photographer.tags);
  });
  let tagSet = new Set(tags);
  return Array.from(new Set(tags));
}

function displayPhotograph(photographer) {
  const containePost = document.querySelector(".content");
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
      const containePost = document.querySelector(".content");
      containePost.innerHTML = "";
      filterPhotographers.forEach((photographer) => {
        displayPhotograph(photographer);
      });
      addListenersToTags(containePost, photographers);
    });
  });
}

// fonction de la page indexPagePhotographe.js

function displayMediaPhotographer(medias, folder) {
  medias.forEach((elt) => {
    displayMedia(elt, folder);
  });
}

function displayMedia(elt, folder) {
  const carousselMedia = document.querySelector(".caroussel");
  const media = factory(elt, folder);
  carousselMedia.innerHTML += media.displayInlist();
}

// Fonction qui va écrire mon code HTML en récuperant les informations du photographe en question
function displayBannerPage(media) {
  const containePage = document.querySelector(".containerImport");
  const containerBouton = document.querySelector(".bouton");
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
  const modalInfo = document.querySelector(".modal-info");
  modalInfo.innerHTML += `<div class="block info-icon"><span>${likeTotal} </span><i class="fas fa-heart"></div></i><span class="info-icon">${pricing.price}€ / jour</span></div>`;
}

function triPopularite(media, folder) {
  const triMediaParPopularité = [...media];
  triMediaParPopularité.sort((a, b) => b.likes - a.likes);
  removeCaroussel();
  triMediaParPopularité.forEach((medias) => {
    displayMedia(medias, folder);
  });
}

function triTitre(media, folder) {
  const mediaParTitre = [...media];
  mediaParTitre.sort((a, b) => (a.title > b.title ? 1 : -1));
  removeCaroussel();
  mediaParTitre.forEach((medias) => {
    displayMedia(medias, folder);
  });
}

function triDate(media, folder) {
  const triMediaParDate = [...media];
  triMediaParDate.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : 1;
  });
  removeCaroussel();
  triMediaParDate.forEach((medias) => {
    displayMedia(medias, folder);
  });
}

function factory(media, folder) {
  if (media.image) {
    return new Image(media, folder);
  } else if (media.video) {
    return new Video(media, folder);
  }
  return undefined;
}

function lightBoxElements(medias, folder) {
  const clickMedia = document.querySelectorAll(".click-button");
  clickMedia.forEach((elt) => {
    elt.addEventListener("click", (e) => {
      const findMedia = medias.find((elem) => elem.id == e.target.dataset.id);
      displayLightboxWith(findMedia, folder, medias);
    });
  });
}

function displayLightboxWith(item, folder, medias) {
  let index = medias.findIndex((elt) => elt.id === item.id);
  console.log(index, item);
  const lightBox = document.querySelector(".lightbox");
  const mediaLIghtBox = factory(item, folder);
  lightBox.innerHTML = mediaLIghtBox.displayLightBoxContent();
  const closeLightbox = document.querySelector(".btn-close");
  closeLightbox.addEventListener("click", () => {
    lightBox.innerHTML = "";
  });
  const nextRight = document.querySelector(".fleche-right");
  nextRight.addEventListener("click", () => {
    index = medias.length - 1 === index ? 0 : index + 1;
    displayLightboxWith(medias[index], folder, medias);
  });
  const nextLeft = document.querySelector(".fleche-left");
  nextLeft.addEventListener("click", () => {
    index = index === 0 ? (index = medias.length - 1) : index - 1;
    displayLightboxWith(medias[index], folder, medias);
  });
}

export {
  displayPhotograph,
  displayNav,
  getAllTags,
  addListenersToTags,
  displayMediaPhotographer,
  displayBannerPage,
  displayModalInfo,
  triPopularite,
  triTitre,
  triDate,
  displayLightboxWith,
  lightBoxElements,
};
