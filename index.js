const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

// Internal modules
const generatemarkdownfile = require("./generatemarkdownfile");


const promptUser = 

    [
        {
            type: "input",
            name: "title",
            message: "Name of project"
        },
        {
            type: "input",
            name: "description",
            message: "Describe this project",

        },
        {
            type: "input",
            name: "installation",
            message: "Installations",

        },
        {
            type: "input",
            name: "usage",
            message: "Usage",

        },
        {
            type: "input",
            name: "contributions",
            message: "Contribution",

        },
        {
            type: "input",
            name: "tests",
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

        },
        {
            type: "input",
            name: "github",
            message: "Please enter you Gibhub Username",
          },
          {
            type: "input",
            name: "email",
            message: "Please enter your email",
          },
        
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
        let markDown = generatemarkdownfile(data);
        let license = "";

        console.log(markDown);
        writeToFile("README.md", markDown);
        // console.log("Success! Your README.md file has been generated");
    });
}

// function call to initialize program
init();