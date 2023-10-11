const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Знаходимо список

const ulElements = document.querySelector("#ingredients");

// Перебираємо масив ingredients

const ulArray = ingredients.map((elem) => {
  // Створюємо елемент списку
  const listItem = document.createElement("li");
  // Додаємо клас
  listItem.classList.add("item");
  // Додаємо текстовий контент
  listItem.textContent = elem;
  return listItem;
});

ulElements.append(...ulArray);
