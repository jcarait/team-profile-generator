//import team classes

const Manager = require('./lib/managerClass');
const Engineer = require('./lib/engineerClass');
const Intern = require('./lib/internClass');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

//array to store team data
const team = [];

//inquirer prompts from manager's details
const addManager = () => {
    console.log(`
    =================
    Build a team profile!
    =================
    `);
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is the manager of this team?",
            validate: nameInput => {
                //ternary operator: if nameInput exists then return true, else return false.
                nameInput ? true : false;
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID.",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Manager's ID must be numbers!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email address.",
            validate: emailInput => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                    return true
                } else {
                    console.log("Please enter a valid email address!")
                    return false
                }
            }
        },


    ])
};

const addEmployee = () => {
    console.log(`
    =================
    Add employees to the team
    =================
    `);

    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose an employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: "input",
            name: "name",
            message: `What is the name of the ${choices}`,
            validate: nameInput => {
                if (nameInput) { 
                    return true 
                } else {  
                    console.log("Please enter the manager's name!") 
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID.",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Manager's ID must be numbers!")
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email address.",
            validate: emailInput => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                    return true
                } else {
                    console.log("Please enter a valid email address!")
                    return false
                }
            }
        },


    ])

}