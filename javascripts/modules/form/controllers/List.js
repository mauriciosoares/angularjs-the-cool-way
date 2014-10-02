(function(app) {
  'use strict';

  var ListCtrl = function($scope, users) {
    this.$scope = $scope;
    this.usersService = users;

    this.initialize();
  };

  ListCtrl.prototype.initialize = function() {
    // Setting title
    this.$scope.title = 'AngularJS - The cool way';

    // Setting users
    this.$scope.users = this.usersService.get();

    // Setting angular events
    this.bindEvents();
  };

  ListCtrl.prototype.bindEvents = function() {
    this.$scope.saveUser = function() {
      this.usersService.post(this.$scope.newUser);
      this.$scope.newUser = undefined;
    }.bind(this);
  };

  ListCtrl.$inject = ['$scope', 'todo.shared.services.users'];

  app.controller('todo.form.controllers.List', ListCtrl);
} (angular.module('todo.form')));
