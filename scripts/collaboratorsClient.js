class CollaboratorsClient {
  constructor($http) {
    this.$http = $http;
  }

  getCollaborators(user, repo) {
    return this.$http.get('https://api.github.com/repos/' + user + '/' + repo + '/contributors')
      .then(function(response) {
        return response.data;
      })
      .catch(function(response) {
        throw response.data;
      });
  }
}