(function(app) {
  'use strict';

  var ListCtrl = function(users) {
    this.title = 'Todo List';

    this.users = users.get();
  };

  ListCtrl.$inject = ['users'];

  app.controller('ListCtrl', ListCtrl);
} (angular.module('todo')));
