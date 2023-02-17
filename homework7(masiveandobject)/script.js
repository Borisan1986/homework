let pozy =
           { ingridients:[ `meat`,`onion`, `dough`,`eggs`,]
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