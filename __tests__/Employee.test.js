// access employee so that it can be tested in this file
const Employee = require('../lib/Employee');

// establish tests to be run for employee
describe('Employee', () => {
    // test that constructor is functioning properly
    describe('Initialization', () => {
        it('should set the value of name, id, and email when user sets them', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';

            // act
            let employee = new Employee(name, id, email);

            // assert
            expect(employee.name).toEqual('Alec');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('alecdziwanowski@gmail.com');
        });
    });
    
    // test getName
    describe('getName', () => {
        it('should return Alec as name when getName is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let employee = new Employee(name, id, email);

            // act
            let getName = employee.getName();

            // assert 
            expect(getName).toEqual('Alec');           
        });
    });
    
    // test getName
    describe('getId', () => {
        it('should return 1 as id when getId is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let employee = new Employee(name, id, email);

            // act
            let getId = employee.getId();

            // assert 
            expect(getId).toEqual(1);          
        });
    });
    
    // test getEmail
    describe('getEmail', () => {
        it('should return adziwanowski@gmail.com as email when getEmail is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let employee = new Employee(name, id, email);

            // act
            let getEmail = employee.getEmail();

            // assert 
            expect(getEmail).toEqual('alecdziwanowski@gmail.com');       
        });
    });
    
    // test getRole
    describe('getRole', () => {
        it('should return Employee as role when getRole is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let employee = new Employee(name, id, email);

            // act
            let getRole = employee.getRole();

            // assert
            expect(getRole).toEqual('Employee'); 
        });
    });
});