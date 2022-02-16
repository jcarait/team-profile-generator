// import employee class

const Employee = require('./employeeClass');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        super (name, id, email)

        this.officeNumber = officeNumber;
    }
}

    //override employee role from original class

const getRole = () => 'Manager';

// export class for use
module.exports = Manager;