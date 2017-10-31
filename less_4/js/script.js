// Задание 1

func = {
    min: 0,
    max: 999,
    getRandom: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
}
};//Можно было обойтись просто функцией (но ведь проходим объекты) ))

// function createObject(int) {
//     if (int){
//         if (isFinite(int)){
//             var obj={};
//             int = Math.abs(int);
//             int = String(int);
//             if (int.length <= 3){
//                 switch (int.length){
//                     case 3:
//                         obj.сотни   = +int[0];
//                         obj.десятки = +int[1];
//                         obj.еденицы = +int[2];
//                         break;
//                     case 2:
//                         obj.сотни   = 0;
//                         obj.десятки = +int[0];
//                         obj.еденицы = +int[1];
//                         break;
//                     case 1:
//                         obj.сотни   = 0;
//                         obj.десятки = 0;
//                         obj.еденицы = +int[0];
//                 }
//             }
//             else {
//                 console.log('Значение превышает 999, функция вернула пустой объект')
//             }
//             return obj;
//         }
//         console.log('Значение должно быть числом')
//     }
//     console.log('Значение не передано');
// }
// Эта функция мне не понравилась.

// Этой даволен
function createObject1(int) {
    int = int || 0; // Если не указывать умолчания, то при вызове фукции c пустыми скобками получается undefined
    obj = {}; // Если поставить var то объект не видго вне функции.
    if (isFinite(int)) {
        int = Math.abs(int);
        int = String(int);
        arrInt = int.split('');
        if (arrInt.length > 3) {
            console.log('Значение превышает 999');
        }
        else {
            while (arrInt.length < 3) {
                arrInt.unshift(0);
            }
            obj.сотни = +arrInt[0];
            obj.десятки = +arrInt[1];
            obj.еденицы = +arrInt[2];
        }
    }
    else {
        console.log('Значение должно быть числом');
    }
    return obj;
}

// console.log(createObject1());
// console.log(createObject1(func.getRandom()));
createObject1(prompt('Введите число от 0 до 999'));
console.log(obj);