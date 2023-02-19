

let pozy1 = {
        meat: '5',
             onion:'2',
             dough: '1',
        eggs: "3"
  }
  alert(pozy1.meat);
  alert(pozy1.onion);
  alert(pozy1.dough);
  alert(pozy1.eggs);

  
let pies = {
        onion:'2',
             eggs: "3",
               rice: '1',
             dough: '1',
        meat: '5',
}

alert(pies.onion);
alert(pies.eggs);
alert(pies.rice);
alert(pies.dough);
alert(pies.meat);


let salad = {
        onion:'2',
           cucumber:'2',
            tomato:'2',
             oliveoil:'1', 
}
alert(salad.onion);
alert(salad.cucumber);
alert(salad.tomato);
alert(salad.oliveoil);

let waffles = {
        eggs:'2',
            dough:'2',
             sugar:'3',
}
alert(waffles.eggs);
alert(waffles.dough);
alert(waffles.sugar);

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