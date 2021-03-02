const readLineSync = require('readline-sync');
const chalk = require('chalk');

const userName = readLineSync.question(chalk.green("Please enter your name: "));

console.log(chalk.blue("\nWelcome, ", userName));

const userDOB = readLineSync.question(chalk.yellow.underline("\nPlease enter your DOB in format DD/MM/YYYY: "));


let userDD = "";
let userMM = "";
let userYYYY = "";
function validateDate(userDOB)
{
  userDD = parseInt(userDOB.substring(1,3));
  userMM = parseInt(userDOB.substring(4,6));
  userYYYY = parseInt(userDOB.substring(6));
  if (isNaN(userDD) || isNaN(userMM) || isNaN(userYYYY))
  {
    console.log(chalk.bold.red(userDOB,"is not a valid birthdate"));
    return false;
  }
  return true;
}

function checkDateLeapYear(year)
{
  if(((year%4) === 0) && ((year%100 != 0) || (year%400 === 0)))
  {
    console.log(chalk.bold.cyan("\nYou ARE born in leap year! Share this on your social media! "));
  }
  else 
  {
    console.log(chalk.bold.magenta("\nYou are NOT born in leap year"));
  }
}

if(validateDate(userDOB)===true)
  {
    checkDateLeapYear(userYYYY);
  }