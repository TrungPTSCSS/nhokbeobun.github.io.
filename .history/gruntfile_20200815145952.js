// Gruntfile.js
module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
    		dest: 'dest',
            css:  "css",
            scss: "scss",
            js: "js"
        },
        cssmin: {
			options:{
				keepSpecialComments: 0
			},
			my_target: {
				files: [{
					'<%= dirs.dest %>/stylelibs.min.css' : ['<%= dirs.css %>/**/*.css']
				}]
			}
        },
        sass: {
		    dist: {
		    	options: {                       
		        	style: 'compressed',
		        	sourcemap: false,
		        	lineNumbers: true
		      	},
			    files: {
			       	'<%= dirs.dest %>/style.min.css': '<%= dirs.scss %>/style.scss'
			    }
		    }
        },
        watch: {
			options: {
			    livereload: true,
			    spawn: false
			},
	      	sass: {
		        files: "<%= dirs.scss %>/**/**/*.scss",
		        tasks: ['sass']
		    },
		    // cssmin: {
		    //     files: "<%= dirs.css %>/**/*.css",
		    //     tasks: ['cssmin']
		    // },
		    // uglify: {
		    //     files: ['<%= dirs.js %>/*.js'],
		    //     tasks: ['uglify']
		    // },
	    },
    });


    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin','sass','watch']);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

