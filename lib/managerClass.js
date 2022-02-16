// import employee class

const Employee = require("./employeeClass");

//manager class extends from Employee using constructor function
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        
    //super calls objects of parent class - Employee
        super (name, id, email)

        this.officeNumber = officeNumber;
    }
    
    getRole = () => "Manager";
}

    //override employee role from original class



// export class for use
module.exports = Manager;