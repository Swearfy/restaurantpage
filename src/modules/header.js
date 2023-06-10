import { createNavBar } from "./navbar";

export function createHeader() {
  const header = document.createElement("header");

  const headerLeft = createHeaderLeft();
  const headerRight = createNavBar();
  header.append(headerLeft, headerRight);

  return header;
}

function createHeaderLeft() {
  const logo = document.createElement("img");

  const restaurantName = document.createElement("h1");

  restaurantName.textContent = "Test Restaurant";

  const container = document.createElement("div");

  container.append(logo, restaurantName);
  return container;
}

// function createHeaderRight() {
//   const container = document.createElement("div");

//   container.append(createNavBar());

//   return container;
// }
