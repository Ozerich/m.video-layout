module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// less builder
		less: {
			build: {
				options: {
                    yuicompress: true
				},
				files: {
					"checkout/dynamic/css/styles.css": "checkout/dynamic/css/styles.less",
					"thankyou/css/styles.css": "thankyou/css/styles.less",
					"auth/css/styles.css": "auth/css/styles.less"
				}
			}
		},

        uglify: {
            plugins: {
                options: {
                    preserveComments: 'all'
                },
                files: {
                    "theme/js/thirdparty/min/jquery-1.8.1.min.js":"theme/js/thirdparty/jquery-1.8.1.min.js",
                    "theme/js/thirdparty/min/html5shiv.min.js":"theme/js/thirdparty/html5shiv.js",
                    "theme/js/thirdparty/min/jquery.blockUI.min.js":"theme/js/thirdparty/jquery.blockUI.js",
                    "theme/js/thirdparty/min/jquery.jscrollpane.min.js":"theme/js/thirdparty/jquery.jscrollpane.min.js",
                    "theme/js/thirdparty/min/jquery.maskedinput.min.js":"theme/js/thirdparty/jquery.maskedinput.js",
                    "theme/js/thirdparty/min/jquery.mousewheel.min.js":"theme/js/thirdparty/jquery.mousewheel.js",
                    "theme/js/thirdparty/min/jquery.placeholder.min.js":"theme/js/thirdparty/jquery.placeholder.js"
                }
            },
            components: {
                files: {
                    "theme/js/components/min/jquery-1.8.1.min.js":"theme/js/components/autocomplete.js",
                    "theme/js/components/min/calendar.min.js":"theme/js/components/calendar.js",
                    "theme/js/components/min/checkbox.min.js":"theme/js/components/checkbox.js",
                    "theme/js/components/min/passwordEye.min.js":"theme/js/components/passwordEye.js",
                    "theme/js/components/min/switch.min.js":"theme/js/components/switch.js"
                }
            }
        },

        concat: {
            options:{
                separator: ";\n"
            },
            plugins:{
                src: ["theme/js/thirdparty/min/*.js"],
                dest: "theme/js/plugins.js"
            },
            components:{
                src: ["theme/js/components/min/*.js"],
                dest: "theme/js/components.js"
            }
        }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('build',['less:build', 'uglify:plugins', 'uglify:components', 'concat:plugins', 'concat:components']);
};