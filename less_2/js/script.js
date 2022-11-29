//Задание 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2  сначала a увеличилось на 1 затем присвоилось значение c (a=2)
// d = b++; alert(d); // 1 сначала присвоилось значение d затем b увеличилось на один (b=2)
// c = (2+ ++a); alert(c); // 5 a равно 2 после 4 строки, перед выполнением действия a увеличивается еще на 1 (a=3)
// d = (2+ b++); alert(d); // 4 b равно 2 после 5 строки, сначала выполняется действие, затем b увеличивается на 1 (b=3)
// alert(a); // 3 a равно 3 после 6 строки
// alert(b); // 3 b равно 3 после 7 строки

//Задание 2

// var a = 2;
// var x = 1 + (a *= 2); /*a = a * 2, 1 + a*/
// a = 4, x = 5

//Задание 3

function coinToss() {
    return (Math.floor(Math.random() * 2) === 0);
}

function getRandomVar(min, max) {

    var int = Math.floor(Math.random() * (max - min + 1)) + min;

    if (coinToss() === true){
        int *= 1;
    }
    else {
        int *= -1
    }

    return int;
}


var a = getRandomVar(0, 20), b = getRandomVar(0, 20);

// console.log(a, b);

function getMath(a, b) {
    if (a >= 0 && b >= 0){
        return Math.max(a, b) - Math.min(a, b);
    }
    else {
        if (a < 0 && b < 0){
            return a * b;
        }
        else {
            return a + b;
        }
    }
}

// console.log(getMath(a, b));

//Задание 4

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var c = getRandom(0, 15);
var str = '';

switch (c){
    case 0:
        str = '0, ';
    case 1:
        str = str+'1, ';
    case 2:
        str = str+'2, ';
    case 3:
        str = str+'3, ';
    case 4:
        str = str+'4, ';
    case 5:
        str = str+'5, ';
    case 6:
        str = str+'6, ';
    case 7:
        str = str+'7, ';
    case 8:
        str = str+'8, ';
    case 9:
        str = str+'9, ';
    case 10:
        str = str+'10, ';
    case 11:
        str = str+'11, ';
    case 12:
        str = str+'12, ';
    case 13:
        str = str+'13, ';
    case 14:
        str = str+'14, ';
    case 15:
        str = str+'15';
}

// console.log(str);

//Задание 5

function add (a, b) {
    if (isFinite(a) === true && isFinite(b) === true){
        return a + b;
    }
    else {
        return 'Аргументы должны быть числами';
    }
}

function sub (a, b) {
    if (isFinite(a) === true && isFinite(b) === true){
        return a - b;
    }
    else {
        return 'Аргументы должны быть числами';
    }
}

function mult (a, b) {
    if (isFinite(a) === true && isFinite(b) === true){
        return a * b;
    }
    else {
        return 'Аргументы должны быть числами';
    }
}

function div(a, b) {
    if (isFinite(a) === true && isFinite(b) === true){
        if (b !== 0){
            return a / b;
        }
        else {
            return 'на ноль делить нельзя';
        }
    }
    else {
        return 'Аргументы должны быть числами';
    }

}

//Задание 6

function mathOperation(arg1, arg2, operation) {
    switch (operation){
        case '+':
            return add(arg1, arg2);
            break;
        case '-':
            return sub(arg1, arg2);
            break;
        case '*':
            return mult(arg1, arg2);
            break;
        case '/':
            return div(arg1, arg2);
            break;
        default :
            return ('значение operatin должно быть (+, -, * или /)');
    }
}

// var arg1 = +prompt('Введите первый аргумент');
// var opr = prompt('Введите действие в формате (+, -, *, /)');
// var arg2 = +prompt('Введите второй аргумент');

// var res = mathOperation(arg1, arg2, opr);

// if (isFinite(res) === true){
//     alert(arg1 + ' ' + opr + ' ' + arg2 + ' = ' + res);
// }
// else {
//     alert(res);
// }

//Задание 7

var nul;

nul = null > 0; //false

// console.log(nul);

nul = null < 0; //false

// console.log(nul);

nul = null == 0; //false

// console.log(nul);

nul = null <= 0; //true

// console.log(nul);

nul = null >= 0; //true (при сравнении x >= y оператор >= сравнивает является ли x < y и если нет возвращает true <= тоже самое)

// console.log(nul);

//Задание 8

function power(val, pow, res=1) { //Почему то phpShtorm выделяет res=1 как ошибку, при этом все работает.

    res = val*res;

    if (pow <= 1 && pow >= 0){
        return res;
    }
    else if (pow > 1){
        return power(val, --pow, res)
    }
    else{
        pow = Math.abs(pow);
        return 1/power(val, pow);
    }
}

// console.log(power(2, 30));