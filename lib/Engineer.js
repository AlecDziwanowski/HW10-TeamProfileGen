// access employee class so that engineer class can extend it
const Employee = require('./Employee');

// declare Engineer class that is built from Employee class
class Engineer extends Employee {
    // establish properties for an engineer
    constructor(name, id, email, github) {
        // reference properties of employee class
        super(name, id, email);
        // establish additional properties for engineer class
        this.github = github;
    }

    // method to get github username
    getGithub() {
        return this.github;
    }

    // method to override employee role to engineer
    getRole() {
        return 'Engineer';
    }
}

// export Engineer class so that the tests can reference it
module.exports = Engineer;