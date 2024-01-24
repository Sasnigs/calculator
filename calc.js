function sum() {
    calculation = eval(calculation);
    localStorage.setItem('calculation', calculation);
    document.querySelector('.js-calculation').innerHTML = `${calculation}`;
}

function clearSum() {
    document.querySelector('.js-calculation').innerHTML = `${calculation}`;
}

// console.log(localStorage.getItem('calculation'));
let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-calculation').innerHTML = `${calculation}`;

function updateCalculation(operation) {
    if (calculation.length < 14) {
        calculation += operation;
        document.querySelector('.js-calculation').innerHTML = `${calculation}`;
    }
}