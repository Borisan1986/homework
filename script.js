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

        console.log (menu);

        //reduce
        menu.forEach(function (item, index, arr) {

            let sumMenuLength = item.ingredients.reduce(function (sum, item, index, arr) {
                return sum += ingredientsD[item.nameIngrediets];
        
            }, 0)
           // menu[item].sumMenuLength = sumMenuLength;
        });
            menu.forEach(function (item) {
                
console.log(`Блюдо: ${item.name} ; Себестоимость: ${   sumMenuLength}`);
            });



        });
