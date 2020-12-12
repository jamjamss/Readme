const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "Title",
            message: "Name of project"
        }, 
        {
            type: "input",
            name: "description",
            message: "Describe this project",
           
        },
        {
            type: "input",
            name: "Installation instruction",
            message: "Installations",
           
        },
        {
            type: "input",
            name: "Usage information",
            message: "Usage",
           
        },
        {
            type: "input",
            name: "Contribution guidelines",
            message: "Contribution",
           
        },
        {
            type: "input",
            name: "Test instruction",
            message: "Test",
           
        },
        {
            type: "checkbox",
            name: "License",
            message: "License",
            choices: [

                {
                    name: "MIT", 
                },
                {
                    name:"ISC"
                }, 
                {
                    name: "Apache"
                },
                { 
                    name:"Unlicense"
                }
            ]
          
        }
    ])
    .then(response => {
        console.log("correct!", response)
        fs.writeFile("readme.json", JSON.stringify(response, null, 4), {}, () => console.log("file written!"))

    })
    .catch(err => {
        console.log("try again", err)

    })