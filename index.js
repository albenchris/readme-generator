const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    },
    {
        type: 'confirm',
        name: 'tableConfirm',
        message: 'Would you like to add a Table of Contents to your README?',
        default: false
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'What sections would you like in the Table of Contents? (Check all that apply)',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        when: ({ tableConfirm }) => ( tableConfirm ? true : false )
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for how to install your project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for how to use your project: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to apply to your project?',
        choices: ['MIT', 'ISC', 'GPL-v3', 'Apache-v2', 'none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you would like other developers to contribute to your project, provide guidelines for that process: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would people test your project?'
    },
    {
        type: 'confirm',
        name: 'contactConfirm',
        message: 'Can others reach out to you in case of questions?',
        default: false
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        when: ({ contactConfirm }) => ( contactConfirm ? true : false )
    },
    {
        type: 'confirm',
        name: 'emailConfirm',
        message: 'Would you like to provide an email as a form of contact?',
        default: false,
        when: ({ contactConfirm }) => ( contactConfirm ? true : false )
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address: ',
        when: ({ emailConfirm }) => ( emailConfirm ? true : false )
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    if (!questions.tableOfContents) {
        questions.tableOfContents = [];
    }

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
        })
    })
    .catch(err => {
        console.log(err);
    });
