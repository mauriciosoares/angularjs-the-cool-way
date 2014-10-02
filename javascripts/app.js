(function() {
  'use strict';

  // Define Modules
  angular.module('todo.form');
  angular.module('todo.shared');

  angular.module('todo', [
    'todo.form',
    'todo.shared'
  ]);
} ());
