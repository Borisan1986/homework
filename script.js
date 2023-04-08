fetch("/food.json")
.then((r) => r.json())
.then((r) => console.log(r));

// console.log("after fetch");