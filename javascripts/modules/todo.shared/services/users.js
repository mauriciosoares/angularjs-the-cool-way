(function(app) {
  'use strict';

  var users = function() {
    this.list = [{
      name: 'Mauricio',
      age: 24
    }, {
      name: 'Weslley',
      age: 20
    }];
  };

  users.prototype.get = function() {
    return this.list;
  };

  users.prototype.post = function(data) {
    this.list.push(data);
    return this.list;
  };

  app.service('todo.shared.services.users', users);

} (angular.module('todo.shared')));
