for (let i = 1; i <= 10; i++){ 

    if (i % 2 == 0) 
    
    { alert( i ); } 

} 


let i = 1;

while( i > 0 ) { 
	alert(i); 
	if (i === 5) {
		break;  
	}

	i++;
}

//Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. 
//⭐Не задавайте цену приготовления сразу. Задайте массив ингредиентов. 


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
    dish[i].profit = dish[i].priceSale - dish[i].priceCooking;
};

console.log(`Созданный массив из объектов блюд с профитом: ${JSON.stringify(dish)}`);


//1. В задании к предыдущему уроку в пункте 3 создайте локальные переменные внутри цикла и запишите в них строку с основной информацией по блюду, которую вы бы поместили в печатное меню.
//2. Так же в этом задании создайте глобальную переменную и запишите в нее все строки строки из пункта 1 этого задания. В результате вы должны получить меню со списком всех блюд, которое можно было бы распечатать.
let allDescriptionMenu = '';

for (let i = 0; i < dish.length; i++) {
    let description = `Название блюда: ${dish[i].name}; Стоимость: ${dish[i].expense}\n`;
    allDescriptionMenu += description;
};
console.log(`Меню:\n${allDescriptionMenu}`);