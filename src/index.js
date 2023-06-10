import { loadHomePage } from "./modules/homepage.js";
import { createHeader } from "./modules/header";
import "./styles/reset.scss";
import "./styles/style.scss";
import Map from "./assets/map.jpg";
import { loadMenuPage } from "./modules/menuPage.js";
import { loadContactPage } from "./modules/contactpage.js";

const main = document.getElementById("content");

createHeader();
loadHomePage(main);

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", () => {
  clearActiveMode();
  changeActiveMode(homeButton);
  clearContent(main);
  loadHomePage(main);
});

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", () => {
  clearActiveMode();
  changeActiveMode(menuButton);
  clearContent(main);
  loadMenuPage(main);
});

const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", () => {
  clearActiveMode();
  changeActiveMode(contactButton);
  clearContent(main);
  loadContactPage(main);
});

function clearContent(main) {
  main.innerHTML = "";
}

function changeActiveMode(btn) {
  btn.classList.add("active");
}

function clearActiveMode() {
  homeButton.classList.remove("active");
  menuButton.classList.remove("active");
  contactButton.classList.remove("active");
}
