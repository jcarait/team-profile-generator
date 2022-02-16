// import intern class

const Intern = require("../lib/internClass");

describe("Intern", () => {

    describe("Initialisation", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
        const intern = new Intern("John Doe", 123, "john.doe@mail.com", "University of Sydney");

        expect(intern.name).toEqual("John Doe");
        expect(intern.id).toEqual(123);
        expect(intern.email).toEqual("john.doe@mail.com");
        expect(intern.school).toEqual("University of Sydney");
        });
    });
});

describe("getFunctions", () => {

    it("should return intern name", () => {
        const name = "John Doe"
        const intern = new Intern("John Doe", 123, "john.doe@mail.com", "University of Sydney");;

        expect(intern.getName()).toEqual(name);
    });

    //it get id from getID()
    it("it should get and return intern ID", () => {
        const id = 123
        const intern = new Intern("John Doe", 123, "john.doe@mail.com", "University of Sydney");;

        expect(intern.getId()).toEqual(id);
    });

    // it get emails from getEmail()
    it("should get and return intern email", () => {
        const email = "john.doe@mail.com";
        const intern = new Intern("John Doe", 123, "john.doe@mail.com, University of Sydney");
        const getEmail = intern.getEmail()

        expect(getEmail).toEqual(email);
    });

    // it get role from getRole()
    it("should get and return intern role", () => {
        const role = "intern"
        const intern = new Intern("John Doe", 123, "john.doe@mail.com, University of Sydney");

        expect(intern.getRole()).toBe(role);
    });
    
    it("should return intern's school", () => {
        const school = "University of Sydney"
        const intern = new intern("John Doe", 123, "john.doe@mail.com, University of Sydney");

        expect(intern.getSchool()).toEqual(school);
    });
});
