var createBtn = document.getElementById('create'),
    chessField = document.getElementsByTagName('table')[0];

createBtn.onclick = function clickBtn() {
    var tBody = document.createElement('tbody');
    chessField.appendChild(tBody);

    var x = document.getElementById('fieldX').value;
        if (x <1 || x>10) {
            alert ('Ошибка');
            createBtn.style.display = none;
        }
    var y = document.getElementById('fieldY').value;
        if (y <1 || y>10) {
            alert ('Ошибка');
            createBtn.style.display = none;
        }
    for (var i = 0; i < x; i++) {
        var tr = document.createElement('TR');
        tBody.appendChild(tr);
        for (var j = 0; j < y; j++) {
            var td = document.createElement('TD');
            tr.appendChild(td);
        }
    }
    createBtn.onclick = function() {
        createBtn.style.display = none;
    }
}


