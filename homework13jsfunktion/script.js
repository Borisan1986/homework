//Напишите функцию принимающую два числа и возвращающую меньшее из них.

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  let result = min(5,3);
  alert(result);
  let result1 = min(10,15);
  alert(result1);

// создали функция для посчета профита от продажи блюда
function countProfit(expense, price) {
  return expense - price;
}
 
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

let dish = [buuza,pies,salad,wafles];

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

  
//Посчитайте стоимость приготовления динамически (с помощью цикла)
for (let i = 0; i < dish.length; i++) {
  let sum = 0;
  for (let j = 0; j <dish[i].ingredients.length; j++) {
      sum += ingredientsDish[dish[i].ingredients[j]];
  }
  dish[i].price = sum;
  };
  
  console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(dish)}`);
  
  
  //Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
  for (let i = 0; i < dish.length; i++) {
  dish[i].profit = dish[i].price - dish[i].expense;
  };
  
  console.log(`Созданный массив из объектов блюд с профитом: ${JSON.stringify(dish)}`);