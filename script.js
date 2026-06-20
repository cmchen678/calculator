"use strict";

let num1 = '';
let num2 = '';
let operator;
let result = '';
let display = document.querySelector('#display');
const btn = document.querySelectorAll('.num-btn, .operator-btn');
const numBtn = document.querySelectorAll('.num-btn');
const operatorBtn = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');

numBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const pressedBtn = e.target.dataset.num;
        if (num1 === '') {
            num1 += pressedBtn;
        } else if (num1 !== '' && operator !== undefined) {
            num2 += pressedBtn;
        }
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        if (num1 === '') return;
        else if (num1 !== '' && operator === undefined && num2 === '') {
            const pressedBtn = e.target.dataset.num;
            operator = pressedBtn;
        } else if (num1 !== '' && operator !== undefined & num2 !== '') {
            operate(num1, num2, operator);
            const pressedBtn = e.target.dataset.num;
            operator = pressedBtn; 
        } else {
            const pressedBtn = e.target.dataset.num;
            operator = pressedBtn; 
        }
    })
})

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        const pressedBtn = e.target.dataset.num;
        if (operator === undefined) {
            display.textContent = num1;
        } else {
        display.textContent = `${num1}${operator}${num2}`;
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

function operate(a, b, operator) {
    switch (operator) {
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
    }
}