import { createNavBar } from "./navbar";

export function createHeader() {
  const header = document.getElementById("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Test Restaurant";

  const nav = createNavBar();

  header.append(h1, nav);
}
