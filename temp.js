import chalk from 'chalk';

let n = 0;

setInterval(() => {
console.log(chalk.magenta(chalk.italic(n)));
n = n + 1;
}, 100)
