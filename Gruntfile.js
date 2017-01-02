/**
 * Created by Administrator on 2017/1/1 0001.
 */
module.exports =  function( grunt ){
    // 初始化grunt配置
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),

        //concat插件的配置信息
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            cssConcat: {
                src: ['src/css/style1.css', 'src/css/style2.css'],
                dest: 'src/css/concat/<%=pkg.name%>-<%=pkg.version%>.css'
            },
            jsConcat: {
                src: 'src/js/*.js',
                dest: 'src/js/concat/<%=pkg.name%>-<%=pkg.version%>.js'
            }
        },

        // cssmin插件配置信息
        cssmin: {
            //生成文件的说明
            options:{
                stripBanners:true,
                banner:'/*! <%=pkg.name%>-<%=pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            // 生成文件的路径 文件名
            build:{
                src: 'src/css/concat/<%=pkg.name%>-<%=pkg.version%>.css',
                dest:'dist/css/<%=pkg.name%>-<%=pkg.version%>.min.css',
            }
        },
        // uglify插件配置信息
        uglify: {
            //生成文件的说明
            options:{
                stripBanners:true,
                banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            // 生成文件的路径 文件名
            build:{
                src: 'src/js/concat/<%=pkg.name%>-<%=pkg.version%>.js',
                dest:'dist/js/<%=pkg.name%>-<%=pkg.version%>.min.js',
            },
            /*可以写多个
            * build2:{
            * src:
            * dest:
            * }
            * */
        },

        //jshint插件配置信息
        jshint:{
            build: [ 'Gruntfile.js','src/js/*.js' ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        //jshint插件配置信息
        csslint:{
            build: [ 'src/css/*.css' ],
            options: {
                csslintrc: '.csslintrc'
            }
        },

        watch: {
            build: {
                files: ['src/js/*.js', 'src/css/*.css'],
                tasks: ['jshint', 'csslint', 'concat', 'cssmin', 'uglify'],
                options: { spawn: false }
            }
        }
    });

    //告诉grunt我们将使用的插件
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-csslint' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    //告诉grunt当我们在终端中输入grunt的时候做些什么 第二个参数是数组
    // 先语法检查 再合并 再压缩
    grunt.registerTask('default',['jshint','csslint','concat','cssmin','uglify','watch']);
};