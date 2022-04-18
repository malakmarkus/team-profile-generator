const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    describe('Initialize', () => {
        it('Expected to create an object with id number and name', () => {
            const employee = new Employee(1, 'Sam')

            expect(employee.id).toEqual(1);
            expect(employee.name).toEqual('Sam');
        });
    });
});