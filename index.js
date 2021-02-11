// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    }
    // {
    //     type: 'input',
    //     name: 'table-of-contents'
    // },
    // {
    //     type: 'input',
    //     name: 'installation'
    // },
    // {
    //     type: 'input',
    //     name: 'usage'
    // },
    // {
    //     type: 'input',
    //     name: 'license'
    // },
    // {
    //     type: 'input',
    //     name: 'contributing'
    // },
    // {
    //     type: 'input',
    //     name: 'tests'
    // },
    // {
    //     type: 'input',
    //     name: 'questions-contact'
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init(questions)
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(pageMD => {
        return fs.writeFile('./dist/TEST.md', pageMD, err => {
            if (err) throw new Error(err);
            console.log(pageMD);
        })
    })
    .catch(err => {
        console.log(err);
    });
