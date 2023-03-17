//Напишите функцию принимающую два числа и возвращающую меньшее из них.

function minValue(a, b) {
  result = (a < b) ? a : b;
  return result;
}

while (true) {
  let checkValues1 = parseInt(prompt('Введите первое число: '));
  let checkValues2 = parseInt(prompt('Введите второе число: '));
  if (checkValues1 === checkValues2) {
      alert('Вы ввели одинаковые значения, повторите ввод!');
  } else {
      alert(`Меньшее из двух значений:  ${minValue(checkValues1, checkValues2)}`);
      break;
  };
}




// создали функция для посчета профита от продажи блюда
function countProfit(price, expense) {
  return price - expense;
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
  
  let result2 = ''
  //Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
  for (let i = 0; i < dish.length; i++) {
      // тут мы применим функцию расчета профита
      dish[i].profit = countProfit(dish[i].price, dish[i].expense);
      result2 += `Блюдо: ${dish[i].name} ; Прибыль от продажи: ${dish[i].profit}\n`;
  };
  
  alert(result2);
  
  