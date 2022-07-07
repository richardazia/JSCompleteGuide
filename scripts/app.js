const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    previousResult,
    operationNumber,
    newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: previousResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResults(calculationType) {
    /*
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    }
    */

    if(calculationType === 'ADD' ||
    calculationType === 'SUBTRACT' ||
    calculationType === 'MULTIPLY' ||
    calculationType === 'DIVIDE'
    ) {
        const enteredNumber = getUserNumberInput();
        const initialResult = currentResult;
        let mathsOperator;
        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathsOperator = '+';
        } else if (calculationType === 'SUBTRACT') {
            currentResult -= enteredNumber;
            mathsOperator = '-';
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathsOperator = '*';
        } else if (calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathsOperator = "/";
        }
        createAndWriteOutput(mathsOperator, initialResult, enteredNumber);
        writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    }
}

function add() {
    calculateResults('ADD');
}

function subtract() {
    calculateResults('SUBTRACT');
}

function multiply() {
    calculateResults('MULTIPLY');
}

function divide() {
    calculateResults('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
console.log(add);


/*
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
*/