const inquirer = require('inquirer'); 

// inquirer.prompt([
//     {
//         type: 'input',
//         message: `Team manager's name?`,
//         name: 'manager-name',
//     },
//     {
//         type: 'input',
//         message: `Employee id?`,
//         name: 'id',   
//     },
//     {
//         type: 'email',
//         message: `Employee id?`,
//         name: 'email',   
//     },
// ])

function initialise() {

    function engineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            }
        ]).then((answer) => {
            console.log('Employee name:', answer);
            addNewEmployee()
        })
    }

    function intern() {
        console.log('1');
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            }
        ]).then((answer) => {
            console.log('Intern name:', answer);
            addNewEmployee()
        })
    }

    function addNewEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'How would you like to proceed',
                name: 'proceed',
                choices: [
                    'Engineer', 'Intern', 'Terminate',
                ]
            }
        ]).then((answer) => {
            console.log(answer);
            if (answer.proceed === 'Engineer') {
                console.log(3)
                // console.log('Engineer');
                engineer()
                // call function engineer
            }
            if (answer.proceed === 'Intern') {
                // console.log('Intern');
                
                intern()
            }
            if (answer.proceed === 'Terminate') {
                console.log('Terminate');
                return;
            }
        })
    }

    function manager() {
        inquirer.prompt([
            {
                type: 'input',
                message: `Team manager's name?`,
                name: 'manager-name',
            }
        ]).then((answers) => {
            console.log(answers);
            addNewEmployee()
        })
    }


    

    manager()

    // engineer or an intern or to finish
}

initialise()