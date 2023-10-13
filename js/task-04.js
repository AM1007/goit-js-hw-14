const counter = document.getElementById("value");
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrease = (evt) => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

decrBtn.addEventListener("click", decrease);

const increase = (evt) => {
  counterValue += 1;
  counter.textContent = counterValue;
};

incrBtn.addEventListener("click", increase);
