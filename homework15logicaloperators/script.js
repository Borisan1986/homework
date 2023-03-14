//Спросите пользователя его имя с помощью `prompt(’вопрос’, ‘значение по умолчанию’)`. 
//Далее спросите пароль. 
//Для указанных ниже пар имя - пароль проверьте правильность пароля. 
//При правильном пароле выведите “Вы вошли”, при неправильном пароле выведите “Неправильный пароль”. 
//Если ввели имя не из списка - выведите “Такого пользователя не существует”. Используйте `if`, следите за читаемостью кода. 
//Пары логин и пароль: admin - root, user - 123
//⭐Для хранения пользователей и паролей используйте объект, где ключом будет имя, а значением пароль.

function checkLoginPass(_login, _pass) {
    correctValues = {
        'roman': '2711',
        'admin': 'root',
        'user': '1234'
    };

    if (!(_login in correctValues)) {
        return 'Такого пользователя не существует';
    } else if (correctValues[_login] != _pass) {
        return 'Неправильный пароль';
    } else if (_login in correctValues && correctValues[_login] == _pass) {
        return 'Вы вошли';
    } else {
        return 'Ошибка в обработке данных';
    };
}

while (true) {
    let login = prompt('Введите имя пользователя: ', 'user');
    let password = prompt('Введите пароль: ');
    let result = checkLoginPass(login, password);
    if (result == 'Такого пользователя не существует' || result == 'Неправильный пароль' || result == 'Ошибка в обработке данных') {
        alert(`Результат работы кода: ${result}\nПовторите ввод!`);
    } else {
        alert(`Результат работы кода: ${result}\nДобро пожаловать!`);
        break;
    };
}