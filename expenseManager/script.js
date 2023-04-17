var form = document.getElementById('addForm');
            form.addEventListener('submit', showDetails);
            function showDetails(Event){
                Event.preventDefault();
                let amountObj = document.querySelector('#amount');
                let descriptionObj = document.querySelector('#description');
                let categoryObj = document.querySelector('#category');
                let amount = amountObj.value;
                let description = descriptionObj.value;
                let category = categoryObj.value;
                let obj = {
                    amount , description, category
                }
                localStorage.setItem(obj.description, JSON.stringify(obj));
                let ul = document.getElementById('list-group')
                let li = document.createElement('li');
                let deleteBtn = document.createElement('input');
                deleteBtn.className = 'delete';
                deleteBtn.type = 'button';
                deleteBtn.value = 'Delete';
                deleteBtn.appendChild(document.createTextNode('Delete Expense'));
                deleteBtn.onclick = () =>{
                    localStorage.getItem(obj.description);
                    ul.removeChild(deleteBtn.parentElement);
                }
                let editBtn = document.createElement('input');
                editBtn.type = 'button';
                editBtn.value = 'Edit Expense';
                editBtn.onclick = () =>{
                    console.log(localStorage.getItem(obj.description));
                    localStorage.removeItem(obj.description);
                    ul.removeChild(editBtn.parentElement);
                    amountObj.value = obj.amount;
                    descriptionObj.value = obj.description;
                    categoryObj.value = obj.category;
                }
                let text = document.createTextNode(obj.amount+'-'+obj.description+'-'+obj.category);
                li.appendChild(text);
                li.appendChild(deleteBtn);
                li.appendChild(editBtn);
                ul.appendChild(li);
                }