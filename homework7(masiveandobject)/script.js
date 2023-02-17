let pozy =
           { ingridients:[`ground meat`,`onion`, `dough`,`eggs`,]
};
alert(pozy.ingridients);

pozy.ingridients.pop();

alert(pozy.ingridients);


pozy.ingridients.unshift(`eggs`);

alert(pozy.ingridients);
pozy.ingridients.splice(1,1);
alert(pozy.ingridients);

let Prise = { 
    ground meat:5,
        onion:1,
        dough:2,
        eggs:2,
    totalPrise: 10
}
        alert(Prise.totalPrise);