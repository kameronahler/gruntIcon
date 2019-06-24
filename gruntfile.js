module.exports = function(grunt) {
    grunt.initConfig({
        // grunticon
        grunticon: {
            myIcon: {
                files: [{
                    expand: true,
                    cwd: 'in',
                    src: ['*.svg'],
                    dest: 'out'
                }],
                options: {
                    enhanceSVG:true,
                    cssprefix:".icons-",
                    colors: {
                        active: "#f5f5f5"
                    }
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-grunticon');


    // Register tasks
    grunt.registerTask('default', [
        'grunticon'
    ]);
};
