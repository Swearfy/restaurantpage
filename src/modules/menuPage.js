export function loadMenuPage(main) {
  const container = document.createElement("div");
  container.id = "menuPage";

  const menu = {
    mainDishes: {
      title: "Main Dishes",
      list: [
        "Meat Balls",
        "Ratatouille",
        "Surf'n'Turf",
        "Mandrake Soup",
        "Veggie Burger",
      ],
    },
    sideDishes: {
      title: "Side Dishes",
      list: [
        "Spicy Chilli",
        "California Roll",
        "Waffles",
        "Guacamole",
        "Creamy Potato Puree",
        "Beefy Greens",
      ],
    },
    deserts: {
      title: "Deserts",
      list: [
        "Banana Shake",
        "Butter Muffin",
        "Dragon Pie",
        "Fist Full of Jam",
        "Fresh Fruit Crepes",
      ],
    },
  };

  const mainDishes = createMenuBox(menu.mainDishes);
  const sideDishes = createMenuBox(menu.sideDishes);
  const deserts = createMenuBox(menu.deserts);

  container.append(mainDishes, sideDishes, deserts);
  main.append(container);
}

function createMenuBox(obj) {
  const container = document.createElement("div");
  container.classList.add("menuBox");

  const h1 = document.createElement("h1");
  h1.textContent = obj.title;

  const list = listDishes(obj.list);

  container.append(h1, list);

  return container;
}

function listDishes(arr) {
  const ul = document.createElement("ul");

  arr.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });

  return ul;
}
