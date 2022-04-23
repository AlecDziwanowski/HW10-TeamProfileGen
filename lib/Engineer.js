// access employee class so that engineer class can extend it
const Employee = require('./Employee');

class Engineer extends Employee {
    // establish properties for an engineer
    constructor(name, id, email, github) {
        // reference properties of employee class
        super(name, id, email);
        // establish additional properties for engineer class
        this.gitHub = github;
    }

    // method to get github username
    getGithub() {

    }

    // method to override employee role to engineer
    getRole() {
        return 'Engineer';
    }
}