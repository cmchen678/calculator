"use strict";

let num1 = '';
let num2 = '';
let operator;
let result = '';
let display = document.querySelector('#display');
const btn = document.querySelectorAll('.num-btn, .operator-btn');
const numBtn = document.querySelectorAll('.num-btn');
const operatorBtn = document.querySelectorAll('.operator-btn');
const decimalBtn = document.querySelector('.decimal-btn');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');

numBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const pressedBtn = e.target.dataset.num;
        if (num1 === '') {
            num1 = pressedBtn;
            display.textContent = num1;
        } else if (operator !== undefined) {
            num2 += pressedBtn;
            display.textContent = `${num1}${operator}${num2}`;
        } else if (num1 === result && operator === undefined) {
            num1 = pressedBtn;
            display.textContent = num1;
        } else if (num1 !== '') {
            num1 += pressedBtn;
            display.textContent = num1;
        }
    })
})

decimalBtn.addEventListener('click', (e) => {
    const pressedBtn = e.target.dataset.num;
    if (num1.toString().includes('.') && operator === undefined) {
        return;
    } else if (num2.toString().includes('.')) {
        return;
    } else if (num1 === '') {
        num1 = pressedBtn;
        display.textContent = num1;
    } else if (operator !== undefined) {
        num2 += pressedBtn;
        display.textContent = `${num1}${operator}${num2}`;
    } else if (num1 === result && operator === undefined) {
        num1 = pressedBtn;
        display.textContent = num1;
    } else if (num1 !== '') {
        num1 += pressedBtn;
        display.textContent = num1;
    }
})

operatorBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const pressedBtn = e.target.dataset.num;
        if (num1 === '') return;
        else if (num1 !== '' && operator === undefined && num2 === '') {
            operator = pressedBtn;
            display.textContent = `${num1}${operator}`;
        } else if (num1 !== '' && operator !== undefined & num2 !== '') {
            operate(num1, num2, operator);
            operator = pressedBtn;
            display.textContent = `${num1}${operator}`;
        } else {
            operator = pressedBtn;
            display.textContent = `${num1}${operator}`;
        }
    })
})

equalsBtn.addEventListener('click', () => {
    if (num2 === '') return;
    operate(num1, num2, operator);
})

clearBtn.addEventListener('click', () => {
    display.textContent = '0';
    reset();
})

function reset() {
    num1 = '';
    num2 = '';
    operator = undefined;
    result = '';
}

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (b === '0') {
        return 'Error: Division by zero';
    }
    return parseFloat(a) / parseFloat(b);
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }

    if (result === 'Error: Division by zero') {
        display.textContent = 'Error: Division by zero';
        reset();
    } else {
        display.textContent = result;
        num1 = result;
        num2 = '';
        operator = undefined;
    }
}