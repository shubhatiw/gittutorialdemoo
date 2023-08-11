//EXAMINE THE DOCUMENT OBJECT //
/*
console.dir(document);
console.log(document.domain);
console.log(document. URL);
console.log(document.title);
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all [10]);
// document.all [10].textContent = 'Hello';
console.log(document.forms [0]);
console.log(document.links);
console.log(document.images);

//get element by id
console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>
header.style.borderBottom = 'solid 3px #000';
document.addEventListener("DOMContentLoaded", function() {
    const addItemsHeading = document.querySelector(".title");

    // Apply styles to the "Add Items" heading
    addItemsHeading.style.fontWeight = "bold";
    addItemsHeading.style.color = "green";
});
var items=document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent='Hello 2';
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("#items li");

    listItems.forEach(item => {
        item.style.fontWeight = "bold";
        item.style.color = "blue";  // Change the color to your desired color
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("#items li");

    // Apply green background color to the 3rd list item (index 2)
    if (listItems.length >= 3) {
        listItems[2].style.backgroundColor = "green";
    }
});
 */
// get elements by tag name
 /*var li=document.getElementsByTagName('li');
 console.log(li);
 console.log(li[1]);
 li[1].textContent='hello 2';
 li[1].style.fontweight='bold';
 li[4].style.background='yellow';
*/
 /*
for(var i=0;i<li.length;i++)
 {
    li[1].style.background='#f4f4f4'
 }
 */

 // query selector
  var header=document.querySelector('#main-header')
header.style.borderBottom='solid 4px #ccc'

var input=document.querySelector('input')
input.value='Hello world'

var sumbit=document.querySelector('input[type="submit"]')
sumbit.value="send"

var item=document.querySelector('.list-group-item')
item.style.color='red';
//var item[1]=document.querySelector('.list-group-item')
//item[1].style.color='green';
//var secondItem=document.querySelector('.list-group-item:nth-child(2)')
//secondItem.style.backgroundColor='green'
//query selector
//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display = 'none';

//queryselectorALL

//var titles=document.querySelectorAll('.title')
//item[1].style.color='green'
//var items = document.querySelectorAll('.list-group-item:nth-child(2)');
//items.forEach(item => {
 //   item.style.color = 'light-green';
//});
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++){
odd[i].style.backgroundColor = 'green';
}
