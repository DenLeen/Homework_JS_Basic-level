var createBtn = document.getElementById('create'),
    chessField = document.getElementsByTagName('table')[0];

createBtn.onclick = function clickBtn() {
    createBtn.setAttribute('disabled', true);
    var tBody = document.createElement('tbody');
    chessField.appendChild(tBody);

    var x = document.getElementById('fieldX').value;
    if (x < 1 || x > 10) {
        alert('Ошибка');
        createBtn.setAttribute('disabled', true);
    }
    var y = document.getElementById('fieldY').value;
    if (y < 1 || y > 10) {
        alert('Ошибка');
        createBtn.setAttribute('disabled', true);
    }
    for (var i = 0; i < x; i++) {
        var tr = document.createElement('TR');
        tBody.appendChild(tr);
        for (var j = 0; j < y; j++) {
            var td = document.createElement('TD');
            tr.appendChild(td);
            if (i%2 == j%2) {
                td.className = 'black';
            }
            // else {
            //     td.className = 'black';
            // }
        }
    }
}

var td = document.createElement('TD');

chessField.onclick = function clickChessField() {
    td.classList.toggle(black);
}


