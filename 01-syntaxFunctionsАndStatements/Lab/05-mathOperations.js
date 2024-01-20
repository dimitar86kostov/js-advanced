function mathOperations(num1, num2, operand) {


    if (operand == '+') {
        console.log(num1 + num2);

    } else if (operand == '-') {
        console.log(num1 - num2);

    } else if (operand == '*') {
        console.log(num1 * num2);

    } else if (operand == '/') {
        console.log(num1 / num2);

    } else if (operand == '%') {
        console.log(num1 % num2);

    } else if (operand == '**') {
        console.log(num1 ** num2);

    }

}
mathOperations(5, 6, '+')