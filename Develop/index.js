// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md successfully generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
