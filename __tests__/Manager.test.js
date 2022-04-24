// access manager so that it can be tested in this file
const Manager = require('../lib/Manager');

// establish tests to be run for manager
describe('Manager', () => {
    // test that constructor is functioning properly
    describe('Initialization', () => {
        it('should set the value of name, id, email, and officeNumber when user sets them', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let officeNumber = 240;

            // act
            let employee = new Manager(name, id, email, officeNumber);

            // assert
            expect(employee.name).toEqual('Alec');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('alecdziwanowski@gmail.com');
            expect(employee.officeNumber).toEqual(240);
        });
    });
    
    // test getOfficeNumber
    describe('getOfficeNumber', () => {
        it('should return Northwestern when getOfficeNumber is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let officeNumber = 240;
            let employee = new Manager(name, id, email, officeNumber);

            // act
            let getOfficeNumber = employee.getOfficeNumber();

            // assert 
            expect(getOfficeNumber).toEqual(240);       
        });
    });
    
    // test getRole
    describe('getRole', () => {
        it('should return Manager as role when getRole is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let officeNumber = 240;
            let employee = new Manager(name, id, email, officeNumber);

            // act
            let getRole = employee.getRole();

            // assert
            expect(getRole).toEqual('Manager'); 
        });
    });
});