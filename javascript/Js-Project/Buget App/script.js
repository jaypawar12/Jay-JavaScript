let amountInput = document.querySelector("#amout-num");
let budgetBtn = document.querySelector("#amount");
let productName = document.querySelector("#prod-name");
let productCost = document.querySelector("#prod-cost");
let addExpenseBtn = document.querySelector("#expenses");
let displayAmount = document.querySelector("#display-amount");
let displayExpense = document.querySelector("#display-expenses");
let displayBalance = document.querySelector("#display-balance");
let expenseList = document.querySelector("#list");

let totalBudget = 0;
let totalExpenses = 0;

budgetBtn.addEventListener("click", () => {
    totalBudget = parseFloat(amountInput.value);
    amountInput.value = "";
    updateDisplay();
});

addExpenseBtn.addEventListener("click", () => {
    let name = productName.value.trim();
    let cost = parseFloat(productCost.value);

    if (!name || cost <= 0) {
        alert("Enter a valid product name and cost!");
        return;
    }

    totalExpenses += cost;
    addExpenseToList(name, cost);
    updateDisplay();

    productName.value = "";
    productCost.value = "";
});

function updateDisplay() {
    displayAmount.textContent = totalBudget;
    displayExpense.textContent = totalExpenses;
    displayBalance.textContent = (totalBudget - totalExpenses);
}

function addExpenseToList(name, cost) {
    let item = document.createElement("div");
    item.classList.add("expense-item");
    item.innerHTML = `
        <span>${name}</span>
        <span>₹${cost}</span>
        <div class="actions">
            <button onclick="editExpense(this, '${name}', ${cost})"><i class="ri-edit-2-fill"></i></button>
            <button onclick="deleteExpense(this, ${cost})"><i class="ri-delete-bin-5-fill"></i></button>
        </div>
    `;
    expenseList.appendChild(item);
}

function deleteExpense(button, cost) {
    totalExpenses -= cost;
    button.closest(".expense-item").remove();
    updateDisplay();
}

function editExpense(button, name, cost) {
    productName.value = name;
    productCost.value = cost;
    deleteExpense(button, cost);
}
