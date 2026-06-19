"use strict";

let num1;
let num2;
let operator;

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

function getNum() {

}

function operate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            result = divide(num1, num2);
            break;
        default:
            return 'Error: Invalid operator';
    }

    return result;
}

console.log(operate(50, 3, '*'));