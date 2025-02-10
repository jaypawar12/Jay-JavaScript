const amountInput = document.querySelector('input');
const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const convertBtn = document.querySelector('.convert');
const result = document.querySelector('.result');

const exchangeRates = {
    'us': { 'india': 85.91, 'Yuan': 11.71 },
    'india': { 'us': 1 / 85.91, 'Yuan': 1 / 85.91 * 11.71},
    'Yuan': { 'us': 1 / 11.71, 'india': 1 / 11.71 * 85.91 }
};

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = dropdown1.value;
    const toCurrency = dropdown2.value;

    if (isNaN(amount) || fromCurrency === "Select" || toCurrency === "Select") {
        alert("Invalid input.");
        return;
    }

    result.textContent = `${(amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2)} ${toCurrency.toUpperCase()}`;
});

