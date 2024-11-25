let num1 = +prompt("Сан жаз");
let tanba = prompt('Таңба енгіз');
let num2 = +prompt("Сан жаз");


function calculator (a, b, c) {
    switch (c) {
        case '+':
            return a + b
            break;
        case '-':
            return a - b
            break;
        case '*':
            return a * b
            break;
        case '/':
            return a / b
            break;
        default:
            

    } 
    
}
alert(calculator(num1, num2, tanba));