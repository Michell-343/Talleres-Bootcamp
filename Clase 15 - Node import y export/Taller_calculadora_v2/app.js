import {sumar, restar, dividir, multiplicar} from './math.js';
import chalk from "chalk";
console.log(chalk.bgBlue("Calculadora de colorcitos"))
console.log(chalk.blue(` Suma de 10 y 5= ${sumar(10,5)}`));
console.log(chalk.green(` Resta de 28 y 8= ${restar(20,8)}`));
console.log(chalk.white(` Multiplicación de 6 y 7= ${multiplicar(6,7)}`));
console.log(chalk.magenta(` División de 15 y 3= ${dividir(15,3)}`));
console.log(chalk.yellow(` División de 15 y 3= ${dividir(15,0)}`));

