// access intern so that it can be tested in this file
const Intern = require('../lib/Intern');

// establish tests to be run for intern
describe('Intern', () => {
    // test that constructor is functioning properly
    describe('Initialization', () => {
        it('should set the value of name, id, email, and school when user sets them', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let school = 'Northwestern';

            // act
            let employee = new Intern(name, id, email, school);

            // assert
            expect(employee.name).toEqual('Alec');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('alecdziwanowski@gmail.com');
            expect(employee.school).toEqual('Northwestern');
        });
    });
    
    // test getSchool
    describe('getSchool', () => {
        it('should return Northwestern when getSchool is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let school = 'Northwestern';
            let employee = new Intern(name, id, email, school);

            // act
            let getSchool = employee.getSchool();

            // assert 
            expect(getSchool).toEqual('Northwestern');       
        });
    });
    
    // test getRole
    describe('getRole', () => {
        it('should return Intern as role when getRole is called', () => {
            // arrange
            let name = 'Alec';
            let id  = 1;
            let email = 'alecdziwanowski@gmail.com';
            let school = 'Northwestern';
            let employee = new Intern(name, id, email, school);

            // act
            let getRole = employee.getRole();

            // assert
            expect(getRole).toEqual('Intern'); 
        });
    });
});