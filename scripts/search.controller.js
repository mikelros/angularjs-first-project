class SearchCtrl {
  constructor(collaborators, collaboratorsClient) {
    this.collaborators = collaborators;
    this.collaboratorsClient = collaboratorsClient;
    this.user = '';
    this.repo = '';
    this.error = '';
    this.isError = false;
  }

  clear() {
    this.user = '';
    this.repo = '';
    this.error = '';
    this.isError = false;
    this.collaborators.clear();
  }
  
  getCollaborators(user, repo) {
    var vm = this;
    return this.collaboratorsClient.getCollaborators(user, repo)
      .then(function (collaborators) {
        vm.collaborators.addCollaborators(collaborators);
      })
      .catch(function(error) {
        vm.isError = true;
        vm.error = error.message;
      });
  }
}