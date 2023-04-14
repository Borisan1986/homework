let menu;

let ingredientsD;

fetch("./ingredientsDish.json")
.then((r) => r.json())
.then((r) => {
    ingredientsD = r;
return fetch("./food.json");
})
.then((r) => r.json())
.then((r) => {
    menu = r;

    menu.forEach(function (item, index, arr) {

        item.expense = item.ingredients.reduce(function (accum, item,) {
            return accum += menu[item];
    
        }, 0)
    });
    
    
    menu.forEach(function (item, index, arr) {
        console.log(`Блюдо: ${item.name} ; Себестоимость: ${item.price}\n
        ПРОФИТ ${item.price - item.expense}`);

 });



   
   
   	//map
		let changeDish =menu .map(function (item) {
			let change = {
				onlyname: item.name,
				onlyprice: item.price
			}
			return change;
		});
		console.log(`${JSON.stringify(changeDish)}`);
   
    });
   
   
   
   
   
   
   
   
   
   

 

