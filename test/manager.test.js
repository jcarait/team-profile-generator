// import manager class

const Manager = require("../lib/managerClass");

describe("Manager", () => {

    describe("Initialisation", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 0400111222);

        expect(manager.name).toEqual("John Doe");
        expect(manager.id).toEqual(123);
        expect(manager.email).toEqual("john.doe@mail.com");
        expect(manager.officeNumber).toEqual("0400111222");
        });
    });
});

describe("getFunctions", () => {

    it("should return manager name", () => {
        const name = "John Doe"
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 0400111222);

        expect(manager.getName()).toEqual(name);
    });

    //test get id from getID()
    it("test to get and return manager ID", () => {
        const id = 123
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 0400111222);

        expect(manager.getId()).toEqual(id);
    });

    // test get emails from getEmail()
    test("to get and return manager email", () => {
        const email = "john.doe@mail.com";
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 0400111222);
        const getEmail = manager.getEmail()

        expect(getEmail).toEqual(email);
    });

    // test get role from getRole()
    test("to get and return manager role", () => {
        const role = "Manager"
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 0400111222);

        expect(manager.getRole()).toBe(role);
    });
});
