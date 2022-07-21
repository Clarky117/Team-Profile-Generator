const inquirer = require('inquirer');

const Manager = require('./src/employees/manager');
const Engineer = require('./src/employees/engineer');
const Intern = require('./src/employees/intern');

const employees = [];

async function main () {

    const managerRole = 'manager';
    const engineerRole = 'engineer';
    const internRole = 'intern';

    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: `What is the Employee's role?`,
            name: 'role',
            choices: [
                managerRole, engineerRole, internRole,
            ]
        },
        {
            type: 'input',
            message: 'What is the Employee ID?',
            name: 'id',            
        },
        {
            type: 'input',
            message: 'What is the Employee Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the Employee's name?`,
            name: 'name',
        },

        {
            type: 'input',
            message: 'What is the office number?',
            name: 'number',
            when: (answers) => answers.role === managerRole,
        },

        {
            type: 'input',
            message: `What is the Engineer's github username?`,
            name: 'github',
            when: (answers) => answers.role === engineerRole,
        },

        {
            type: 'input',
            message: `What is the Intern's school?`,
            name: 'school',
            when: (answers) => answers.role === internRole,
        },

        {
            type: 'confirm',
            message: 'Would you like the add another Employee?',
            name: 'add',
        }

    ])

    // once we have the employee, store the data
    // check for the role
    if(answers.role === managerRole){
        employees.push(new Manager(answers.id, answers.email, answers.name, answers.number));
    }

    if(answers.role === engineerRole){
        employees.push(new Engineer(answers.id, answers.email, answers.name, answers.github));
    }

    if(answers.role === internRole){
        employees.push(new Intern(answers.id, answers.email, answers.name, answers.school));
    }

console.log(employees)

    // create employee object based on said role

    // add employees to the above empty array employees
    
    // once the user terminates, we will generate the html based on all the employees collected
    if(!answers.add){
        // generate html
    }else{
        await main();
    }

}


main();



// generate team profile

// keep asking to add new employee until we terminate

// id, name, email

// manager
// office number

// engineer
// github

// intern
// school
