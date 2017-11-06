total = 0;

$('.button').click(function () {
    name = $(this).siblings('.prod_name').text();
    idtext = $(this).parent('.product').attr('attr');
    id = '#' + idtext;
    price = $(this).siblings('.prod_price').text();
    num = 1;
    sum = +price * +num;
    total += +price;

    num1 = $(id).children('.num').text();
    num1++;
    sum1 = +num1 * +price;

    if ($('.row').is(id)) {
        $(id).children('.num').html(num1);
        $(id).children('.sum').html(sum1 + ' руб');
    }
    else {
        $('#head').clone().empty().attr('id', idtext).removeClass('head').appendTo('.basket_block');
        $('#name').clone().removeAttr('id').addClass('name').html(name).appendTo(id);
        $('#price').clone().removeAttr('id').addClass('price').html(price + ' руб').appendTo(id);
        $('#num').clone().removeAttr('id').addClass('num').html(num).appendTo(id);
        $('#sum').clone().removeAttr('id').addClass('sum').html(sum + ' руб').appendTo(id);
    }
    $('#total').html('Товаров на сумму: ' + total + ' руб').appendTo('.basket_block');

});
