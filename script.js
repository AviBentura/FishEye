const containePost = document.querySelector(".content");

function getAllTags(photographers) {
  let tags = [];
  photographers.forEach((photographer) => {
    tags = tags.concat(photographer.tags);
  });
  console.log("tags", tags);
  let tagSet = new Set(tags);
  return Array.from(new Set(tags));
}

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.photographers.forEach((photographer) => {
      containePost.innerHTML +=
        `<div class="artist"><figure class="boxContainer"><img class="boxImage" src="./FishEye_Photos/Photos/Photographers ID Photos/${photographer.portrait}"/></figure><figcaption>${photographer.name}</figcaption><h3>${photographer.city}, ${photographer.country}</h3><p>${photographer.tagline}</p><h4>${photographer.price}€/jour</h4>` +
        photographer.tags
          .map((x) => `<button class="styleBouton">#${x}</button>`)
          .join("");
      console.log(photographer.tags);
      tags = getAllTags(data.photographers);
      document.querySelector(".flexible").innerHTML = tags
        .map((tag) => `<button class="styleBouton">#${tag}</button>`)
        .join("");
    });
  });
