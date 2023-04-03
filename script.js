let buuza =
{
    name: 'позы',
    price: 0,
    expense: 30,
    ingredients: ['meat', 'onion', 'dough', 'eggs'],
};
let pies =
{
    name: 'пирожки',
    price: 0,
    expense: 15,
    ingredients: ['onion', 'eggs', 'rise', 'dough', 'meat'],
};
let salad =
{
    name: 'салат',
    price: 0,
    expense: 10,
    ingredients: ['onion', 'cucumber', 'tomato', 'oliveoli'],
};
let wafles =
{
    name: 'вафли',
    price: 0,
    expense: 20,
    ingredients: ['eggs', 'dough', 'sugar',]
};
// массив из блюд

let dish = [buuza, pies, salad, wafles];
//Отдельно создайте объект хранящий стоимость этих ингредиентов. 
let ingredientsPrises = {
    meat: 40,
    onion: 15,
    dough: 10,
    eggs: 10,
    rise: 12,
    cucumber: 5,
    tomato: 8,
    oliveoli: 3,
    sugar: 6,
};
// //Посчитайте стоимость приготовления динамически (с помощью цикла)
for (let i = 0; i < dish.length; i++) {
    let sum = 0;
    for (let j = 0; j < dish[i].ingredients.length; j++) {
        sum += ingredientsPrises[dish[i].ingredients[j]];
    }
    dish[i].price = sum;
};
console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(dish)}`);

// 1 задание. Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, 
//которая использует `reduce` 


dish.forEach(function (item, index, arr) {

    let sumMenuLength = item.ingredients.reduce(function (sum, item, index, arr) {
        return sum += ingredientsPrises[item.nameIngrediets];

    }, 0)
});

// вывод
dish.forEach(function (item, index, arr) {
    console.log(`Блюдо: ${item.name} ; Себестоимость: ${item.price}`);
});

// 2 задание.map для создания массива с объектами


let updatedMeals = dish.map(function (item, index, arr) {
    let elem = {
        name: item.name,
        expense: item.expense,
        price: item.price
    }
    return elem;
});

console.log(updatedMeals)

//3 задание .Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.

let veganDish = dish.some(function (item, index, arr) {

    return item == salad;
});


console.log(`Есть ли вегетарианское блюдо ${veganDish}`)

//4 задание.Определите, полностью ли у вас вегетарианское меню с помощью `every`.

let vegetarianDishOnly = dish.every(function (item, index, arr) {
    return item == salad;
});

console.log(`полностью ли у вас вегетарианское меню ${vegetarianDishOnly}`); // folse
