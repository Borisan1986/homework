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
