var ul = document.getElementById('ul');

function todo() {
    var input = document.getElementById('inp');
    if(input.value.trim() === "") return;

    var li = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';
    checkbox.onchange = function() {
        if(this.checked) li.classList.add('completed');
        else li.classList.remove('completed');
    }
    li.appendChild(checkbox);

    var span = document.createElement('span');
    span.textContent = input.value;
    li.appendChild(span);

    var btnGroup = document.createElement('div');

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'editBtn';
    editBtn.onclick = function() { edit(this) };
    btnGroup.appendChild(editBtn);

    var dltBtn = document.createElement('button');
    dltBtn.textContent = 'Delete';
    dltBtn.className = 'dltBtn';
    dltBtn.onclick = function() { dlt(this) };
    btnGroup.appendChild(dltBtn);

    li.appendChild(btnGroup);
    ul.appendChild(li);

    input.value = "";
}

function dlt(btn) {
    var li = btn.parentNode.parentNode;
    li.style.transition = "all 0.3s ease";
    li.style.opacity = "0";
    li.style.transform = "translateY(50px)";
    setTimeout(() => li.remove(), 300);
}

function edit(btn) {
    var li = btn.parentNode.parentNode;
    var oldValue = li.querySelector('span').textContent;
    var newValue = prompt('Edit Task', oldValue);
    if(newValue && newValue.trim() !== "") li.querySelector('span').textContent = newValue;
}

document.getElementById('inp').addEventListener('keypress', function(event) {
    if(event.key === 'Enter') todo();
});

document.getElementById('darkBtn').onclick = function() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
};

document.getElementById('lightBtn').onclick = function() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
};
