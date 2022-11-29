$('body').html(function () {
    $(this).append(tags.divTable);
    for (i = 0; i <= 9; i++) {
        getRow(i);
        if (i === 0 || i === 9) {
            for (n = 0; n <= 9; n++) {
                getCol(n);
                (n === 0) ? $('.table').append(tags.divCell + col) : $('.table').append(tags.divCellRew + col);
            }
        }
        else {
            for (n = 0; n <= 9; n++) {
                getCol(n);
                getId(row, col);
                getFigure(id);
                if (n === 0) {
                    $('.table').append(tags.divCell + row);
                }
                else if (n === 9){
                    $('.table').append(tags.divCellRew + row);
                }
                else if ((i % 2 === 0 && n % 2 === 0) || (i % 2 !== 0 && n % 2 !== 0)) {
                    $('.table').append(tags.divCellWhite + id + tags.divClose + fig);
                }
                else {
                    $('.table').append(tags.divCellBlack + id + tags.divClose + fig);
                }

            }
        }

    }
});

function getRow(i) {
    switch (i) {
        case 0:
            row = '';
            break;
        case 1:
            row = '8';
            break;
        case 2:
            row = '7';
            break;
        case 3:
            row = '6';
            break;
        case 4:
            row = '5';
            break;
        case 5:
            row = '4';
            break;
        case 6:
            row = '3';
            break;
        case 7:
            row = '2';
            break;
        case 8:
            row = '1';
            break;
        case 9:
            row = '';
    }
}

function getCol(n) {
    switch (n) {
        case 0:
            col = '';
            break;
        case 1:
            col = 'A';
            break;
        case 2:
            col = 'B';
            break;
        case 3:
            col = 'C';
            break;
        case 4:
            col = 'D';
            break;
        case 5:
            col = 'E';
            break;
        case 6:
            col = 'F';
            break;
        case 7:
            col = 'G';
            break;
        case 8:
            col = 'H';
            break;
        case 9:
            col = '';
    }
}

function getId(row, col) {
    id = 'id="' + col + row + '"';
}

function getFigure(id) {
    switch (id) {
        case 'id="A1"':
        case 'id="H1"':
            fig = '&#9814;';
            break;
        case 'id="B1"':
        case 'id="G1"':
            fig = '&#9816;';
            break;
        case 'id="C1"':
        case 'id="F1"':
            fig = '&#9815;';
            break;
        case 'id="D1"':
            fig = '&#9813;';
            break;
        case 'id="E1"':
            fig = '&#9812;';
            break;
        case 'id="A2"':
        case 'id="B2"':
        case 'id="C2"':
        case 'id="D2"':
        case 'id="E2"':
        case 'id="F2"':
        case 'id="G2"':
        case 'id="H2"':
            fig = '&#9817;';
            break;
        case 'id="A7"':
        case 'id="B7"':
        case 'id="C7"':
        case 'id="D7"':
        case 'id="E7"':
        case 'id="F7"':
        case 'id="G7"':
        case 'id="H7"':
            fig = '&#9823;';
            break;
        case 'id="A8"':
        case 'id="H8"':
            fig = '&#9820;';
            break;
        case 'id="B8"':
        case 'id="G8"':
            fig = '&#9822;';
            break;
        case 'id="C8"':
        case 'id="F8"':
            fig = '&#9821;';
            break;
        case 'id="D8"':
            fig = '&#9819;';
            break;
        case 'id="E8"':
            fig = '&#9818;';
            break;
        default:
            fig = '';
    }
}