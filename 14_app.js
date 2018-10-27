var CalculatorApp = (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber = document.querySelector('#firstNumber');
        CalculatorApp.secondNumber = document.querySelector('#secondNumber');
        CalculatorApp.operator = document.querySelector('#operator');
        CalculatorApp.equalsButton = document.querySelector('#equals-button');
        CalculatorApp.resultButton = document.querySelector('#result-button');
        CalculatorApp.plusButton = document.querySelector('#plus-button');
        CalculatorApp.minusButton = document.querySelector('#minus-button');
        CalculatorApp.divButton = document.querySelector('#divide-button');
        CalculatorApp.mulButton = document.querySelector('#multiply-button');
        CalculatorApp.clearButton = document.querySelector('#clear-button');
    };
    CalculatorApp.addListeners = function () {
        CalculatorApp.equalsButton.addEventListener('click', CalculatorApp.fetchResults);
        CalculatorApp.plusButton.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.divButton.addEventListener('click', CalculatorApp.changeOperatorDiv);
        CalculatorApp.mulButton.addEventListener('click', CalculatorApp.changeOperatorMul);
        CalculatorApp.clearButton.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.fetchResults = function () {
        var firstNum = CalculatorApp.firstNumber.value;
        var secondNum = CalculatorApp.secondNumber.value;
        if (firstNum !== '' && secondNum !== '') {
            var num1 = parseFloat(firstNum);
            var num2 = parseFloat(secondNum);
            var opr = CalculatorApp.operator.textContent.trim();
            var result = '';
            switch (opr) {
                case '+':
                    result = (num1 + num2).toString();
                    break;
                case '-':
                    result = (num1 - num2).toString();
                    break;
                case '/':
                    result = (num1 / num2).toString();
                    break;
                case '*':
                    result = (num1 * num2).toString();
                    break;
                default:
                    result = 'RESULT';
                    break;
            }
            CalculatorApp.resultButton.textContent = result;
        }
        else {
            CalculatorApp.resultButton.textContent = 'RESULT';
        }
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operator.textContent = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operator.textContent = '-';
    };
    CalculatorApp.changeOperatorDiv = function () {
        CalculatorApp.operator.textContent = '/';
    };
    CalculatorApp.changeOperatorMul = function () {
        CalculatorApp.operator.textContent = '*';
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.textContent = '+';
        CalculatorApp.resultButton.textContent = 'RESULT';
    };
    return CalculatorApp;
}());
var calcApp = new CalculatorApp();
