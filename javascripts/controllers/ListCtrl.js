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

  ListCtrl.$inject = ['users'];

  app.controller('ListCtrl', ListCtrl);
} (angular.module('todo')));
