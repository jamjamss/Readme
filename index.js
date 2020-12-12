const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            name: "ReadMe",
            message: "Name of project"
        }
    ])
    .then(response => {
        console.log("correct!")

    })
    .catch(err => {
        console.log("try again")

    })