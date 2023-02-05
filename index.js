import { suma, multiplica } from "./modulos/controller.js";
import chalk from 'chalk';


const suma1 = suma(1, 2);
console.log(suma1);

const suma2 = suma(4, 5);
console.log(suma2);

const multiplicacion = multiplica(suma1, suma2);
console.log(chalk.green(multiplicacion));

