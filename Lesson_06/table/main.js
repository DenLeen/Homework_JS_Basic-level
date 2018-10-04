var addRowBtn = document.getElementById('addRow'),
    tBody =  document.getElementsByTagName('tbody')[0];

addRowBtn.onclick = function (event) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td></td><td></td><td></td>';

    var firstRow = tBody.children[0];
    tBody.insertBefore(newRow, firstRow);
};

tBody.addEventListener('click', insertInput, false);
function insertInput(event) {
    var target = event.target;

    if (target.tagName === 'TD'&& target.id !== 'addRow') {
        var text = target.innerText;

        target.innerHTML = '<input type="text" onblur="setText(event);" value="' + text + '">';

        var input =  document.getElementsByTagName('input')[0];
        input.focus();
    }
}

function setText(event) {
    var target = event.target,
        parentTd = target.parentElement;
    parentTd.innerText = target.value;

}