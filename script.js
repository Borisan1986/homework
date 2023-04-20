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
        console.log(menu);


        //reduce

        menu.forEach(function (item, index, arr) {

            item.price  = item.ingredients.reduce(function (sum, item, index, arr) {
                return sum += ingredientsD[item.nameIngrediets];
              
            }, 0)
          
        });
        
        
        menu.forEach(function (item, index, arr) {
            console.log(`Блюдо: ${item.name} ; Себестоимость: ${item.price}`);
            
// 2 задание.map для создания массива с объектами


let updatedMeals = menu.map(function (item, index, arr) {
    let elem = {
        name: item.name,
        expense: item.expense,
      
    }
    return elem;
});

console.log(updatedMeals)
        });
    }); 