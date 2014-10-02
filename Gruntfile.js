module.exports = function(grunt) {
  var tasks = [
    'grunt-contrib-concat',
    'grunt-contrib-jshint',
    'grunt-contrib-watch'
  ];

  var config = {};

  // =============================================
  // concat
  config.concat = {}
  config.concat.dist = {
    src: [
      'javascripts/app.js',
      'javascripts/modules/**/**/*.js'
    ],
    dest: 'javascripts/app.min.js'
  };

  // =============================================
  // jshint
  config.jshint = {};
  config.jshint.all = [
    'javascripts/*.js',
    'javascripts/modules/**/**/*.js'
  ];
  config.jshint.options = {
    debug: true
  };

  // =============================================
  // watch
  config.watch = {};
  config.watch.scripts = {
    files: [
      'javascripts/*.js',
      'javascripts/modules/**/**/*.js'
    ],
    tasks: ['jshint', 'concat'],
    options: {
      spawn: false,
    }
  };

  grunt.initConfig(config);

  tasks.forEach(grunt.loadNpmTasks);
};
