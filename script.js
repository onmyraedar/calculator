function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "Error";
    }
}

const calculator = {
    lastPressed: null,
    currentNumber: "first",
    firstNumber: "",
    operator: "",
    secondNumber: "",
    updateCurrentNumber() {
        if (this.currentNumber === "first") {
            this.currentNumber = "second";
        } else if (this.currentNumber === "second") {
            this.currentNumber = "first";
        }
    }
}

function displayDigit(e) {
    const display = document.querySelector(".main-display");
    display.textContent += e.target.textContent;    
}

function saveDigit(e) {
    if (calculator.currentNumber === "first") {
        calculator.firstNumber += e.target.textContent;
    } else if (calculator.currentNumber === "second") {
        calculator.secondNumber += e.target.textContent;
    }
}

digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(button => {
    button.addEventListener("click", e => {
        if (calculator.lastPressed === "operator") {
            calculator.updateCurrentNumber();
        } else if (calculator.lastPressed === "equal-sign") {
            resetCalculator();
            resetDisplay();
        }
        displayDigit(e);
        saveDigit(e);
        console.log(calculator);
        calculator.lastPressed = "digit";
    });
});

function displayOperator(e) {
    const display = document.querySelector(".main-display");
    if (calculator.lastPressed === "digit") {
        display.textContent += e.target.textContent;
    } else if (calculator.lastPressed === "operator") {
        display.textContent = display.textContent.slice(0, -1);
        display.textContent += e.target.textContent;
    }
}

function saveOperator(e) {
    calculator.operator = e.target.textContent;
}

operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", e => {
        displayOperator(e);
        saveOperator(e);
        calculator.lastPressed = "operator";
    });
});

function displayResult(e) {
    const display = document.querySelector(".main-display");
    const smallDisplay = document.querySelector(".small-display");
    smallDisplay.textContent = `${calculator.firstNumber}${calculator.operator}${calculator.secondNumber}=`;
    const result = operate(parseInt(calculator.firstNumber), parseInt(calculator.secondNumber), calculator.operator);
    display.textContent = result;
}

equalButton = document.querySelector(".equal-sign");
equalButton.addEventListener("click", e => {
    displayResult(e);
    calculator.lastPressed = "equal-sign";
});

function resetCalculator() {
    calculator.firstNumber = "";
    calculator.operator = "";
    calculator.secondNumber = "";
    calculator.updateCurrentNumber();
}

function resetDisplay() {
    const display = document.querySelector(".main-display");
    const smallDisplay = document.querySelector(".small-display");
    display.textContent = "0";
    smallDisplay.textContent = "0";
}