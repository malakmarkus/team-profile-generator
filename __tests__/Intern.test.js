const Intern = require('../lib/Intern')

describe('Intern Class', () => {
    describe('initialize', () => {
        it('Expected to create an object with id number and name', () => {
            const intern = new Intern(3, 'Jim')

            expect(intern.id).toEqual(3);
            expect(intern.name).toEqual('Jim');
        });
    });
});