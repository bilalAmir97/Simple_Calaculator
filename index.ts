#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the Operator to perform Operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","Modulus"],
  },
]);

if(answer.Operator==="Addition"){
    console.log(`Your Answer is ${answer.firstNumber+answer.secondNumber}`)
}
else if(answer.Operator==="Subtraction"){
    console.log(`Your Answer is ${answer.firstNumber-answer.secondNumber}`)
}
else if(answer.Operator==="Multiplication"){
    console.log(`Your Answer is ${answer.firstNumber*answer.secondNumber}`)
}
else if(answer.Operator==="Division"){
    console.log(`Your Answer is ${answer.firstNumber/answer.secondNumber}`)
}
else if(answer.Operator==="Modulus"){
    console.log(`Your Answer is ${answer.firstNumber%answer.secondNumber}`)
}
else
console.log("Please Select Valid Operator");

console.log("THE END");