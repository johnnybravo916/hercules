module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['**/*.scss'],
          dest: 'css',
          ext: '.css'
      }]
      }
    },
    cssmin: { // Begin CSS Minify Plugin
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['**/*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
    }]
      }
    },
    uglify: { // Begin JS Uglify Plugin
      build: {
        src: ['js/*.js'],
        dest: 'js/scripts.min.js'
      }
    },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','cssmin']
			},
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
  
	grunt.registerTask('cssmin',['cssmin']);
	grunt.registerTask('sass',['sass']);
	grunt.registerTask('magic',['watch']);
}