//Для указанных ниже пар имя - пароль проверьте правильность пароля. 
//При правильном пароле выведите “Вы вошли”, при неправильном пароле выведите “Неправильный пароль”. 
//Если ввели имя не из списка - выведите “Такого пользователя не существует”. Используйте `if`, следите за читаемостью кода. 
//Пары логин и пароль: admin - root, user - 123
//⭐Для хранения пользователей и паролей используйте объект, где ключом будет имя, а значением пароль.

loginPass = {
            'boris': '1986',
            'admin': 'root',
            'user': '1234',
          
        };

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