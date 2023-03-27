





// loginPass = [
//     {boris: '1986',
//     admin: 'root',
//     user: '1234',
  
// }
// ];
// console.log(getValue(loginPass,'user'));

// function getValue(array,key){
// let res =[];
// for (let i = 0; i <array.length; i++) {
//     res.push(array[i][key])
// }
// return res;
// }
 


// let login = prompt('Ваше имя?');//Спросите пользователя его имя с помощью `prompt(’вопрос’, ‘значение по умолчанию’)`. 
//  let pass = prompt ('ваш пароль?');//Далее спросите пароль. 


// if (login == 'boris' && pass == loginPass.boris||login == 'admin' && pass == loginPass.admin|| login == 'user' && pass == loginPass.user) {
// alert ('Вы вошли!');     // &&-и , ||- или , !-не
// }
// else if (login !== 'boris' && login !== 'admin' && login !== 'user') {
// alert ('оператор не найден!');
// }

// else if (pass !== loginPass.boris||pass !== loginPass.admin||pass!== loginPass.user){
// alert('пароль не верный!');
// };
// import getValue from './modules/get_value.js';
// import mapArray from './modules/map.js';
// import {getValue, mapArray} from './modules/helpers_array.js';
import { getValue, mapArray,p } from './module.js';


const superHero = [
    { id: 12345, hero: 'batman', power: 'money' },
    { id: 54321, hero: 'aquaman', power: 'fishpower' },
];

console.log(getValue(superHero, 'hero'));
console.log(getValue(superHero, 'id'));
console.log(mapArray(superHero, 'hero'));
console.log(p);