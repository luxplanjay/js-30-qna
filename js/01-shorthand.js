function sendToServer(creds) {
  console.log(creds);
}

function submitForm({ email, password }) {
  sendToServer({
    username: email,
    password,
  });
}

submitForm({
  email: "test@mail.com",
  password: "qweqwe123",
});

const email = "supertestmail";

const creds = {
  email,
};

console.log(creds);
