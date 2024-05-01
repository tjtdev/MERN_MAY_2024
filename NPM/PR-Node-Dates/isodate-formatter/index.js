// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));

// // Combine styled and normal strings
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// console.log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// const dayjs = require('dayjs') // cannot have type: module
// import dayjs from 'dayjs'

// https://github.com/iamkun/dayjs/

import {
    hello,
    displayDate,
    normalDate,
    slashDate,
    xTimeAgo
} from "./utils/formatDate.js";
console.log(hello("john"))

// const dateNow = new Date();
// console.log(dateNow)
// displayDate(new Date())
console.log(
    normalDate(new Date())
)
console.log(
    slashDate(new Date())
)
// date from 1 month ago
const d = new Date();
// And set the month to a month before
d.setMonth(d.getMonth()-2);

console.log(
    xTimeAgo(d)
)