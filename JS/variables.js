export const containePost = document.querySelector(".content");

// Création de la variable attaché à l'élement HTML qui contient le banner photographer
export const containePage = document.querySelector(".containerImport");
// Création de la variable attaché à l'élement HTML qui contient les tags photographe dans le banner
export const containerButton = document.querySelector(".bouton");
// Création de la variable attaché à l'élement HTML qui contient là modal d'info du photographe séléctionné
export const carousselMedia = document.querySelector(".caroussel");

export const modalInfo = document.querySelector(".modal-info");

export const sum = document.querySelector(".blobk info-icon");

// Création de la variable qui va chercher dans la page l'url
export let url = window.location.search;
// Je formate avec URLSearchParams les informations à récupérer
export let params = new URLSearchParams(url);
// Je demande à récuperer la string id => ?id=243
export let params2 = params.get("id");
// J'importe mon document qui contient les informations des photographes
