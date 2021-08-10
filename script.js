const containePost = document.querySelector(".content");

fetch("data.json")
  .then((res) => res.json())
  .then((data) =>
    data.photographers.forEach((photographer) => {
      let newContent = document.createElement("div");
      //let newFigure = document.querySelectorAll(".boxContainer");
      newContent.classList += "artist";
      newContent.innerHTML +=
        '<figure class="boxContainer"><img class="boxImage" src="./FishEye_Photos/Photos/' +
        photographer.dossier +
        "/" +
        photographer.portrait +
        '"/></figure>';
      console.log(newContent);
      containePost.innerHTML +=
        '<div class="artist"><figure class="boxContainer"><img class="boxImage" src="./FishEye_Photos/Photos/' +
        photographer.dossier +
        "/" +
        photographer.portrait +
        '"/></figure></div>';
      /*
      '<img src="./FishEye_Photos/Photos/' +
        photographer.dossier +
        "/" +
        photographer.portrait +
        '"></img>';*/
    })
  );

//let newContent = document.createElement("div");
//newContent.classList = "artist";

//let texte = document.createTextNode("Insere");

//newContent.appendChild(texte);

//document.containerPost.appendChild(newContent);
