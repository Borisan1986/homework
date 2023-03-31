// import { vegetarianDish } from './function.js';
   let buuza = 
    {
        name: 'позы', 
        price: 0, 
        expense: 30, 
        ingredients: ['meat', 'onion', 'dough', 'eggs'],
        };

   let  pies = 
   { 
        name: 'пирожки', 
        price: 0, 
        expense: 15, 
        ingredients: ['onion', 'eggs', 'rise','dough','meat'],
    };

   let salad = 
        { 
        name: 'салат', 
        price: 0, 
        expense: 10, 
        ingredients: ['onion', 'cucumber', 'tomato', 'oliveoli' ],
    };

let wafles = 
    {   name: 'вафли',
        price : 0,  
        expense:20,         
        ingredients:  [  'eggs', 'dough','sugar', ]  
    } ;
    
// массив из блюд

let dish = [
            buuza,
             pies,
            salad,
            wafles

                   ];




//Отдельно создайте объект хранящий стоимость этих ингредиентов. 

let ingredientsDish = { 
 meat: 40,
 onion: 15,
 dough: 10,
 eggs: 10,
 rise: 12,
 cucumber: 5,
 tomato: 8,
 oliveoli: 3,
 sugar: 6,       };

//3 задание .Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
 let vegetarianDish = dish.some(function(item, index, arr) {
    return item != "eggs","meat";
  });
  
  console.log(vegetarianDish); // true

  //4 задание.Определите, полностью ли у вас вегетарианское меню с помощью `every`.
 
let vegetarianDishOnly = dish.every(function(item, index, arr) {
  return item  == "eggs","meat";
});

console.log(vegetarianDishOnly); // folse






// //Посчитайте стоимость приготовления динамически (с помощью цикла)
// for (let i = 0; i < dish.length; i++) {
//     let sum = 0;
//     for (let j = 0; j <dish[i].ingredients.length; j++) {
//         sum += ingredientsDish[dish[i].ingredients[j]];
//     }
//     dish[i].price = sum;
// };

// console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(dish)}`);

