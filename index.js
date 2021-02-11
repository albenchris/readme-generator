// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application? (Required)'
    }
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
    });
