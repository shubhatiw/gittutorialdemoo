var expenseAmount = document.getElementById('expenseAmount');
var description = document.getElementById('description');
var category = document.getElementById('category');
var expenseList = document.getElementById('expenseList');


function addExpense() {
  
  var newExpense = {
    amount: expenseAmount.value,
    description: description.value,
    category: category.value
  };


  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  
  expenses.push(newExpense);


  localStorage.setItem('expenses', JSON.stringify(expenses));


  displayExpenses();
}


function displayExpenses() {
 
  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  
  expenseList.innerHTML = '';

 
  for (var i = 0; i < expenses.length; i++) {
    var li = document.createElement('li');
    li.textContent = 'Amount: ' + expenses[i].amount + ', Description: ' + expenses[i].description + ', Category: ' + expenses[i].category;
    
  
    (function(i) {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        deleteExpense(i);
      };
      
      var editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
        editExpense(i);
      };
      
      li.appendChild(deleteButton);
      li.appendChild(editButton);
    })(i);

    expenseList.appendChild(li);
  }
}

function deleteExpense(index) {

  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  
  expenses.splice(index, 1);

 
  localStorage.setItem('expenses', JSON.stringify(expenses));

  
  displayExpenses();
}

function editExpense(index) {
  
  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];


  var expense = expenses[index];
  
  expenseAmount.value = expense.amount;
  
  description.value = expense.description;
  
  category.value = expense.category;

  
  expenses.splice(index, 1);

  
  localStorage.setItem('expenses', JSON.stringify(expenses));


  
}


displayExpenses();