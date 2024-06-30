document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = null;
    let operand1 = null;
    let operand2 = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                operator = null;
                operand1 = null;
                operand2 = null;
                display.textContent = '';
            } else if (value === '=') {
                operand2 = parseFloat(currentInput);
                if (operator && operand1 !== null && operand2 !== null) {
                    const result = calculate(operand1, operand2, operator);
                    display.textContent = result;
                    currentInput = result.toString();
                    operator = null;
                    operand1 = null;
                    operand2 = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                operand1 = parseFloat(currentInput);
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(operand1, operand2, operator) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            default:
                return 0;
        }
    }
});
