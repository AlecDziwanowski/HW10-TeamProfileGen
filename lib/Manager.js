// access employee class so that manager class can extend it
const Employee = require('./Employee');

// declare Manager class that is built from Employee class
class Manager extends Employee {
    // establish properties for an manager
    constructor(name, id, email, officeNumber) {
        // reference properties of employee class
        super(name, id, email);
        // establish additional properties for manager class
        this.officeNumber = officeNumber;
    }

    // method to get officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }

    // method to override employee role to manager
    getRole() {
        return 'Manager';
    }
}

// export Manager class so that the tests can reference it
module.exports = Manager;