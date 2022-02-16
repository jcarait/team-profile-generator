// import manager class

const Manager = require("../lib/managerClass");

describe("Manager", () => {

    describe("Initialisation", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 61400111222);

        expect(manager.name).toEqual("John Doe");
        expect(manager.id).toEqual(123);
        expect(manager.email).toEqual("john.doe@mail.com");
        expect(manager.officeNumber).toEqual(61400111222);
        });
    });
});

describe("getFunctions", () => {

    it("should return manager name", () => {
        const name = "John Doe"
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 61400111222);

        expect(manager.getName()).toEqual(name);
    });

    //it get id from getID()
    it("it should get and return manager ID", () => {
        const id = 123
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 61400111222);

        expect(manager.getId()).toEqual(id);
    });

    // it get emails from getEmail()
    it("should get and return manager email", () => {
        const email = "john.doe@mail.com";
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 61400111222);
        const getEmail = manager.getEmail()

        expect(getEmail).toEqual(email);
    });

    // it get role from getRole()
    it("should get and return manager role", () => {
        const role = "Manager"
        const manager = new Manager("John Doe", 123, "john.doe@mail.com", 61400111222);

        expect(manager.getRole()).toBe(role);
    });
});
