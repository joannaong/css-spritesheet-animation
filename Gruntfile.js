'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/js/',
          src: ['**/*.js'],
          dest: 'demo/js/'
        }, {
          expand: true,
          cwd: 'src/asset/data',
          src: ['**'],
          dest: 'demo/asset/data'
        }, {
          expand: true,
          cwd: 'src/template/',
          src: ['**'],
          dest: 'demo/'
        }]
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      compass: {
        files: ['src/css/**/*'],
        tasks: ['compass'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      copy: {
        files: ['src/js/**/*', 'src/**/*'],
        tasks: ['copy'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
	
  });

  // Main build command
  grunt.registerTask('default', ['copy', 'compass']);
  grunt.registerTask('resize', ['image_resize']);
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};