//import team classes

const Manager = require('./lib/managerClass');
const Engineer = require('./lib/engineerClass');
const Intern = require('./lib/internClass');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

const team = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                nameInput ? true : false;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the manager's ID in numbers!")
                    return false
                } else {
                    return true
                }
            }
        },


    ])
}