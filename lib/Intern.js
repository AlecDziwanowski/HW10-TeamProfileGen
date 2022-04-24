// access employee class so that intern class can extend it
const Employee = require('./Employee');

// declare Intern class that is built from Employee class
class Intern extends Employee {
    // establish properties for an intern
    constructor(name, id, email, school) {
        // reference properties of employee class
        super(name, id, email);
        // establish additional properties for intern class
        this.school = school;
    }

    // method to get school username
    getSchool() {
        return this.school;
    }

    // method to override employee role to intern
    getRole() {
        return 'Intern';
    }
}

// export Intern class so that the tests can reference it
module.exports = Intern;