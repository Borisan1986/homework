let menu;

let ingredientsD;

fetch("./ingredientsDish.json")
    .then((r) => r.json())
    .then((r) => {
        ingredientsD = r;   //ингредиенты 
        //console.log(ingredientsD);
        return fetch("./food.json");
    })
    .then((r) => r.json())
    .then((r) => {
        menu = r;           //позы, пирожки, салат.
       

menu.forEach(function (item, index, arr) {
   
    item.price = item.ingredients.reduce(function (sum, item, index, arr) {
     
        return sum += ingredientsD[item].price;

    }, 0)
   
});


menu.forEach(function (item, index, arr) {
    console.log(`Блюдо: ${item.name} ; Себестоимость: ${item.price}`);
});
            
// 2 задание.map для создания массива с объектами


let updatedMeals = menu.map(function (item, index, arr) {
    let elem = {
        name: item.name,
        expense: item.expense,
      
    }
    return elem;
});

console.log(updatedMeals)
//3 задание .Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.

let veganDish = menu.some(function (item, index, arr) {

    return item.ingredients.every(function(item,index,arr) {
    return ingredientsD[item].vegan;
});
});

console.log(`Есть ли вегетарианское блюдо ${veganDish}`)  // true

//4 задание.Определите, полностью ли у вас вегетарианское меню с помощью `every`.

let vegetarianDishOnly = menu.every(function (item, index, arr) {
    return item.ingredients.every(function(item,index,arr) {
        return ingredientsD[item].vegan;
    });
});

console.log(`полностью ли у вас вегетарианское меню ${vegetarianDishOnly}`); // folse


//Создайте массив с вегетарианскими блюдами с помощью filter.


let massivDish = menu.filter(function (item,index,arr) {
    return item.ingredients.every(function (item, index, arr) {
       
        return ingredientsD[item].vegan;
        
    })
  
});
console.log(`массив с вегетарианскими блюдами ${JSON.stringify(massivDish)}`);

        });
