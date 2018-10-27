class CalculatorApp{
    private static firstNumber:HTMLInputElement;
    private static secondNumber:HTMLInputElement;
    private static operator:HTMLButtonElement;
    private static equalsButton:HTMLButtonElement;
    private static resultButton:HTMLButtonElement;
    private static plusButton:HTMLButtonElement;
    private static minusButton:HTMLButtonElement;
    private static divButton:HTMLButtonElement;
    private static mulButton:HTMLButtonElement;
    private static clearButton:HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addListeners();
    }

    public static initialize(){
        CalculatorApp.firstNumber = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumber = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operator = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equalsButton = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.resultButton = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plusButton = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButton = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.divButton = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.mulButton = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clearButton = document.querySelector('#clear-button') as HTMLButtonElement;
    }

    public static addListeners(){
        CalculatorApp.equalsButton.addEventListener('click',CalculatorApp.fetchResults);
        CalculatorApp.plusButton.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButton.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.divButton.addEventListener('click',CalculatorApp.changeOperatorDiv);
        CalculatorApp.mulButton.addEventListener('click',CalculatorApp.changeOperatorMul);
        CalculatorApp.clearButton.addEventListener('click',CalculatorApp.clearAll);
    }
    public static fetchResults(){
        let firstNum = CalculatorApp.firstNumber.value;
        let secondNum = CalculatorApp.secondNumber.value;

        if(firstNum !== '' && secondNum !== ''){
            let num1 = parseFloat(firstNum);
            let num2 = parseFloat(secondNum);
            let opr = CalculatorApp.operator.textContent.trim();
            let result = '';
            switch(opr){
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
        else{
            CalculatorApp.resultButton.textContent = 'RESULT';
        }
    }
    public static changeOperatorPlus(){
        CalculatorApp.operator.textContent = '+';
    }
    public static changeOperatorMinus(){
        CalculatorApp.operator.textContent = '-';
    }
    public static changeOperatorDiv(){
        CalculatorApp.operator.textContent = '/';
    }
    public static changeOperatorMul(){
        CalculatorApp.operator.textContent = '*';
    }
    public static clearAll(){
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.textContent = '+';
        CalculatorApp.resultButton.textContent = 'RESULT';
    }
}

let calcApp = new CalculatorApp();