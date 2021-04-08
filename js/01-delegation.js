const colorPreviewEl = document.querySelector(".js-color-preview");

const colorsContainer = document.querySelector("#colors");
colorsContainer.addEventListener("click", onChooseColor);

function onChooseColor({ target }) {
  if (target.nodeName !== "BUTTON" && !target.dataset.color) {
    return;
  }

  colorPreviewEl.style.backgroundColor = target.dataset.color;
}

// ========================

const actionsContainer = document.querySelector(".js-actions");

actionsContainer.addEventListener("click", onSelectAction);

function onSelectAction({ target }) {
  if (target.nodeName !== "BUTTON") {
    return;
  }

  const { action } = target.dataset;

  switch (action) {
    case "approve":
      return console.log("Подтвержаем пиу пиу");

    case "edit":
      return console.log("Редактируем пиу пиу");

    case "delete":
      return console.log("Удаляем пиу пиу");
  }
}
