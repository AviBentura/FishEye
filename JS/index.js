fetch("JS/data.json")
  .then((res) => res.json())
  .then((data) => {
    const tags = getAllTags(data.photographers);
    data.photographers.forEach((photographer) => {
      displayPhotograph(photographer);
      displayNav(tags);
      fonctionPageDAcceuil(document, data.photographers);
    });
  });

import {
  getAllTags,
  displayPhotograph,
  displayNav,
  addListenersToTags as fonctionPageDAcceuil,
} from "./function.js";
