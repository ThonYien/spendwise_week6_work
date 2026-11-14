# SpendWise – Interactive Budget Dashboard

Author: Thon Yien Thon

## 1. Project Overview

SpendWise is a simple budgeting application that helps users manage expenses and monitor their monthly budget. This week, I improved the application using JavaScript to make it more interactive and user-friendly.

## 2. Improvements Made This Week

- Added JavaScript to make the dashboard interactive.
- Added expense management features.
- Added automatic budget calculations.
- Added a warning when spending exceeds the budget.
- Added the ability to delete expense records.
- Used Local Storage to save expenses and budget information.

## 3. Use of Conditional Statements

I used `if`, `else if`, and `else` statements to check the user's spending.

- If expenses exceed the budget, the application displays a warning.
- If spending reaches 80% of the budget, it displays a caution message.
- Otherwise, it displays a positive message that the user is within budget.

## 4. Use of Arrays

I used an array called `expenses` to store multiple expense records. Each record contains the expense name, category, amount, and date.

I used `push()` to add new expenses and `splice()` to delete expenses.

## 5. DOM Manipulation

I used JavaScript DOM manipulation to update the webpage dynamically. The dashboard displays total expenses, remaining balance, budget status, and expense records without requiring the user to refresh the page.

## 6. User Interactions and Events

I used event listeners to respond to user actions.

- Submit event: Adds a new expense.
- Click event: Updates the monthly budget.
- Delete button: Removes an expense record.
- Page loading event: Displays saved information when the application opens.

## 7. Challenges and Solutions

One challenge was updating the dashboard whenever an expense was added or deleted. I solved this by creating an `updateDashboard()` function. Another challenge was saving information so that it would remain available after refreshing the page. I used Local Storage to solve this problem. I also added input validation to prevent invalid expense amounts and budgets.

## 8. Conclusion

This week's work helped me understand how JavaScript makes websites interactive. I practised conditional statements, arrays, loops, DOM manipulation, and event listeners. I also improved my understanding of how JavaScript can be used to build practical budgeting applications.
