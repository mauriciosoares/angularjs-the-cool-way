(function(app) {
  'use strict';

  var users = function() {
    this.usersList = [{
      name: 'Mauricio',
      age: 24
    }, {
      name: 'Weslley',
      age: 20
    }];
  };

  users.prototype.get = function() {
    return this.usersList;
  };

  app.service('users', users);

} (angular.module('todo')));
