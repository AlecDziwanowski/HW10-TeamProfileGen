// access engineer so that it can be tested in this file
const Engineer = require('../lib/Engineer');

// establish tests to be run for employee
describe('Engineer', () => {
    // test that constructor is functioning properly
    describe('Initialization', () => {
        it('should set the value of name, id, email, and github when user sets them', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let github = "adziwanowski";

            // act
            let employee = new Engineer(name, id, email, github);

            // assert
            expect(employee.name).toEqual('Alec');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('alecdziwanowski@gmail.com');
            expect(employee.github).toEqual('adziwanowski');
        });
    });
    
    // test getGithub
    describe('getGithub', () => {
        it('should return adziwanowski when getGithub is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let github = "adziwanowski";
            let employee = new Engineer(name, id, email, github);

            // act
            let getGithub = employee.getGithub();

            // assert 
            expect(getGithub).toEqual('adziwanowski');       
        });
    });
    
    // test getRole
    describe('getRole', () => {
        it('should return Engineer as role when getRole is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let github = "adziwanowski";
            let employee = new Engineer(name, id, email, github);

            // act
            let getRole = employee.getRole();

            // assert
            expect(getRole).toEqual('Engineer'); 
        });
    });
});