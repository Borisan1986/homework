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
            ingridients:  [  'eggs', 'dough','sugar', ] , },



        ];

let mydish = {dish:[  'buuza1', 'pies','salad','waffles']};

alert(mydish.dish);
mydish.dish.pop();

alert(mydish.dish);


mydish.dish.unshift(`waffles`);

alert(mydish.dish);
mydish.dish.splice(1,1);
alert(mydish.dish);


sum = dish[0].price - dish[0].expense;
alert(sum);

sum = dish[1].price - dish[1].expense;
alert(sum);

sum = dish[2].price - dish[2].expense;
alert(sum);

sum = dish[3].price - dish[3].expense;
alert(sum);


mydish.dish.splice(1,2,);
        alert(mydish.dish);