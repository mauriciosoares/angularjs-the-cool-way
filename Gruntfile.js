module.exports = function(grunt) {
  var tasks = [
    'grunt-contrib-concat'
  ];

  var config = {};

  config.concat = {
    dist: {
      src: [
        'javascripts/app.js',
        'javascripts/modules/**/**/*.js'
      ],
      dest: 'javascripts/app.min.js'
    }
  };

  grunt.initConfig(config);

  tasks.forEach(grunt.loadNpmTasks);
};
