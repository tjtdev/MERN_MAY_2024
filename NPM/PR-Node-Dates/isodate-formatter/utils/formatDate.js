import chalk from 'chalk';

// ============ main part =============
// import { add, subtract } from './improvedMathUtil.js';
// https://github.com/iamkun/dayjs/
import dayjs from "dayjs"
// var relativeTime = require('dayjs/plugin/relativeTime')
import relativeTime from 'dayjs/plugin/relativeTime.js';

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime)

export const hello = (firstName) => {
    console.log("hello " + firstName);
    return "we just said hello to " + firstName;
}
export const displayDate = (isoDate) => {
    console.log("isoDate ==> ", isoDate)
    console.log(dayjs(isoDate))
    // return dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display
}

// In formatDate.js, create and export function that takes an ISO take and returns a readable string as an output.

// Have a function for converting date formats to appear like "4 months ago"
export const xTimeAgo = isoDate => {
    return chalk.blue.bgRed.bold(dayjs().to(dayjs(isoDate)));
}

// Have a function for converting date formats to appear like "Thursday, January 21, 2023"
export const normalDate = isoDate => dayjs(isoDate).format('dddd, MMMM D, YYYY') // '25/01/2019'

// Have a function for converting date formats to appear like "01/21/2023"
export const slashDate = isoDate => dayjs(isoDate).format('DD/MM/YYYY') // '25/01/2019'
// Test each string format with at least five different dates
// In index.js, import your functions, run them, and log their outputs to the console
// Bonus: Log your output with different colors by installing chalk `npm install chalk`