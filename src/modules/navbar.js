export function createNavBar() {
  const navBar = document.createElement("nav");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");

  const homeText = document.createElement("span");
  const menuText = document.createElement("span");
  const contactText = document.createElement("span");

  homeButton.id = "homeButton";
  menuButton.id = "menuButton";
  contactButton.id = "contactButton";

  homeText.textContent = "Home";
  menuText.textContent = "Menu";
  contactText.textContent = "Contact";

  homeButton.append(homeText);
  menuButton.append(menuText);
  contactButton.append(contactText);

  navBar.append(homeButton, menuButton, contactButton);

  return navBar;
}
