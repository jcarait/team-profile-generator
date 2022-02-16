// import employee class

const Employee = require("./employeeClass");

//Intern class extends from Employee using extend and constructor function
class Intern extends Employee {
    constructor (name, id, email, school) {
        
    //super calls objects of parent class - Employee
        super (name, id, email)

        this.school = school;
    }

    //override employee role from original class

getSchool = () => this.school;
getRole = () => "Intern";
}

    

// export class for use
module.exports = Intern;