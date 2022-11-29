    var event, ok, n = 1;

do {
    ques  = 'a0' + n;
    ans1  = 'a1' + n;
    ans2  = 'a2' + n;
    ans3  = 'a3' + n;
    ans4  = 'a4' + n;
    write = 'a5' + n;
    if (!works[ques]){
        alert('Вы выиграли');
        break;
    }
    event = +prompt(works[ques]  + works[ans1] + works[ans2]  + works[ans3]  + works[ans4]  + '-1 - Выход из игры\n');
    if (event == -1) {
        alert('Спасибо за игру');
        break;
    }
    else if (isAnswer(works.a0, event)) {
        if (event != works[write]){
            alert('Не верно (\nGAME OVER');
            break;
        }
        alert('Верно!!!');
        n++;
    }
} while (1);


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    else {
        return true;
    }
}