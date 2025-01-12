const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.num');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');  

let currentInput = '', previousInput = '', operator = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;
        if (['+', '−', '×', '÷', '%', '√'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
            }
            operator = value;
        } else if (value) {
            currentInput += value;
        }
        display.innerHTML = `${previousInput} ${operator} ${currentInput}`;
    });
});

equalButton.addEventListener('click', () => {
    if (previousInput && currentInput && operator) {
        const num1 = parseFloat(previousInput), num2 = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '÷': result = num1 / num2; break;
            case '×': result = num1 * num2; break;
            case '−': result = num1 - num2; break;
            case '+': result = num1 + num2; break;
            case '%': result = num1 % num2; break;
            case '√': result = Math.sqrt(num1); break;
        }
        display.innerHTML = result;
        currentInput = result.toString();
        previousInput = operator = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = previousInput = operator = '';
    display.innerHTML = '';
});
