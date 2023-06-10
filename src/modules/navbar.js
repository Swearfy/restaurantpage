export function createNavBar() {
  const navBar = document.createElement("nav");
  const home = document.createElement("button");
  home.textContent = "Home";
  const menu = document.createElement("button");
  menu.textContent = "Menu";
  const contact = document.createElement("button");
  contact.textContent = "Contact";

  navBar.append(home, menu, contact);
  return navBar;
}
