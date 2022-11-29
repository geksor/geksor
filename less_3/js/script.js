// Задание 1

i = 0;

while (i<=100){
   console.log(i++);
}

// Задание 2

function number (i, n) {
    i = i || 0;
    n = n || 10; // PHP Shtorm ругается когда в скобках пишу умолчания. Нашел вот такой вариант.

    do {
        if (i%2 !== 0){
            console.log(i++ +" - Это нечетное число")
        }
            console.log(i++ +" - Это четное число")
    }
    while (i<=n)
}

number();

// Задание 3

for (i = 0; i < 10; console.log(i++)){}

// Задание 4

var str='';

for (i = 0; i < 20; i++){
    console.log(str+='x');
}