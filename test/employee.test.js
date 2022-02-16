// import Employee class

const Employee = require("../lib/employeeClass");

describe("Employee", () => {

    describe("Initialisation", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
        const employee = new Employee("John Doe", 123, "john.doe@mail.com");

        expect(employee.name).toEqual("John Doe");
        expect(employee.id).toEqual(123);
        expect(employee.email).toEqual("john.doe@mail.com");
        });
    });
});

describe("getFunctions", () => {

    it("should return employee name", () => {
        const name = "John Doe"
        const employee = new Employee("John Doe", 123, "john.doe@mail.com");

        expect(employee.getName()).toEqual(name);
    });

    //test get id from getID()
    it("test to get and return employee ID", () => {
        const id = 123
        const employee = new Employee("John Doe", 123, "john.doe@mail.com");

        expect(employee.getId()).toEqual(id);
    });

    // test get emails from getEmail()
    test("to get and return employee email", () => {
        const email = "john.doe@mail.com";
        const employee = new Employee("John", 123, "john.doe@mail.com");
        const getEmail = employee.getEmail()

        expect(getEmail).toEqual(email);
    });

    // test get role from getRole()
    test("to get and return employee role", () => {
        const role = "Employee"
        const employee = new Employee("John", 123, "john.doe@mail.com");

        expect(employee.getRole()).toBe(role);
    });
});
