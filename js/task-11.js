// Додаємо div

const wrap = document.createElement("div");

// Додаємо class "wrapper"

wrap.classList.add("wrapper");

// Розмістити його всередині тега body

const body = document.querySelector("body");
body.appendChild(wrap);

// Створити заголовок h1 "DOM (Document Object MOdel)"

const h1 = document.createElement("h1");

h1.textContent = "DOM (Document Object MOdel)";

// Додати заголовок перед div з класом "wrapper"

wrap.insertAdjacentElement("beforebegin", h1);

// створити ul і додати в нього три елементи з текстом "раз, два, три "

const ul = `<ul>
<li>раз</li>
<li>два</li>
<li>три</li>
</ul>
`;

// розмістити список всередині div з класом "wrapper"

wrap.insertAdjacentHTML("afterbegin", ul);

// ======================================

// створити зображення

const img = document.createElement("img");

// додати свойства до зображення:
// 1. Додати атрибут source

img.src = "https://picsum.photos/id/13/640/480";

// 2. Додати атрибут width зі значенням 640

img.width = 640;

// 3. Додати клас super

img.classList.add("super");

// 4. Додати alt з назвою "River bank"

img.alt = "River bank";

// розмістити зображення в div

wrap.appendChild(img);

// ===========================

// Використовуючи HTML рядок, створіть div з класом pDiv + 2 параграфи до елементу ul

const elemHTML = `
<div class ="pDiv">
<p>Параграф 1</p>
<p>Параграф 2</p>
</div>
`;
// div.insertAdjacentHTML("afterbegin", elemHTML);
// або
const ulList = wrap.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);

// додати для другого параграфу клас "text"

const pDiv = document.querySelector(".pDiv");
// pDiv.lastElementChild.classList.add("text");
// або
pDiv.children[1].classList.add("text");

// Видалити перший параграф
pDiv.firstElementChild.remove();

// =========================

// Створити функцію generateAutoCard, яка прийматиме 3 аргументи: brand, color, year

const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  return `
    <div class="auto">
      <h2>${brand} ${year}</h2>
      <p>Авто ${brand}_${year} року. Вік авто - ${curYear - year} років</p>
      <p>Колір - ${color}</p>
      <button type='button' class="btn">Видалити</button>
  </div>
  `;
};

// Функція повинна повертати розмітку HTML:

/* <div class="auto">
  <h2>BRAND YEAR</h2>
  <p>Авто BRAND_YEAR року. Вік авто - YEARS років</p>
</div>; */

// Створити div з класом autos

const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");
// Створити 4 картки авто, за допомогою функції generateAutoCard

const carsList = [
  { brand: "Tesla", year: 2015, color: "red" },
  { brand: "Lexus", year: 2016, color: "silver" },
  { brand: "Nissan", year: 2017, color: "black" },
];

const carsHTML = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join("");

// Розмістити картки всередину з класом cars
// carsDiv.innerHTML = carsHTML;
carsDiv.insertAdjacentHTML("beforeend", carsHTML);
// Розмістити картки на сторінку до div з класом wrapper

wrap.insertAdjacentElement("beforebegin", carsDiv);

// Вибрати всі кнопки

const buttons = document.querySelectorAll(".btn");

// Створити функцію видалення

function handleClick(e) {
  const currentButton = e.currentTarget;
  // currentButton.parentElement.remove();
  // або
  currentButton.closest(".auto").remove();
}

// Використати цикл - для використання обробника подій на кожну кнопку

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
