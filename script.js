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