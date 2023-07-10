let menu = document.querySelector("#navbar");
let nav = document.querySelector(".menu");

let showcontactform = document.querySelector(".contact");
let myform = document.querySelector(".contact-form");

let formclose = document.querySelector("#form-close");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};
showcontactform.onclick = () => {
  myform.classList.toggle("active");
};
formclose.onclick = () => {
  myform.classList.remove("active");
};
