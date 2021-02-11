// const defaultValue = 0;
// const value = defaultValue ?? 10;
// console.log(value);

// Ранний возврат
function checkStorage(available, ordered) {
  // Пиши код ниже этой строки

  if (ordered === 0) {
    return "В заказе еще нет товаров";
  }

  if (ordered > available) {
    return "Слишком большой заказ, на складе недостаточно товаров!";
  }

  return "Заказ оформлен, с вами свяжется менеджер";

  // Пиши код выше этой строки
}

// Как-то так
function qweqwe(country) {
  let message;
  let price;
  let selectedCountry;

  switch (country) {
    case "Австралия":
      price = 170;
      selectedCountry = "Австралия";
      break;

    case "Китай":
      price = 100;
      selectedCountry = "Китай";
      break;

    case "Чили":
      price = 250;
      selectedCountry = "Чили";
      break;

    case "Ямайка":
      price = 120;
      selectedCountry = "Ямайка";
      break;
  }

  message = selectedCountry
    ? `Доставка в ${selectedCountry} будет стоить ${price} кредитов`
    : "Извините, в вашу страну доставки нет";

  return message;
}

function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return (
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
  );
}

console.log(checkForSpam("This is not SpAM"));
console.log(checkForSpam("Very nice SAle"));
console.log(checkForSpam("JavaScript is amazing"));
