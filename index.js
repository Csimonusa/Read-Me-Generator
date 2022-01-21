const inquirer = require("inquirer")
const fs = require("fs")
const generateMd = require("./Read-Me")

inquirer
  .prompt([
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubUser'
      },
      {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
      },
      {
        type: 'input',
        message: "What is your project's description?",
        name: 'description'
      },
      {
        type: 'confirm',
        message: 'Include table of contents?',
        name: 'confirmToc',
        default: true
      },
      {
        type: 'input',
        message: 'Enter the steps for installing your project.',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'How can your project be used?',
        name: 'usage'
      },
      {
        type: 'list',
        message: 'Select a license for your project',
        name: 'license',
        choices: ["MIT", "ISC"],
        default: ["MIT"],
      },
      {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contributing'
      },
      {
        type: 'input',
        message: 'How can others test your project?',
        name: 'test'
      },
      {
        type: 'input',
        message: 'Enter an email so others can contact you regarding this project.',
        name: 'questions'
      },
  ])

  .then((answers) => {
      fs.writeFile('README.md', generateMd(answers), (err) =>
      err ? console.log(err) : console.log(`Success! your README is now created`))
    })