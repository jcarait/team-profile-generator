// import engineer class

const Engineer = require("../lib/engineerClass");

describe("engineer", () => {

    describe("Initialisation", () => {
        it("should create an object with a name, id, email and github username if provided valid arguments", () => {
        const engineer = new Engineer("John Doe", 123, "john.doe@mail.com", "john_doe");

        expect(engineer.name).toEqual("John Doe");
        expect(engineer.id).toEqual(123);
        expect(engineer.email).toEqual("john.doe@mail.com");
        expect(engineer.github).toEqual("john_doe");
        });
    });
});

describe("getFunctions", () => {

    it("should return engineer name", () => {
        const name = "John Doe"
        const engineer = new Engineer("John Doe", 123, "john.doe@mail.com", "john_doe");;

        expect(engineer.getName()).toEqual(name);
    });

    //it get id from getID()
    it("it should get and return engineer ID", () => {
        const id = 123
        const engineer = new Engineer("John Doe", 123, "john.doe@mail.com", "john_doe");;

        expect(engineer.getId()).toEqual(id);
    });

    // it get emails from getEmail()
    it("should get and return engineer email", () => {
        const email = "john.doe@mail.com";
        const engineer = new Engineer("John Doe", 123, "john.doe@mail.com", "john_doe");
        const getEmail = engineer.getEmail()

        expect(getEmail).toEqual(email);
    });

    // it get role from getRole()
    it("should get and return engineer role", () => {
        const role = "Engineer"
        const engineer = new Engineer("John Doe", 123, "john.doe@mail.com", "john_doe");

        expect(engineer.getRole()).toBe(role);
    });
    
    it("should return engineer's github username", () => {
        const github = "john_doe"
        const engineer = new Engineer("John Doe", 123, "john.doe@mail.com", "john_doe");

        expect(engineer.getGithub()).toEqual(github);
    });
});
