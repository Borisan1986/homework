
// function checkLoginPass(_login, _pass) {
//     correctValues = {
//         'boris': '1986',
//         'admin': 'root',
//         'user': '1234',
//         'bato': '1510'
//     };

//     if (!(_login in correctValues)) {
//         return 'Такого пользователя не существует';
//     } else if (correctValues[_login] != _pass) {
//         return 'Неправильный пароль';
//     } else if (_login in correctValues && correctValues[_login] == _pass) {
//         return 'Вы вошли';
//     } else {
//         return 'Ошибка в обработке данных';
//     };
// }


// while (true) {
//     let login = prompt('Введите имя пользователя: ', 'user');
//     let password = prompt('Введите пароль: ');
//     let result = checkLoginPass(login, password);
//     if (result == 'Такого пользователя не существует' || result == 'Неправильный пароль' || result == 'Ошибка в обработке данных') {
//         alert(`Результат работы кода: ${result}\nПовторите ввод!`);
//     } else {
//         alert(`Результат работы кода: ${result}\nДобро пожаловать!`);
//         break;
//     };
//}
//Спросите пользователя его имя с помощью `prompt(’вопрос’, ‘значение по умолчанию’)`. 
//Далее спросите пароль. 
//Для указанных ниже пар имя - пароль проверьте правильность пароля. 
//При правильном пароле выведите “Вы вошли”, при неправильном пароле выведите “Неправильный пароль”. 
//Если ввели имя не из списка - выведите “Такого пользователя не существует”. Используйте `if`, следите за читаемостью кода. 
//Пары логин и пароль: admin - root, user - 123
//⭐Для хранения пользователей и паролей используйте объект, где ключом будет имя, а значением пароль.
// let question = prompt('Ваше имя?', user);

// let userName = prompt("Имя пользователя?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === '123') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }
correctValues = {
            'boris': '1986',
            'admin': 'root',
            'user': '1234',
          
        };

    
let question = prompt('Ваше имя?');
let pass = promt ('ваш пароль?');
if (login == 'boris' && pass == loginPass.boris||login == 'admin' && pass == loginPass.admin|| login == 'user' && pass == loginPass.user) {
alert ('Вы вошли!');     // &&-и , ||- или , !-не
}
else if (login !== 'boris'||login !== 'admin'|| login !== 'user') {
    alert ('оператор не найден!');
}
else if (pass !== loginPass.boris||pass !== loginPass.admin||pass!== loginPass.user){
    alert('пароль не верный!');
};