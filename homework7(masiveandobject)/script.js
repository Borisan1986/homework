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

let mydish = {dish:['pozy', 'pies','salad','waffles']};

alert(mydish.dish);
mydish.dish.pop();

alert(mydish.dish);


mydish.dish.unshift(`waffles`);

alert(mydish.dish);
mydish.dish.splice(1,1);
alert(mydish.dish);



let pozy =
           { ingridients:[ `meat`,`onion`, `dough`,`eggs`]
};
alert(pozy.ingridients);

pozy.ingridients.pop();

alert(pozy.ingridients);


pozy.ingridients.unshift(`eggs`);

alert(pozy.ingridients);
pozy.ingridients.splice(1,1);
alert(pozy.ingridients);

let Price = { 
        "meat":5,
        "onion":1,
        "dough":2,
        "eggs":2,
    
}
let totalPrice=
Price.meat + Price.onion + Price.dough + Price.eggs;
        alert(totalPrice);

        pozy.ingridients.splice(1,2);
        alert(pozy.ingridients);