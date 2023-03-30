//Посчитайте стоимость приготовления динамически (с помощью цикла)
for (let i = 0; i < dish.length; i++) {
    let sum = 0;
    for (let j = 0; j <dish[i].ingredients.length; j++) {
        sum += ingredientsDish[dish[i].ingredients[j]];
    }
    dish[i].price = sum;
};

console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(dish)}`);