class Collaborators {
  constructor() {
    this.collaboratorsList = [];
  }
  
  getCollaborators() {
    return this.collaboratorsList;
  }
  
  addCollaborators(newCollaboratorsList) {
    angular.copy(newCollaboratorsList, this.collaboratorsList);
  }
  
  clear() {
    angular.copy([], this.collaboratorsList);
  }
}
