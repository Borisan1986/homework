//user.js
let name = "Ваня";

function changeName(newName) {
  name = newName;
}

function hello(userName) {
  alert(`Приветствую, ${userName}`);
}

export { name, hello, changeName };