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
  
  //Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. 
  //В эту функцию должны передаваться все данные для расчета профита,
  // результат расчетов присвойте в объект блюда.
  //Ну и желательно чтобы ты мог в функцию передать ингредиенты блюда и стоимость,
  // а она должна посчитать профит)
  
