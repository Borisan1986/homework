// const helpers = {
//     getValue2: function (array, key) {
//         let res = [];
//         for (let i = 0; i < array.length; i++) {
//             res.push(array[i][key]);
//         }
//         return res;
//     },
//     mapArray: function (array, key) {
//         let result = {};
//         for (let i = 0; i < array.length; i++) {
//             result[array[i][key]] = array[i];
//         }
//         return result;
//     },
//     p: 5566
// }

// export const getValue = helpers.getValue2;
// export const mapArray = helpers.mapArray;
// export const p = helpers.p;

//const helpers = {
//Не совсем понял зачем ты создал обьект, который потом не используется. Экспортируешь ты все равно его свойства,
 //а не обьект целиком.

//  let login = prompt('Ваше имя?');//Спросите пользователя его имя с помощью `prompt(’вопрос’, ‘значение по умолчанию’)`. 
//  let pass = prompt ('ваш пароль?');//Далее спросите пароль. 

function checLogin(login, pass, loginPass){

if (login == 'boris' && pass == loginPass.boris||login == 'admin' && pass == loginPass.admin|| login == 'user' && pass == loginPass.user) {
alert ('Вы вошли!');     // &&-и , ||- или , !-не
}
else if (login !== 'boris' && login !== 'admin' && login !== 'user') {
alert ('оператор не найден!');
}

else if (pass !== loginPass.boris||pass !== loginPass.admin||pass!== loginPass.user){
alert('пароль не верный!');
};
}
