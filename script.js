// SpendWise Budget Dashboard
// Author: Thon Yien Thon

// Store expense records in an array
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let monthlyBudget = Number(localStorage.getItem("budget")) || 20000;

// Save expenses to local storage
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Calculate total expenses using a loop
function calculateTotal() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// Display budget information
function updateDashboard() {
    let total = calculateTotal();
    let balance = monthlyBudget - total;

    document.getElementById("totalExpenses").textContent =
        `KES ${total.toFixed(2)}`;

    document.getElementById("remainingBalance").textContent =
        `KES ${balance.toFixed(2)}`;

    // Make decisions based on spending
    let status = document.getElementById("budgetStatus");

    if (total > monthlyBudget) {
        status.textContent = "Warning! You are over budget.";
    } else if (total >= monthlyBudget * 0.8) {
        status.textContent = "Careful! You are approaching your budget limit.";
    } else {
        status.textContent = "Good job! You are within your budget.";
    }

    displayExpenses();
}

// Display all expense records
function displayExpenses() {
    let expenseList = document.getElementById("expenseList");

    if (!expenseList) return;

    expenseList.innerHTML = "";

    // Process expenses using a loop
    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${escapeHTML(expense.name)}</td>
            <td>${escapeHTML(expense.category)}</td>
            <td>KES ${expense.amount.toFixed(2)}</td>
            <td>${escapeHTML(expense.date)}</td>
            <td>
                <button onclick="deleteExpense(${i})">
                    Delete
                </button>
            </td>
        `;

        expenseList.appendChild(row);
    }
}

// Prevent user-entered text from being interpreted as HTML
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

// Add a new expense
function addExpense(event) {
    event.preventDefault();

    let name = document.getElementById("expenseName").value.trim();
    let category = document.getElementById("expenseCategory").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let date = document.getElementById("expenseDate").value;

    // Validate user input
    if (!name || !category || !date || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter valid expense information.");
        return;
    }

    // Add expense to the array
    expenses.push({
        name: name,
        category: category,
        amount: amount,
        date: date
    });

    saveExpenses();

    document.getElementById("expenseForm").reset();

    updateDashboard();

    alert("Expense added successfully!");
}

// Delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);

    saveExpenses();

    updateDashboard();
}

// Update monthly budget
function updateBudget() {
    let budget = Number(document.getElementById("monthlyBudget").value);

    if (!Number.isFinite(budget) || budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    monthlyBudget = budget;

    localStorage.setItem("budget", monthlyBudget);

    updateDashboard();

    alert("Budget updated successfully!");
}

// Handle user interactions
document.addEventListener("DOMContentLoaded", function () {

    // Expense form event listener
    const expenseForm = document.getElementById("expenseForm");

    if (expenseForm) {
        expenseForm.addEventListener("submit", addExpense);
    }

    // Budget button event listener
    const budgetButton = document.getElementById("budgetButton");

    if (budgetButton) {
        budgetButton.addEventListener("click", updateBudget);
    }

    // Display saved information when the page loads
    updateDashboard();
});