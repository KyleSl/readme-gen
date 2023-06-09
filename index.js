// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the name of your project: ',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Enter a description of your project: ',
        name: 'projectDesc'
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project: ',
        name: 'projectInstall'
    },
    {
        type: 'input',
        message: 'Enter usage instructions for your project: ',
        name: 'projectUsage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project: ',
        name: 'projectContr'
    },
    {
        type: 'input',
        message: 'Enter testing instructions for your project: ',
        name: 'projectTest'
    },
    {
        type: 'input',
        message: 'Enter your gitHub username: ',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'Enter your e-mail: ',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Choose a license: ',
        name: 'projectLicense',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Boost Software License', 'Unlicense', 'Other']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
