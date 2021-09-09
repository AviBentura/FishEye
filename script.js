const containePost = document.querySelector(".content");

function getAllTags(photographers) {
  let tags = [];
  photographers.forEach((photographer) => {
    tags = tags.concat(photographer.tags);
  });
  let tagSet = new Set(tags);
  return Array.from(new Set(tags));
}

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const tags = getAllTags(data.photographers);
    data.photographers.forEach((photographer) => {
      displayPhotograph(photographer);
      displayNav(tags);
      addListenersToTags(document, data.photographers);
    });
  });

function displayPhotograph(photographer) {
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
  <h4>${photographer.price}€/jour</h4>${photographer.tags
    .map(
      (tagArtist) =>
        `<button class="styleBouton tag ${tagArtist}" data-filter="${tagArtist}">${tagArtist}</button>`
    )
    .join("")}</div></a>`;
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
      console.log(event.target.dataset.filter);
      const filterPhotographers = photographers.filter((photographer) =>
        photographer.tags.includes(filterTags)
      );
      console.log(filterPhotographers);
      containePost.innerHTML = "";
      filterPhotographers.forEach((photographer) => {
        displayPhotograph(photographer);
      });
      addListenersToTags(containePost, photographers);
    });
  });
}
