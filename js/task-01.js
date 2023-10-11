// Знаходимо елемент ul#categories

const categoriesList = document.querySelector("#categories");

// Підраховуємо всі елементи li.item

const categoryItems = categoriesList.children.length;

console.log("Number of categories:", `${categoryItems}`);

// Знаходимо всі елементи li.item

const categoryElement = document.querySelectorAll(".item");

// Перебираємо список категорій щоб до братися до кожного елемента і визначити контент та кількість:

categoryElement.forEach((item) => {
  const catTitle = item.querySelector("h2");
  const catLength = item.querySelectorAll("li");

  console.log("Category:", catTitle.textContent);
  console.log("Elements:", catLength.length);
});
