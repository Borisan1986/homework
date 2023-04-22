let menu;

let ingredientsD;

fetch("./ingredientsDish.json")
    .then((r) => r.json())
    .then((r) => {
        ingredientsD = r;   //ингредиенты 
        console.log(ingredientsD);
        return fetch("./food.json");
    })
    .then((r) => r.json())
    .then((r) => {
        menu = r;           //позы, пирожки, салат.
        console.log(menu);
menu.forEach(function (item, index, arr) {
    console.log(menu);
    item.price = item.ingredients.reduce(function (sum, item, index, arr) {
        return sum += ingredientsD[item];

    }, 0)
    console.log(item);
});


menu.forEach(function (item, index, arr) {
    console.log(`Блюдо: ${item.name} ; Себестоимость: ${item.price}`);
});
            
// 2 задание.map для создания массива с объектами


// let updatedMeals = menu.map(function (item, index, arr) {
//     let elem = {
//         name: item.name,
//         expense: item.expense,
      
//     }
//     return elem;
// });

// console.log(updatedMeals)
        });
