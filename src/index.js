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

document.getElementById("homeButton").addEventListener("click", () => {
  clearContent(main);
  loadHomePage(main);
});

document.getElementById("menuButton").addEventListener("click", () => {
  clearContent(main);
  loadMenuPage(main);
});

document.getElementById("contactButton").addEventListener("click", () => {
  clearContent(main);
  loadContactPage(main);
});

function clearContent(main) {
  main.innerHTML = "";
}
