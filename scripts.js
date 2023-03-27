





loginPass = [
    {boris: '1986',
    admin: 'root',
    user: '1234',
  
}
];
console.log(getValue(loginPass,'user'));

function getValue(array,key){
let res =[];
for (let i = 0; i <array.length; i++) {
    res.push(array[i][key])
}
return res;
}
 


\let login = prompt('Ваше имя?');//Спросите пользователя его имя с помощью `prompt(’вопрос’, ‘значение по умолчанию’)`. 
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