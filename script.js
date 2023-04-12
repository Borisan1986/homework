let menu;

fetch("/food.json")
.then((r) => r.json())
.then((r) => {
menu = r;
return fetch("/ingredients.json");
})
.then((r) => r.json())
.then((r) => console.log(r));

