let menu;

let ingredients;

fetch("./food.json")
.then((r) => r.json())
.then((r) => {
menu = r;
return fetch("./ingredients.json");
})
.then((r) => r.json())
.then((r) => {
    ingredients = r;

		//reduce
		menu.forEach(function (item) {
			item.expense = item.ingridients.reduce(function (accum, item) {
				return accum += expenseIngr[item];
			}, 0);
		});

		dish.forEach(function (item) {
			console.log(`блюдо: ${item.name} - себестоимость: ${item.expense}\n
			ПРОФИТ ${item.price - item.expense}`);
		});
	})
	// .catch((error) => console.log(error));
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

 

