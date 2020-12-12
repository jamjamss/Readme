const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            name: "ReadMe",
            message: "Name of project"
        }, 
        {
            type: "list",
            name: "description and installation",
            message: "testing this",
            choices: [
                "description",
                "installation",
                "etc"
            ]
        }
    ])
    .then(response => {
        console.log("correct!")

    })
    .catch(err => {
        console.log("try again", err)

    })