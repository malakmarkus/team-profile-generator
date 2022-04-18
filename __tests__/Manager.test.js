const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    describe('Initialize', () => {
        it('Expected to create an object with id number and name', () => {
            const manager = new Manager(4, 'Mike')

            expect(manager.id).toEqual(4);
            expect(manager.name).toEqual('Mike');
        });
    });
});