const numbers = [1, 2, 3, 4, 5];

const copyOfNumbers = [...numbers];

console.log(copyOfNumbers === numbers);

copyOfNumbers[0] = 1000;

console.log("numbers: ", numbers);
console.log("copyOfNumbers: ", copyOfNumbers);

const users = [
  { id: 1, username: "Mango", email: "mango@mail.com" },
  { id: 2, username: "Poly", email: "poly@mail.com" },
  { id: 3, username: "Kiwi", email: "kiwi@mail.com" },
];

const copyOfUsers = [...users];

copyOfUsers[0].username = "TEST";
console.log("users: ", users);
console.log("copyOfUsers: ", copyOfUsers);
