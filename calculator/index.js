let num1 = 10;
let num2 = 9;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let result = document.getElementById('sum-el');

// Create four functions: add(), subtract(), divide(), multiply()

function add() {
    sum = num1 + num2;
    result.textContent = 'Sum: ';
    result.textContent += sum;
}

function subtract() {
    difference = num1 - num2;
    result.textContent = 'Difference: ';
    result.textContent += difference;
}

function divide() {
    quotient = num1 / num2;
    result.textContent = 'Quotient: ';
    result.textContent += quotient;
}

function multiply() {
    product = num1 * num2;
    result.textContent = 'Product: ';
    result.textContent += product;
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
