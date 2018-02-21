describe('Collaborators Tests', () => {
    let collaborators;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject((_collaborators_) => {
        collaborators = _collaborators_;
    }));

    describe('Collaborators Factory', () => {
        it('starts with empty list', () => {
            expect(collaborators.collaboratorsList).toEqual([]);
        });

        it('adds collaborators', () => {
            collaborators.addCollaborators([{name: 'a name'}]);

            expect(collaborators.collaboratorsList).toEqual([{name: 'a name'}]);
        });

        it('clears collaborators', () => {
            collaborators.collaborators = [{name: 'a name'}];

            collaborators.clear();

            expect(collaborators.collaboratorsList).toEqual([]);
        });

        it('gets collaborators', () => {
            collaborators.collaboratorsList = [{name: 'a name'}];

            var resultCollaboratorsList = collaborators.getCollaborators();

            expect(resultCollaboratorsList).toEqual([{name: 'a name'}]);
        });
    });
});
