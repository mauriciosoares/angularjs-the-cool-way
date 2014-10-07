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
    this.$scope.save = ListCtrl.prototype.scopeEvents.save.bind(this);

    this.$scope.isInvalid = ListCtrl.prototype.scopeEvents.isInvalid.bind(this);
  };

  ListCtrl.prototype.scopeEvents = {};

  ListCtrl.prototype.scopeEvents.save = function() {
    this.usersService.post(this.$scope.user);
    this.$scope.user = undefined;
    this.$scope.submitted = false;
  };

  ListCtrl.prototype.scopeEvents.isInvalid = function(field) {
    return this.$scope.newUser[field].$invalid && this.$scope.submitted;
  };

  ListCtrl.$inject = ['$scope', 'todo.shared.services.users'];

  app.controller('todo.form.controllers.List', ListCtrl);
} (angular.module('todo.form')));
