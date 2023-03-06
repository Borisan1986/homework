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


  //Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. 
  //В эту функцию должны передаваться все данные для расчета профита,
  // результат расчетов присвойте в объект блюда.

  let buuza = 
    {
        name: 'позы', 
        price: 80, 
        expense: 30, 
        ingredients: ['meat', 'onion', 'dough', 'eggs'],
        };

   let  pies = 
   { 
        name: 'пирожки', 
        price: 30, 
        expense: 15, 
        ingredients: ['onion', 'eggs', 'rise','dough','meat'],
    };

   let salad = 
        { 
        name: 'салат', 
        price: 25, 
        expense: 10, 
        ingredients: ['onion', 'cucumber', 'tomato', 'oliveoli' ],
    };

let wafles = 
    {   name: 'вафли',
        price : 40,  
        expense:20,         
        ingredients:  [  'eggs', 'dough','sugar', ]  
    } ;
    

