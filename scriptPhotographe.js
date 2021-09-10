// Création de la variable attaché à l'élement HTML qui contient le banner photographer
const containePage = document.querySelector(".containerImport");
// Création de la variable attaché à l'élement HTML qui contient les tags photographe dans le banner
const containerButton = document.querySelector(".bouton");

// Création de la variable qui va chercher dans la page l'url
let url = window.location.search;
// Je formate avec URLSearchParams les informations à récupérer
let params = new URLSearchParams(url);
// Je demande à récuperer la string id => ?id=243
let params2 = params.get("id");
// J'importe mon document qui contient les informations des photographes
fetch("data.json")
  // Je demande une réponse de type JSON
  .then((res) => res.json())
  // Sur un document correspondant à data
  .then((data) => {
    // Je crée une variable qui va venir chercher dans mon document l'élement ID
    const photographerPage = data.photographers.find(
      // En demandant que l'id de l'url et du document corresponder
      (element) => element.id == params2
    );
    // J'éxécute la fonction displayPage avec pour parametre le morceaux de mon document.
    displayPage(photographerPage);
  });

// Fonction qui va écrire mon code HTML en récuperant les informations du photographe en question
function displayPage(photographerPage) {
  containePage.innerHTML += `<div class="boxPhotographers">
        <div>
          <h1 class="colorTitle">${photographerPage.name}</h1>
          <h3>${photographerPage.city}, ${photographerPage.country}</h3>
          <p>${photographerPage.tagline}</p>
          <div class="bouton">${(containerButton.innerHTML +=
            photographerPage.tags
              .map(
                (tagArtist) =>
                  `<button class="styleBouton tag ${tagArtist}" data-filter="${tagArtist}">${tagArtist}</button>`
              )
              .join(""))}</div>
        </div>
        <button class="contactButton">Contactez-moi</button>
        <figure class="boxContainer">
          <img class="boxImagePhotographers" src="./FishEye_Photos/Photos/Photographers ID Photos/${
            photographerPage.portrait
          }"/>
        </figure>
      </div>`;
}

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
toClose.forEach((btn) =>
  btn.addEventListener("click", closeModal, borderClosure)
);

function borderClosure() {
  border.style.animationName = "line-border-reverse";
}
// close modal form
function closeModal() {
  //modal.style.display = "none";
  modal.style.animationName = "scale-down-ver-down";
  modalClose.style.display = "block";
  modalClose.style.zIndex = "1";
  setTimeout(function () {
    border.style.animationDirection = "reverse";
  }, 350);
  setTimeout(function () {
    modal.style.display = "none";
    modal.style.animationName = "scale-down-ver-top";
    border.style.animationDirection = "normal";
  }, 850);
}
