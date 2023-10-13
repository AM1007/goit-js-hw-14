const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", onInput);

function onInput(evt) {
  if (inputName.value.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = inputName.value;
  }
}
