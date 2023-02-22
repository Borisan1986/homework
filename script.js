let dish = [
        {
            buuza1: 'buuza1', 
            price: 80, 
            expense: 30, 
            ingridients: ['meat', 'onion', 'dough', 'eggs',],
            },
    
        { 
            pies: 'pies', 
            price: 50, 
            expense: 15, 
            ingridients: ['onion', 'eggs', 'rise','dough','meat'],},
    
        { 
            salad: 'salad', 
            price: 40, 
            expense: 10, 
            ingridients: ['onion', 'cucumber', 'tomato', 'oliveoli', ],},
   

        {   wafles: 'wafles',
            price : 50,  
            expense:20,         
            ingridients:  [  'eggs', 'dough','sugar', ] , }



        ];

//let mydish = {dish:[  'buuza1', 'pies','salad','waffles']};



let copy = dish[0];
console.log(dish);

dish.shift();
dish.unshift(copy);
console.log(copy);
console.log(typeof copy);
console.log(copy.ingridients);
copy.ingridients.splice(3);
console.log(copy.ingridients);




let sum;

sum = dish[0].price - dish[0].expense;
alert(sum);

sum = dish[1].price - dish[1].expense;
alert(sum);

sum = dish[2].price - dish[2].expense;
alert(sum);

sum = dish[3].price - dish[3].expense;
alert(sum);


dish.splice(1,2,);
        alert(dish);