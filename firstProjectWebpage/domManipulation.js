var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var addDescription = document.createElement('input');
addDescription.type = 'text';
addDescription.className = 'form-control mr-2';
addDescription.id = 'description';
var submit = form.lastElementChild;
form.insertBefore(addDescription, submit);

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    var descriptionText = document.getElementById('description').value;
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode('    '+descriptionText));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild( editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
        item.style.display = 'none';
        }
    });
}