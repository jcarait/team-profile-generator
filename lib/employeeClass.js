// employee class

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

getName = () => this.name;
getId = () => this.id;
getEmail = () => this.email;
getRole = () => "Employee";
}

// return values from inquirer input



// export class for use
module.exports = Employee