// Packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions start
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => ( titleInput ? true : console.log('Please enter the title of your project!'))
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        validate: descriptionInput => ( descriptionInput ? true : console.log('Please enter the title of your project!'))
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
        type: 'input',
        name: 'email',
        message: 'Provide your email address: ',
        when: ({ contactConfirm }) => ( contactConfirm ? true : false )
    }
];
// Questions end

// Function to write Markdown file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) {
            throw new Error(err);
        } else {
            console.log('README completed!');
        }
    });
};

function init(questions) {
    if (!questions.tableOfContents) {
        questions.tableOfContents = [];
    }

    return inquirer.prompt(questions);
};

// Function call to initialize app
init(questions)
    .then(answers => generateMarkdown(answers))
    .then(data => writeToFile('../README.md', data))
    .catch(err => console.log(err));
