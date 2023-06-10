import Map from "../assets/map.jpg";

export function loadContactPage(main) {
  const container = document.createElement("div");
  container.id = "contactUsPage";

  const contactsDiv = document.createElement("div");
  contactsDiv.classList.add("contacts");

  const contacts = createContactContainer();
  const form = contactForm();

  contactsDiv.append(contacts, form);

  const mapDiv = document.createElement("div");
  mapDiv.id = "map-id";
  const map = new Image();
  map.src = Map;

  mapDiv.append(map);

  container.append(contactsDiv, mapDiv);
  main.append(container);
}

function createContactContainer() {
  const container = document.createElement("div");
  container.classList.add("contact-container");

  const address = createAddressContainer();
  const socials = createSocialsContainer();

  container.append(address, socials);
  return container;
}

function createAddressContainer() {
  const container = document.createElement("div");
  container.classList.add("address-container");

  const topDiv = document.createElement("div");

  const topDivH1 = document.createElement("h1");
  const address = document.createElement("p");

  topDivH1.textContent = "Visit us at this address:";

  address.textContent =
    "10 Litchaton Crescent, Plymouth,PL7 4RE,(01752) 785418";

  topDiv.append(topDivH1, address);

  const openHours = createOpeningHours();

  container.append(topDiv, openHours);

  return container;
}

function createOpeningHours() {
  const middleDiv = document.createElement("div");
  const middleDivH1 = document.createElement("h1");
  middleDivH1.textContent = "Opening Hours:";

  const openHoursDiv = document.createElement("div");

  const mondayToThursday = document.createElement("span");
  const friToSat = document.createElement("span");
  const sunday = document.createElement("span");

  mondayToThursday.textContent = "Monday - Thursday 12pm - 11pm";
  friToSat.textContent = "Friday & Saturday 12pm - 12am";
  sunday.textContent = "Sunday 12pm - 10.30pm";

  openHoursDiv.append(mondayToThursday, friToSat, sunday);
  middleDiv.append(middleDivH1, openHoursDiv);

  return middleDiv;
}

function createSocialsContainer() {
  const container = document.createElement("div");
  container.classList.add("socials");

  const link1 = document.createElement("a");
  const link2 = document.createElement("a");
  const link3 = document.createElement("a");

  link1.href = "";
  link1.textContent = "Twitter";
  link2.href = "";
  link2.textContent = "Facebook";
  link3.href = "";
  link3.textContent = "Instagram";
  container.append(link1, link2, link3);

  return container;
}

function contactForm() {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const h1 = document.createElement("h1");
  const form = document.createElement("form");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const subjectLabel = document.createElement("label");
  const subjectInput = document.createElement("input");
  const messageLabel = document.createElement("label");
  const messageBox = document.createElement("textarea");
  const submitButton = document.createElement("button");
  const buttonSpan = document.createElement("span");

  emailLabel.textContent = "Email";
  subjectLabel.textContent = "Subject";
  messageLabel.textContent = "Message";
  buttonSpan.textContent = "Submit";
  submitButton.type = "submit";
  submitButton.append(buttonSpan);

  div1.append(emailLabel, emailInput);
  div2.append(subjectLabel, subjectInput);
  div3.append(messageLabel, messageBox);

  form.append(div1, div2, div3, submitButton);
  h1.textContent = "Got a question?";

  formContainer.append(h1, form);

  return formContainer;
}
