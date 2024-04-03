// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
  console.log('README.md successfully generated!');
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      console.log('Data received:', data); // Add logging statement
      const markdown = generateMarkdown(data);
      console.log('Generated markdown:', markdown); // Add logging statement

      if (markdown) {
        fs.writeFileSync('README.md', markdown);
        console.log('README.md successfully generated!');
      } else {
        console.error('Error: Generated markdown is undefined.');
      }
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();

