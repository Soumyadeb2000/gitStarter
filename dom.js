var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.background = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'transparent';

var secItem = document.querySelectorAll('li');
secItem[1].style.color = 'green';

var items = document.querySelectorAll('li:nth-child(odd)');
for(let i=0 ; i<items.length ; i++)
{
items[i].style.background = 'green';
}