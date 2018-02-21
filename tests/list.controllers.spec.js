describe('List Tests', () => {
    let $controller;

    beforeEach(angular.mock.module('myApp'));

    describe('List Controller', () => {
        it('collaborators should be empty', (inject((_$controller_, _collaborators_) => {
            spyOn(_collaborators_, 'getCollaborators').and.returnValue([]);
            $controller = _$controller_('ListCtrl', {
                collaborators: _collaborators_
            });

            expect($controller.collaborators).toEqual([]);
        })));

        it('collaborators should be filled when provided', (inject((_$controller_, _collaborators_) => {
            spyOn(_collaborators_, 'getCollaborators').and.returnValue([{name: 'a collab'}]);
            $controller = _$controller_('ListCtrl', {
                collaborators: _collaborators_
            });

            expect($controller.collaborators).toEqual([{name: 'a collab'}]);
        })));
    });
});
