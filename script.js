const containePost = document.querySelector(".content");

function getAllTags(photographers) {
  let tags = [];
  photographers.forEach((photographer) => {
    tags = tags.concat(photographer.tags);
  });
  let tagSet = new Set(tags);
  //console.log(tagSet);
  return Array.from(new Set(tags));
}

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.photographers.forEach((photographer) => {
      containePost.innerHTML +=
        `<div class="artist"><figure class="boxContainer"><img class="boxImage" src="./FishEye_Photos/Photos/Photographers ID Photos/${photographer.portrait}"/></figure><figcaption>${photographer.name}</figcaption><h3>${photographer.city}, ${photographer.country}</h3><p>${photographer.tagline}</p><h4>${photographer.price}€/jour</h4>` +
        photographer.tags
          .map(
            (tagArtist) =>
              `<button class="styleBouton ${tagArtist}">#${tagArtist}</button>`
          )
          .join("");
      tags = getAllTags(data.photographers);
      document.querySelector(".flexible").innerHTML = tags
        .map(
          (tag) =>
            `<button class="styleBouton" data-filter="${tag}"><a href="#"></a>#${tag}</button>`
        )
        .join("");
      document.querySelector(".flexible").addEventListener("click", () => {
        const artist = photographer.tags
          .map((x) => `<button class="styleBouton">#${x}</button>`)
          .join("");

        /*const result = data.photographers.filter((items) =>
          items.tags.includes(artist)
        );

        console.log(result);*/
        /*const filtreTexte = (arr, requete) => {
          return arr.filter((el) => el.indexOf(requete) !== -1);
        };*/

        //console.log(filtreTexte(tags, "an"));
      });
    });
    /*const Listen = document.getElementsByTagName("button");
    console.log(Listen);
    document.getElementsByTagName("button").addEventListener("click", () => {
      //const tagSearch = document.querySelectorAll(".styleBouton").value;
      console.log("tagSearch");
    });*/
  });

const tagArtists = document.getElementsByTagName("a");

const tagArray = [];
console.log(tagArtists);

for (i = 0; i < tagArtists.length; i++) {
  tagArtists[i].addEventListener("click", (event) => {
    const filterTags = event.target.dataset.filter;
    console.log(filterTags);
  });
}
