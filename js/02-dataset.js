const colorPreviewEl = document.querySelector(".js-color-preview");
const colorButtons = document.querySelectorAll("button[data-color]");

colorButtons.forEach((button) =>
  button.addEventListener("click", onChooseColor)
);

function onChooseColor(event) {
  const element = event.currentTarget;
  colorPreviewEl.style.backgroundColor = element.dataset.color;
}

// ========================

const actionButtons = document.querySelectorAll("button[data-action]");

actionButtons.forEach((button) =>
  button.addEventListener("click", onSelectAction)
);

function onSelectAction(evt) {
  const { action } = evt.currentTarget.dataset;

  switch (action) {
    case "approve":
      return console.log("Подтвержаем пиу пиу");

    case "edit":
      return console.log("Редактируем пиу пиу");

    case "delete":
      return console.log("Удаляем пиу пиу");
  }
}
