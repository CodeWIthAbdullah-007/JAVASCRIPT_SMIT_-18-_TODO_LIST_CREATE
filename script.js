var ul = document.getElementById('ul');

function todo() {
    var input = document.getElementById('inp');
    
    // create li
    var li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);

    // delete btn
    var dltBtn = document.createElement('button');
    dltBtn.innerHTML = 'Delete';
    li.appendChild(dltBtn);
    dltBtn.className = 'dltBtn'

    dltBtn.addEventListener('click', function() {
        dlt(this);        
    });

    // edit btn
    var editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    li.appendChild(editBtn);
    editBtn.className = 'editBtn'

    editBtn.addEventListener('click', function(){
        edit(this);
    })
}

function dlt(e) {
    e.parentNode.remove();
}

function edit(e) {
    var oldValue = e.parentNode.firstChild.nodeValue;
    var newValue = prompt('new Value', oldValue)
    e.parentNode.firstChild.nodeValue = newValue
}