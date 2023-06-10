import { loadHomePage } from "./modules/homepage.js";
import { createHeader } from "./modules/header";
import "./styles/reset.scss";
import "./styles/style.scss";
import Map from "./assets/map.jpg";

const map = new Image();
map.src = Map;

const mapContainer = document.getElementById("map-id");
mapContainer.append(map);

const main = document.getElementById("content");

const header = createHeader();

// main.append(header);
// loadHomePage(main);
