module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /**
     * PhantomJS Cookbook
     * Chapter 4 | Unit Testing with PhantomJS
     * Recipe 4  | Running Jasmine unit tests with Grunt
     */
    jasmine: {
      recipe04: {
        src: '../lib/string-utils.js',
        options: {
          specs: '../lib/string*-spec.js'
        }
      }
    },
    /**
     * PhantomJS Cookbook
     * Chapter 4 | Unit Testing with PhantomJS
     * Recipe 5  | Watching your tests during development with Grunt
     */
    watch: {
      scripts: {
        files: ['../lib/*.js'],
        tasks: ['jasmine']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('test', ['jasmine']);
};