import { removeCaroussel } from "./modal.js";

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

function displayMediaPhotographer(media, folder) {
  media.forEach((medias) => {
    // Si l'image existe j'éxécute la fonction displayPhoto
    if (medias.image != undefined) {
      displayPhoto(medias, folder);
      // Si l'image n'existe pas dans le tableau j'éxécute la fonction displayMedia
    } else if (medias.image == undefined) {
      displayVideo(medias, folder);
    }
  });
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

function displayPhoto(media, folder) {
  const carousselMedia = document.querySelector(".caroussel");
  carousselMedia.innerHTML += `<div class="containerFlex">
          <div>
            <button class="click-button">
              <figure class="boxPhoto"><img
                  src="/FishEye_Photos/Photos/${folder}/${media.image}"
                  class="boxPhoto"

                />
              </figure>
            </button>
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

function displayVideo(media, folder) {
  const carousselMedia = document.querySelector(".caroussel");
  carousselMedia.innerHTML += `<div class="containerFlex">
          <div>
            <button class="click-button">
              <video class="boxPhoto" controls>
                <source
                  src="./FishEye_Photos/Photos/${folder}/${media.video}" class="boxPhoto"
                  type="video/mp4" class="box-video"
                />
              </video>
            </button>
            <div class="likes">
              <figcaption>${media.title}</figcaption>
              <div class="block">
                <span>${media.likes}</span>
                <i class="fas fa-heart"></i>
              </div>
            </div>s
          </div>
        </div>`;
}

function displayMediaBy(media, folder) {
  if (media.image != undefined) {
    displayPhoto(media, folder);
    // Si l'image n'existe pas dans le tableau j'éxécute la fonction displayMedia
  } else if (media.image == undefined) {
    displayVideo(media, folder);
  }
}

function triPopularite(media, folder) {
  const triMediaParPopularité = [...media];
  triMediaParPopularité.sort((a, b) => b.likes - a.likes);
  removeCaroussel();
  triMediaParPopularité.forEach((medias) => {
    displayMediaBy(medias, folder);
  });
}

function triTitre(media, folder) {
  const mediaParTitre = [...media];
  mediaParTitre.sort((a, b) => (a.title > b.title ? 1 : -1));
  removeCaroussel();
  mediaParTitre.forEach((medias) => {
    displayMediaBy(medias, folder);
  });
}

function triDate(media, folder) {
  const triMediaParDate = [...media];
  triMediaParDate.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : 1;
  });
  console.log(triMediaParDate);
  removeCaroussel();
  triMediaParDate.forEach((medias) => {
    displayMediaBy(medias, folder);
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
  displayPhoto,
  displayVideo,
  displayMediaBy as displayMediaParPopularite,
  triPopularite,
  triTitre,
  triDate,
};
