// import employee class

const Employee = require('./employeeClass');

//Intern class extends from Employee using extend and constructor function
class Intern extends Employee {
    constructor (name, id, email, school) {
        
    //super calls objects of parent class - Employee
        super (name, id, email)

        this.school = school;
    }
}

    //override employee role from original class

const getSchool = () => this.school;
const getRole = () => 'Engineer';

// export class for use
module.exports = Intern;