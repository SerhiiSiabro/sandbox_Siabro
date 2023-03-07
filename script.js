const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!');
let result;
let fullNameOfOperation;

if (operation === '+' || '-' || '/' || '*' || 'pow') {
    const firstNumber = Number(prompt('Enter, please the first number'));
    const secondNumber = Number(prompt('Enter, please the second number'));
    if (operation === '+') {
        fullNameOfOperation = 'Sum: ';
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        fullNameOfOperation = 'Diff: ';
        result = firstNumber - secondNumber;
    } else if (operation === '/') {
        fullNameOfOperation = 'Div: ';
        result = firstNumber / secondNumber;
    } else if (operation === '*') {
        fullNameOfOperation = 'Mult: ';
        result = firstNumber * secondNumber;
    } else if (operation === 'pow') {
        fullNameOfOperation = 'Pow: ';
        result = Math.pow(firstNumber, secondNumber);
    }
    alert (`${fullNameOfOperation + firstNumber} ${operation} ${secondNumber} = ${result}`);
} else if (operation === 'cos' || 'sin') {
    const number = Number(prompt('Enter, please the number'));
    if (operation === 'cos') {
        fullNameOfOperation = 'cos(';
        result = Math.cos(number);
    } else if (operation === 'sin') {
        fullNameOfOperation = 'sin(';
        result = Math.sin(number);
    }
    alert (`${fullNameOfOperation + number}) = ${result}`);
} else {
        alert ("This is an invalid operator!");
}




// const operation = prompt('Hello!\nChoose operator (+, -, * , /, cos, sin, pow)!')

// // if (operation != '+' ||  '-' || '*' || '/' || 'cos' || 'sin' || 'pow') {
// //     alert ('Operator is invalid!')
// // }

// if (operation == '+' && '-' ) {
//     let firstNumber = Number(prompt('Enter, please the first number1'));
//     let secondNumber = Number(prompt('Enter, please the second number2'));
//     if (operation === '-') {
//         const result = firstNumber - secondNumber;
//         alert ('Diff: ' + firstNumber + ' - ' + secondNumber + ' = ' + result);
//     } else if (operation === '+') {
//         const result = firstNumber + secondNumber;
//         alert ('Sum: ' + firstNumber + ' + ' + secondNumber + ' = ' + result);
//     }  
// }  else if (operation == '*') {
//     let firstNumber = Number(prompt('Enter, please the first number'));
//     let secondNumber = Number(prompt('Enter, please the second number'));
//     const resultMult = firstNumber * secondNumber;
//     alert ('Mult: ' + firstNumber + ' * ' + secondNumber + ' = ' + resultMult);
// } else if (operation == '/') {
//     let firstNumber = Number(prompt('Enter, please the first number'));
//     let secondNumber = Number(prompt('Enter, please the second number'));
//     const resultDiv = firstNumber / secondNumber;
//     alert ('Div: ' + firstNumber + ' / ' + secondNumber + ' = ' + resultDiv);
// } else if (operation == 'cos') {
//     let number = Number(prompt('Enter, please the number'));
//     const cosNumber = Math.cos(number);
//     alert ('Cos(' + number + ') =' + cosNumber);
// } else if (operation == 'sin') {
//     let number = Number(prompt('Enter, please the number'));
//     const sinNumber = Math.sin(number);
//     alert ('Sin(' + number + ') =' + sinNumber);
// } else if (operation == 'pow') {
//     let firstNumber = Number(prompt('Enter, please the base number'));
//     let secondNumber = Number(prompt('Enter, please the exponent number'));
//     const resultPow = Math.pow(firstNumber, secondNumber);
//     alert ('Power(' + firstNumber + ',' + secondNumber +') =' + resultPow);
// } else {
//     alert ("This is an invalid operator!")
// }