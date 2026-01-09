var ul = document.getElementById('ul');

function todo() {
    var input = document.getElementById('inp');

    if(input.value.trim() === "") return;

    var li = document.createElement('li');
    var text = document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li);

    var dltBtn = document.createElement('button');
    dltBtn.innerHTML = 'Delete';
    li.appendChild(dltBtn);
    dltBtn.className = 'dltBtn';

    dltBtn.addEventListener('click', function() {
        dlt(this);
    });

    var editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    li.appendChild(editBtn);
    editBtn.className = 'editBtn';

    editBtn.addEventListener('click', function() {
        edit(this);
    });

    input.value = "";
}

function dlt(e) {
    e.parentNode.remove();
}

function edit(e) {
    var oldValue = e.parentNode.firstChild.nodeValue;
    var newValue = prompt('New Value', oldValue);
    if(newValue && newValue.trim() !== ""){
        e.parentNode.firstChild.nodeValue = newValue;
    }
}

var input = document.getElementById("inp");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        todo();
    }
});
