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
    if (operator === "plusBtn") {
        return add(a, b);
    } else if (operator === "minusBtn") {
        return subtract(a, b);
    } else if (operator === "multiplyBtn") {
        return multiply(a, b);
    } else if (operator === "divideBtn") {
        return divide(a, b);
    } else {
        return "Error";
    }
}

const calculator = {
    lastPressed: null
}

function displayDigit(e) {
    const display = document.querySelector(".main-display");
    display.textContent += e.target.textContent;    
}

digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(button => {
    button.addEventListener("click", e => {
        displayDigit(e);
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

operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", e => {
        displayOperator(e);
        calculator.lastPressed = "operator";
    });
});