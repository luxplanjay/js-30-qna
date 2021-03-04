function processOrder(order) {
  // body
}

function submitForm({ secretKey, ...orderDetails }) {
  if (secretKey !== "super_secret_key") {
    return;
  }

  processOrder(orderDetails);
}

submitForm({
  secretKey: "super_secret_key",
  product: "🍓",
  quantity: 20,
  price: 80,
});

function addNote(note) {
  const newNote = {
    column: "todo",
    ...note,
    completed: false,
  };

  console.log("newNote: ", newNote);
  // saveToDatabase(note);
}

addNote({
  text: "Выучить JS",
  priority: "high",
  column: "in progress",
});
