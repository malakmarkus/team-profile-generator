const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    describe('initialize', () => {
        it('Expected to create an object with id number and name', () => {
            const engineer = new Engineer(2, 'Mary')

            expect(engineer.id).toEqual(2);
            expect(engineer.name).toEqual('Mary');
        });
    });
});