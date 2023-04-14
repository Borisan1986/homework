let menu;

let ingredientsD;

fetch("./ingredientsDish.json")
    .then((r) => r.json())
    .then((r) => {
        ingredientsD = r;   //ингредиенты 

        return fetch("./food.json");
    })
    .then((r) => r.json())
    .then((r) => {
        menu = r;           //позы, пирожки, салат.
                   //reduce
     menu.forEach(function (item, index, arr) {

let sumMenuLength = item.ingredients.reduce(function (sum, item, index, arr) {
 return sum += ingredientsD[item.nameIngrediets];
                
 }, 0)
 
 });
                
                
 menu.forEach(function (item, index, arr) {
  console.log(`Блюдо: ${item.name} ; Себестоимость: ${item.price}`);
                });
                
     

        });















