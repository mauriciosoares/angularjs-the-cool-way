(function(app) {
  'use strict';

  var ListCtrl = function(users) {
    this.usersService = users;

    this.initialize();
  };

  ListCtrl.prototype.initialize = function() {
    // Setting title
    this.title = 'AngularJS - The cool way';

    // Setting users
    this.users = this.usersService.get();
  };

  ListCtrl.prototype.saveUser = function() {
    this.usersService.post(this.newUser);
    this.newUser = undefined;
  };

  ListCtrl.$inject = ['todo.shared.services.users'];

  app.controller('todo.form.controllers.List', ListCtrl);
} (angular.module('todo.form')));
