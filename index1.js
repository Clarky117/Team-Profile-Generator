// import generateHTML and inquirer etc
const inquirer = require('inquirer'); 
// use filesystem to export with __dirname

// ask questions using inquirer
// create functions for manager and engineer

// function managerPrompt(){}
inquirer.prompt([
    // team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        message: `Team manager's name?`,
        name: 'manager-name',
    },
    {
        type: 'input',
        message: `Employee id?`,
        name: 'id',   
    },
    {
        type: 'email',
        message: `Employee id?`,
        name: 'email',   
    },
])



// when i receive data from the questions, use them to populate my template