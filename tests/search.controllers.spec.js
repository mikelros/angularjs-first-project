describe('Search Tests', () => {
    let $controller;

    beforeEach(angular.mock.module('myApp'));

    const createCtrl = collaboratorsResult => inject(
        (_$controller_, _collaborators_, _collaboratorsClient_) => {
            spyOn(_collaborators_, 'clear');
            spyOn(_collaborators_, 'addCollaborators');
            spyOn(_collaboratorsClient_, 'getCollaborators').and.returnValue(collaboratorsResult);

            $controller = _$controller_('SearchCtrl', {
                collaborators: _collaborators_,
                collaboratorsClient: _collaboratorsClient_
            });
        }
    );

    describe('Search Controller', () => {
        it('should be clear its fields', () => {
            createCtrl();

            $controller.clear();

            expect($controller.user).toEqual('');
            expect($controller.repo).toEqual('');
            expect($controller.error).toEqual('');
            expect($controller.isError).toBeFalsy();
            expect($controller.collaborators.clear).toHaveBeenCalled();
        });

        it('should add collaborators when received', done => {
            createCtrl(Promise.resolve([{name: 'a name'}]));

            const promise = $controller.getCollaborators();

            promise.then(() => {
                expect($controller.collaborators.addCollaborators).toHaveBeenCalledWith([{name: 'a name'}]);
                done();
            });
        });

        it('get an error and ', done => {
            createCtrl(Promise.reject(new Error('Not found')));

            const promise = $controller.getCollaborators();

            promise.then(() => {
                expect($controller.error).toEqual('Not found');
                expect($controller.isError).toBeTruthy();
                done();
            });
        });
    });
});
