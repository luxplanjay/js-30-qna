// class Hero {
//   constructor(heroname, xp) {
//     this.heroname = heroname;
//     this.xp = xp;
//   }
// }

// class Tank extends Hero {
//   constructor(heroname, xp, armorvalue) {
//     super(heroname, xp);
//     this.armorvalue = armorvalue;
//   }
// }

// const mango = new Tank("Mango", 1000, 5);
// console.log(mango);

// class User {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }

//   set fullName(name) {
//     const [first, last] = name.split(" ");
//     this._firstName = first;
//     this._lastName = last;
//   }
// }

// const user = new User("Jacob", "Mercer");
// console.log(user.fullName);
// user.fullName = "Adrian Cross";
// console.log(user.fullName);

// const button = document.querySelector("button");
// button.classList.add("super");
// button.textContent = "Спасибо вам умные люди :)";
