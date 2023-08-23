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