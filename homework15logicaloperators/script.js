while (true) {
    let checkValues1 = parseInt(prompt('Введите первое число: '));
    let checkValues2 = parseInt(prompt('Введите второе число: '));
    if (checkValues1 === checkValues2) {
        alert('Вы ввели одинаковые значения, повторите ввод!');
    } else {
        alert(`Меньшее из двух значений:  ${minValue(checkValues1, checkValues2)}`);
        break;
    };
}
