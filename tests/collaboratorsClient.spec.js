describe('Collaborators Client Tests', () => {
    let collaboratorsClient;

    beforeEach(angular.mock.module('myApp'));

    const createCtrl = getResult => inject(
        (_collaboratorsClient_, _$http_) => {
            spyOn(_$http_, 'get').and.returnValue(getResult);

            collaboratorsClient = _collaboratorsClient_;
        }
    );

    describe('Collaborators Client Factory', () => {
        it('returns response data when getting collaborators', done => {
            createCtrl(Promise.resolve({data: [{name: 'a name'}, {name: 'another name'}]}));

            const promise = collaboratorsClient.getCollaborators();

            promise.then(collaborators => {
                expect(collaborators).toEqual([{name: 'a name'}, {name: 'another name'}]);
                done();
            });
        });

        it('returns response data when failed getting collaborators', done => {
            createCtrl(Promise.reject({data: {message: 'Not found'}}));

            const promise = collaboratorsClient.getCollaborators();

            promise.catch(error => {
                expect(error.message).toEqual('Not found');
                done();
            });
        });
    });
});
