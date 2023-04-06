//Parent Node
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentElement.style.backgroundColor = "grey";

//Parent Element
console.log(itemList.parentElement);
itemList.parentElement.style.background = "pink";

//Last Element Child
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color = "red";

//Last Child
console.log(itemList.lastChild);
// itemList.lastChild.style.background = "sky"; Cannot set properties of undefined.

//First Element Child
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = "blue";

//First Child
console.log(itemList.firstChild);
//returns the first child which is text, as spaces are given.

//Next Element Sibling
console.log(itemList.nextElementSibling);

//Next Sibling
console.log(itemList.nextSibling);

//Previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor = "grey"

//Previous Sibling
console.log(itemList.previousSibling);

//Create a new element
var newDiv = document.createElement('div');
console.log(newDiv);

//Set class name
newDiv.className = 'hello';

//Set id
newDiv.id = 'hello1';

//Set attribute
newDiv.setAttribute('title', 'Hello Div');

//Create text node
var newText = document.createTextNode('HEllo');

//Append the new text node 
newDiv.appendChild(newText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('h1');

container.insertBefore(newDiv, h1);

var listitems = document.querySelector(' .list-group-item');
var newContainer = document.querySelector('.list-group');
newContainer.insertBefore(newDiv, listitems);
console.log(newContainer);
