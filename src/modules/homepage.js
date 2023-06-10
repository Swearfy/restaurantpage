export function loadHomePage(main) {
  const container = document.createElement("div");
  container.id = "homePage";

  const h2 = document.createElement("h2");
  const h1 = document.createElement("h1");

  h2.textContent = "Welcome to";
  h1.textContent = "Restaurant Name";

  const buttons = createHomeButtons();
  container.append(h2, h1, buttons);

  main.append(container);
}

function createHomeButtons() {
  const container = document.createElement("div");
  container.classList.add("homePage-buttons");

  const button1 = document.createElement("button");
  const button2 = document.createElement("button");

  const button1Text = document.createElement("span");
  const button2Text = document.createElement("span");

  button1Text.textContent = "Reserve";
  button2Text.textContent = "Order";

  button1.append(button1Text);
  button2.append(button2Text);

  container.append(button1, button2);

  return container;
}
