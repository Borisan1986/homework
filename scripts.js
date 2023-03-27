
import { getValue, mapArray,p } from './module.js';


const superHero = [
    { id: 12345, hero: 'batman', power: 'money' },
    { id: 54321, hero: 'aquaman', power: 'fishpower' },
];





 const loginPass = [
    {boris: '1986',
    admin: 'root',
    user: '1234',
  
}
];

console.log(getValue(loginPass, 'boris'));
console.log(getValue(superHero, 'id'));
console.log(mapArray(superHero, 'hero'));
console.log(p);


let login = prompt('Ваше имя?');//Спросите пользователя его имя с помощью `prompt(’вопрос’, ‘значение по умолчанию’)`. 
 let pass = prompt ('ваш пароль?');//Далее спросите пароль. 


if (login == 'boris' && pass == loginPass.boris||login == 'admin' && pass == loginPass.admin|| login == 'user' && pass == loginPass.user) {
alert ('Вы вошли!');     // &&-и , ||- или , !-не
}
else if (login !== 'boris' && login !== 'admin' && login !== 'user') {
alert ('оператор не найден!');
}

else if (pass !== loginPass.boris||pass !== loginPass.admin||pass!== loginPass.user){
alert('пароль не верный!');
};
// import getValue from './modules/get_value.js';
// import mapArray from './modules/map.js';
// import {getValue, mapArray} from './modules/helpers_array.js';


