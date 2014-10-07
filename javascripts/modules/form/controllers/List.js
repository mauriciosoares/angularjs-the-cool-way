(function(app) {
  'use strict';

  var ListCtrl = function($scope, users) {
    this.$scope = $scope;
    this.usersService = users;

    this.initialize();
  };

  ListCtrl.fn = ListCtrl.prototype;

  ListCtrl.fn.initialize = function() {
    // Setting title
    this.$scope.title = 'AngularJS - The cool way';

    // Setting users
    this.$scope.users = this.usersService.get();

    // Setting angular events
    this.bindEvents();
  };

  ListCtrl.fn.bindEvents = function() {
    this.$scope.save = ListCtrl.fn.scopeEvents.save.bind(this);

    this.$scope.isInvalid = ListCtrl.fn.scopeEvents.isInvalid.bind(this);
  };

  ListCtrl.fn.scopeEvents = {};

  ListCtrl.fn.scopeEvents.save = function() {
    if(this.$scope.newUser.$invalid) {
      this.$scope.submitted = true;
      return;
    }

    this.usersService.post(this.$scope.user);
    this.$scope.user = undefined;
    this.$scope.submitted = false;
  };

  ListCtrl.fn.scopeEvents.isInvalid = function(field, type) {
    // if no type, just tells if is invalid
    if(!type) {
      return this.$scope.newUser[field].$invalid && this.$scope.submitted;
    } else {
      return this.$scope.newUser[field].$error[type] && this.$scope.submitted;
    }
  };

  ListCtrl.$inject = ['$scope', 'todo.shared.services.users'];

  app.controller('todo.form.controllers.List', ListCtrl);
} (angular.module('todo.form')));
