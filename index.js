const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

// Internal modules
const generateMarkdown = require("./generatemarkdownfile");


const promptUser = 

    [
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
                    name: "ISC"
                },
                {
                    name: "Apache"
                },
                {
                    name: "Unlicense"
                }
            ]

        }
    ]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    });
}

function init() {
    inquirer.prompt(promptUser).then((data) => {
        let markDown = generateMarkdown(data);
        let license = "";

        console.log(markDown);
        writeToFile("README.md", markDown);
        // console.log("Success! Your README.md file has been generated");
    });
}

// function call to initialize program
init();