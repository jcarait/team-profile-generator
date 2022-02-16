// import employee class

const Employee = require("./employeeClass");

//manager class extends from Employee using constructor function
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        
    //super calls objects of parent class - Employee
        super (name, id, email)

        this.officeNumber = officeNumber;
    }
}

    //override employee role from original class

const getRole = () => "Manager";

// export class for use
module.exports = Manager;