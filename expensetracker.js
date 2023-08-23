const expenseList = document.getElementById("expenseList");

// Load expenses from local storage if available
const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
savedExpenses.forEach(expense => {
  renderExpense(expense);
});

function addExpense() {
  const expenseAmount = document.getElementById("expenseAmount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  const expense = {
    amount: expenseAmount,
    description: description,
    category: category,
  };

  renderExpense(expense);
  saveExpense(expense);
  clearInputs();
}

function renderExpense(expense) {
  const li = document.createElement("li");
  li.innerHTML = `${expense.amount}-${expense.description}-${expense.category} 
                  <button onclick="editExpense('${expense.amount}')">Edit</button> 
                  <button onclick="deleteExpense('${expense.amount}')">Delete</button>`;
  expenseList.appendChild(li);
}

function saveExpense(expense) {
  const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  savedExpenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(savedExpenses));
}

function deleteExpense(amount) {
  const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const updatedExpenses = savedExpenses.filter(expense => expense.amount !== amount);
  localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

  const liToDelete = [...expenseList.getElementsByTagName("li")].find(li =>
    li.textContent.includes(`${amount}-`)
  );

  if (liToDelete) {
    expenseList.removeChild(liToDelete);
  }
}

function editExpense(amount) {
  const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const expenseToEdit = savedExpenses.find(expense => expense.amount === amount);

  if (expenseToEdit) {
    const updatedAmount = prompt("Enter updated amount:", expenseToEdit.amount);
    const updatedDescription = prompt("Enter updated description:", expenseToEdit.description);
    const updatedCategory = prompt("Enter updated category:", expenseToEdit.category);

    if (updatedAmount && updatedDescription && updatedCategory) {
      expenseToEdit.amount = updatedAmount;
      expenseToEdit.description = updatedDescription;
      expenseToEdit.category = updatedCategory;

      localStorage.setItem("expenses", JSON.stringify(savedExpenses));

      // Refresh the displayed list of expenses
      refreshExpenseList();
    }
  }
}

function refreshExpenseList() {
  expenseList.innerHTML = ""; // Clear the existing list
  savedExpenses.forEach(expense => {
    renderExpense(expense);
  });
}

function clearInputs() {
  document.getElementById("expenseAmount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}
