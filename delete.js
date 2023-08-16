var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var editButtons = document.querySelectorAll('.edit');

editButtons.forEach(function(button) {
  button.addEventListener('click', editItem);
});

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input values
  var newItemValue = document.getElementById('item').value;
  var anotherItemValue = document.getElementById('anotherItem').value;


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  
  // Create div for item content
  var itemContent = document.createElement('div');
  itemContent.className = 'item-content';
  // Add text node with input values
  itemContent.appendChild(document.createTextNode(newItemValue + " - " + anotherItemValue));

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-warning btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to item content
  itemContent.appendChild(editBtn);

  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to item content
  itemContent.appendChild(deleteBtn);

  // Append item content to li
  li.appendChild(itemContent);

  // Append li to list
  itemList.appendChild(li);

  // Clear input fields
  document.getElementById('item').value = '';
  document.getElementById('anotherItem').value = '';
}

// Edit item
function editItem(e) {
  var listItem = e.target.parentElement.parentElement;
  var itemText = listItem.querySelector('.item-content').textContent.trim(); // Get the item text
  var editInput = document.getElementById('item');
  editInput.value = itemText;

  // Remove the list item when the "Edit" button is clicked
  listItem.remove();
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByClassName('list-group-item');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemContent = item.querySelector('.item-content');
    var itemText = itemContent.textContent;
    if(itemText.toLowerCase().indexOf(text) !== -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
