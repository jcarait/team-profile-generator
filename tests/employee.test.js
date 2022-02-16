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

//gets name from getName()
test('')