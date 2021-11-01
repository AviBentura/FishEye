function validateFirst(inputFirstName) {
  let regexFirst = new RegExp(
    "^[a-zA-Z-àâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ]+$",
    "g"
  );
  let smallFirst = inputFirstName.parentElement;
  if (inputFirstName.value.length < 2) {
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 2 caractères"
    );
  } else if (inputFirstName.value.length >= 16) {
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute(
      "data-error",
      "Veuillez saisir un prénom plus court"
    );
  } else if (regexFirst.test(inputFirstName.value)) {
    smallFirst.removeAttribute("data-error-visible");
    smallFirst.removeAttribute("data-error");
    return true;
  } else {
    smallFirst.setAttribute("data-error-visible", "true");
    smallFirst.setAttribute("data-error", "Veuillez saisir une autre valeur");
  }
}
function validateLast(inputLastName) {
  let regexLast = new RegExp(
    "^[a-zA-Z '-àâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ]+$",
    "g"
  );
  let smallLast = inputLastName.parentElement;
  if (inputLastName.value.length < 2) {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute(
      "data-error",
      "Veuillez saisir au minimum 2 caractères"
    );
  } else if (inputLastName.value.length >= 16) {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir un nom plus court");
  } else if (regexLast.test(inputLastName.value)) {
    smallLast.removeAttribute("data-error-visible");
    smallLast.removeAttribute("data-error");
    return true;
  } else {
    smallLast.setAttribute("data-error-visible", "true");
    smallLast.setAttribute("data-error", "Veuillez saisir une valeur valide");
  }
}
function validateEmail(inputEmail) {
  let regexEmail = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let smallEmail = inputEmail.parentElement;
  if (regexEmail.test(inputEmail.value)) {
    smallEmail.removeAttribute("data-error-visible");
    smallEmail.setAttribute("data-error-visible", "false");
    smallEmail.setAttribute("data-error", "Adresse e-mail valide");
    return true;
  } else {
    smallEmail.removeAttribute("data-error-visible");
    smallEmail.setAttribute("data-error-visible", "true");
    smallEmail.setAttribute("data-error", "Adresse e-mail non valide");
  }
}
function validateMessage(textarea) {
  let regexMessage = new RegExp(
    `^[a-zA-Z-àâçéèêëìíîïñòóôöùúûüýÿÀÁÂÇÈÉÊËÌÍÎÏÑÒÓÔÙÚÛÜÝŸ,.?;'": 
    ]+$`,
    `g`
  );
  let smallMessage = textarea.parentElement;
  if (textarea.value.length < 5) {
    smallMessage.setAttribute("data-error-visible", "true");
    smallMessage.setAttribute("data-error", "Veuillez saisir au moins un mot");
  } else if (regexMessage.test(textarea.value)) {
    smallMessage.removeAttribute("data-error-visible");
    smallMessage.removeAttribute("data-error");
    return true;
  } else {
    smallMessage.setAttribute("data-error-visible", "true");
    smallMessage.setAttribute("data-error", "Veuillez saisir d'autres valeurs");
  }
}

export { validateFirst, validateLast, validateEmail, validateMessage };
