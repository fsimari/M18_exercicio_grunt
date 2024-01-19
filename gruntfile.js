module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files:{
                    'main.css':'main.less'
                }
            }
        },
        uglify: {
            targets: {
                files: {
                    'main.min.js' : 'main.js'
                }
            }
        }
    })

    grunt.registerTask('teste', function(){
        const done = this.async();
        setTimeout(function(){
            console.log('Script executado');
            done();
        }, 1000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default',['teste','less','uglify']);

}
