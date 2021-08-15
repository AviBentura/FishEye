const containePost = document.querySelector(".content");

fetch("data.json")
  .then((res) => res.json())
  .then((data) =>
    /*function getAllTags(photographers) {
        let tags = [];
    }
    console.log("all tags", tags);
    /*document.querySelector('.flexible');
    console.log("all tags", tags);
    data.photographers.forEach((photographer) => {
      containePost.innerHTML += `<div class="artist"><figure class="boxContainer"><img class="boxImage" src="./FishEye_Photos/Photos/Photographers ID Photos/${photographer.portrait}"/></figure><figcaption>${photographer.name}</figcaption><h3>${photographer.city}, ${photographer.country}</h3><p>${photographer.tagline}</p><h4>${photographer.price}€/jour</h4>`;
      /*<button class="styleBouton">#' +
        photographer.tags[0] +
        '</button><button class="styleBouton">#' +
        photographer.tags[1] +
        '</button><button class="styleBouton">#' +
        photographer.tags[2] +
        "</button></div>";
    })*/
  )

//let newContent = document.createElement("div");
//newContent.classList = "artist";

//let texte = document.createTextNode("Insere");

//newContent.appendChild(texte);

//document.containerPost.appendChild(newContent);
