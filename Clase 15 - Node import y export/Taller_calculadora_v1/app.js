const calculadora = require('./math.js');
//const chalk = require ("chalk");

console.log(` Suma de 10 y 5= ${calculadora.sumar(10,5)}`);
console.log(` Resta de 28 y 8= ${calculadora.restar(20,8)}`);
console.log(` Multiplicación de 6 y 7= ${calculadora.multiplicar(6,7)}`);
console.log(` División de 15 y 3= ${calculadora.dividir(15,3)}`);
console.log(` División de 15 y 3= ${calculadora.dividir(15,0)}`);

//console.log(chalk.blue('Hello world!'));