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
        it('should', () => {
            // arrange
            // act
            // assert 
            expect(employee.name).toEqual('Alec');           
        });
    });
    
    // test getName
    describe('getId', () => {
        it('should', () => {
            // arrange
            // act
            // assert  
            expect(employee.name).toEqual('Alec');          
        });
    });
    
    // test getEmail
    describe('getEmail', () => {
        it('should', () => {
            // arrange
            // act
            // assert    
            expect(employee.name).toEqual('Alec');        
        });
    });
    
    // test getRole
    describe('getRole', () => {
        it('should return Employee as when getRole is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let employee = new Employee(name, id, email);

            // act
            let role = employee.getRole();

            // assert
            expect(role).toEqual('Employee'); 
        });
    });
});