// import Employee class

const { hasUncaughtExceptionCaptureCallback } = require("process");
const Employee = require("../lib/employeeClass");

// creates employee object
test("creates an object named Employee", () => {
    const employee = new Employee("John", 123, "john.doe@mail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//test get name from getName()
test("test get employee name", () => {
    const employee = new Employee("John", 123, "john.doe@mail.com");

    expect(employee.getName()).toEqual(expect.any(String));
})

//test get id from getID()
test("test get employee ID", () => {
    const employee = new Employee("John", 123, "john.doe@mail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

// test get emails from getEmail()
test("test get employee email", () => {
    const employee = new Employee("John", 123, "john.doe@mail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// test get role from getRole()
test("test get employee role", () => {
    const employee = new Employee("John", 123, "john.doe@mail.com");

    expect(employee.getRole()).toEqual("Employee");
});

