// import employee class

const Employee = require("./employeeClass");

//Engineer class extends from Employee using extend and constructor function
class Engineer extends Employee {
    constructor (name, id, email, github) {
        
    //super calls objects of parent class - Employee
        super (name, id, email)

        this.github = github;
    }
}

    //override employee role from original class

const getGithub = () => this.github;
const getRole = () => "Engineer";

// export class for use
module.exports = Engineer;