const containePage = document.querySelector(".containerImport");
const containerButton = document.querySelector(".bouton");

let url = window.location.search;
// Je formate avec URLSearchParams les informations récupéré
let params = new URLSearchParams(url);
let params2 = params.get("id");
console.log(params2);
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const photographerPage = data.photographers.find(
      (element) => element.id == params2
    );
    console.log(photographerPage);
    displayPage(photographerPage);
  });

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
