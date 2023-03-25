





loginPass = {
    'boris': '1986',
    'admin': 'root',
    'user': '1234',
  
};

export let login = prompt('Ваше имя?');//Спросите пользователя его имя с помощью `prompt(’вопрос’, ‘значение по умолчанию’)`. 
export let pass = prompt ('ваш пароль?');//Далее спросите пароль. 

if (login == 'boris' && pass == loginPass.boris||login == 'admin' && pass == loginPass.admin|| login == 'user' && pass == loginPass.user) {
alert ('Вы вошли!');     // &&-и , ||- или , !-не
}
else if (login !== 'boris' && login !== 'admin' && login !== 'user') {
alert ('оператор не найден!');
}

else if (pass !== loginPass.boris||pass !== loginPass.admin||pass!== loginPass.user){
alert('пароль не верный!');
};