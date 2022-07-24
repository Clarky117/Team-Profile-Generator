// import fs and path
const fs = require('fs');
const path = require('path');

const cardTemplatePath = path.join(__dirname, 'templates', 'card.html');
const mainTemplatePath = path.join(__dirname, 'templates', 'template.html');



// create a function to generate a card body html

function createHtmlCard(employee){
    
    // read from card.html template
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf8');
    // replace placeholders with received data
    let replacedCard = cardTemplate.replace('{{name}}', employee.getName())
        .replace('{{role}}', employee.getRole())
        .replace('{{id}}', employee.getId())
        .replace('{{email}}', employee.getEmail());

        if (employee.getRole() === 'Manager'){
            replacedCard = replacedCard.replace('{{attribute_key}}', 'Office Number: ')
                .replace('{{attribute_value}}', employee.getOfficeNumber());
        }

        if (employee.getRole() === 'Engineer'){
            replacedCard = replacedCard.replace('{{attribute_key}}', 'Github: ')
                .replace('{{attribute_value}}', employee.getGithub());
        }

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

    // then, join cards into 1 string
    // replace {{body}} with this generatedHTML string
    return mainTemplate.replace('{{body}}', cards);

}

// export function

module.exports = generateHTML;