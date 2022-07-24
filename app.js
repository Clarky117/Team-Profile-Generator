const inquirer = require('inquirer');

const Manager = require('./src/employees/manager');
const Engineer = require('./src/employees/engineer');
const Intern = require('./src/employees/intern');
const generateHTML = require('./src/generate-html/generate-html');
const fs = require('fs');
const path = require('path');

const employees = [];
const outputtedHtmlFile = path.join(__dirname, 'output', 'team.html')


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
        // id, name, email
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
        
        // manager
        // office number
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'number',
            when: (answers) => answers.role === managerRole,
        },
        
        // engineer
        // github
        {
            type: 'input',
            message: `What is the Engineer's github username?`,
            name: 'github',
            when: (answers) => answers.role === engineerRole,
        },
        
        // intern
        // school
        {
            type: 'input',
            message: `What is the Intern's school?`,
            name: 'school',
            when: (answers) => answers.role === internRole,
        },
        
        // keep asking to add new employee until we terminate
        {
            type: 'confirm',
            message: 'Would you like the add another Employee?',
            name: 'add',
        }

    ])
    
    // once we have the employee, store the data
    // check for the role
    // create employee object based on said role and push to array
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


    
    // once the user terminates, we will generate the html based on all the employees collected
    if(!answers.add){
        // generate html
        const html = generateHTML(employees);
        // use fs
        fs.writeFileSync(outputtedHtmlFile, html, 'utf8');        

    }else{
        await main();
    }

}

main();

// generate team profile