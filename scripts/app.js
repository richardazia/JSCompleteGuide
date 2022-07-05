'use strict'
const defaultResult = 0;
let currentResult = defaultResult;
let addBtn;

function add(num1, num2) {
    const result = num1 + num2;
    console.log(result);
    return result;
}

add(5,6);
add(12, 73);
// const additionResult = add(12,43);
add(320, 180);

// When we write an event listener we call the function without () because the function is called when it is needed.
// Adding () would execute add immediately.
addBtn.addEventListener('click', add);

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;

outputResult(currentResult, calculationDescription);
