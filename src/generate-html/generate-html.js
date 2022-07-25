// import fs and path
const fs = require('fs');
const path = require('path');
// identifying helper templates
const cardTemplatePath = path.join(__dirname, 'templates', 'card.html');
const mainTemplatePath = path.join(__dirname, 'templates', 'template.html');

// create a function to generate a card body html
function createHtmlCard(employee){    
    // read from card.html template
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf8');
    // replace placeholders with received data
    // user can email inputted email address with default email client
    let replacedCard = cardTemplate.replace('{{name}}', employee.getName())
        .replace('{{role}}', employee.getRole())
        .replace('{{id}}', employee.getId())
        .replace('{{email}}', `<a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>`);
        // series of if statements to fill unique data of each role
        if (employee.getRole() === 'Manager'){
            replacedCard = replacedCard.replace('{{attribute_key}}', 'Office Number: ')
                .replace('{{attribute_value}}', employee.getOfficeNumber());
        }
        // user can visit github user
        if (employee.getRole() === 'Engineer'){
            replacedCard = replacedCard.replace('{{attribute_key}}', 'Github: ')
                .replace('{{attribute_value}}', `<a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`);
        }
        // interns school
        if (employee.getRole() === 'Intern'){
            replacedCard = replacedCard.replace('{{attribute_key}}', 'School: ')
                .replace('{{attribute_value}}', employee.getSchool());
        }

        return replacedCard;
    }

// create a function to generate a html file from the template i make
function generateHTML(employees){
    // read from template.html
    const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf8');
    // loop through employee array and generate a card for each employee
    const cards = employees.map(createHtmlCard).join('');
    console.log('Generated Successfully');
    // then, join cards into 1 string
    // replace {{body}} with this generatedHTML string
    return mainTemplate.replace('{{body}}', cards);
}
// export function
module.exports = generateHTML;