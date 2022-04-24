// declare employee class to act as template for subclasses
class Employee {
    // establish properties for an employee
    constructor(name, id, email) 
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method to get employee name
    getName() 
    {
        return this.name;
    }
    
    // method to get employee id
    getId() 
    {
        return this.id;
    }
    
    // method to get employee email
    getEmail() 
    {
        return this.email;
    }
    
    // method to get employee role
    // override this in each subclass
    getRole() 
    {
        return 'Employee';
    }
}

// export employee class so that the subclasses and tests can reference it
module.exports = Employee;