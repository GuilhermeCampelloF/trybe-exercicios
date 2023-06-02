// Exercício 1
// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. 
// É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (num1 + num2)
// Subtração (num1 - num2)
// Multiplicação (num1 * num2)
// Divisão (num1 / num2)
// Módulo (num1 % num2)

let num1 = 7;
let num2 = 13;

let adicao = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let modulo = num1 % num2;

console.log('Adição: ' + adicao);
console.log('Subtração: ' + subtracao);
console.log('Multiplicação: ' + multiplicacao);
console.log('Divisão: ' + divisao);
console.log('Módulo: ' + modulo);

// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let valor1 = 10;
let valor2 = 20;

if (valor1 > valor2) {
    console.log(valor1 + ' é maior que ' + valor2);
} else if (valor2 > valor1) {
    console.log(valor2 + ' é maior que ' + valor1);
} else {
    console.log('Números iguais');
};

// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let number1 = 2;
let number2 = 8;
let number3 = 4;

if (number1 > number2 && number1 > number3) {
    console.log(number1 + ' é o maior número');
} else if (number2 > number1 && number2 > number3) {
    console.log(number2 + ' é o maior número');
} else if (number3 > number1 && number3 > number2) {
    console.log(number3 + ' é o maior número');
} else {
    console.log('Existem números iguais na operação')
};

// Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let angle1 = 30;
let angle2 = 90;
let angle3 = 60;

let triangle = angle1 + angle2 + angle3;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    console.log('Ângulo inválido');
} else if (triangle === 180) {
    console.log('true');
} else if (triangle != 180) {
    console.log('false');
};

// Exercício 5
// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

const num1 = 1;
const num2 = 2;
const num3 = 3;

let numpar = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    numpar = true;
}
console.log(numpar);