
var fs = require('fs');

module.exports = function (grunt) {
    //提取动画库中的配置
    function activateAnimations() {
      var categories = JSON.parse(fs.readFileSync('animate-config.json')),
        category, files, file,
        target = ['src/css/*.css','src/animatecss/_base.css'],
        count = 0;
      for (category in categories) {
        if (categories.hasOwnProperty(category)) {
          files = categories[category];

          for (var i = 0; i < files.length; ++i) {
            if(files[i].split(":")[1] == 1){
              target.push('src/animatecss/' + category + '/' + files[i].split(":")[0]+ '.css');
              count += 1;
            }
          }
        }
      }

      if (!count) {
        console.log('没有动画');
        target = ['src/css/*.css'] ;
      } else {
        console.log(count + (count > 1 ? ' 个动画' : ' 个动画') + ' 被编译');
      }

    return target;
  }

  var basecss = activateAnimations() ;
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //html编译成js;;
    html2js: {
      options: {
        globalname:"TPL",
        fileHeaderString:"/*模板*/"
      },
      main: {
        src: ['include_js.html','include_css.html'],
        dest: 'templates.js'
      },
      tpls: {
        src: ['src/tpl/**/*.html'],
        dest: 'src/js/templates.js'
      }
    },
    //合并js
    concat: {
      options: {
        separator: '\n'
      },
      //合并第三方库
      myjslibs:{
        src: 'src/js/第三方库/*.js',
        dest: 'src/js/lib.js'
      },
      myjs: {
        src: 'src/js/*.js',
        dest: 'dist/js/base.js'
      },
      //编译bootstrapjs，只把项目用到的js编译进去
      bootstrap: {
        src: [
          'src/bootstrap/js/transition.js',
          // 'src/bootstrap/js/alert.js',
          // 'src/bootstrap/js/button.js',
          // 'src/bootstrap/js/carousel.js',
          'src/bootstrap/js/collapse.js',
          // 'src/bootstrap/js/dropdown.js',
          'src/bootstrap/js/modal.js',
          'src/bootstrap/js/tooltip.js',
          'src/bootstrap/js/popover.js',
          // 'src/bootstrap/js/scrollspy.js',
          'src/bootstrap/js/tab.js',
          // 'src/bootstrap/js/affix.js',
          'src/bootstrap/js/placeholder.js',//自己加入的 兼容ie的  placeholder插件
          'src/bootstrap/js/_tpl.js'//underscore的模板引擎

        ],
        dest: 'dist/js/bootstrap.min.js'
      },
      //合并jQuery验证插件
      validate: {
        src: [
          'src/表单验证/jquery.metadata.js',
          'src/表单验证/jquery.validate.js',
          'src/表单验证/additional-methods.js',
          'src/表单验证/messages_zh.js'
        ],
        dest: 'dist/js/validate.min.js'
      },
    },
    //压缩js
    uglify: {
         options: {
          compress: {
            drop_console: true
          }
         },
         //压缩第三方库
         myjslibs:{
            src: 'src/js/lib.js',
            dest:'src/js/lib.js'
         },
         myjs: {
          src: 'dist/js/base.js',
          dest:'dist/js/base.min.js'
         },
         bootstrap:{
            src: 'dist/js/bootstrap.min.js',
            dest: 'dist/js/bootstrap.min.js'
         },
         //压缩validatejs
         validate:{
            src: 'dist/js/validate.min.js',
            dest: 'dist/js/validate.min.js'
         }
    },
    //bootstrap自定义less编译成css
    less: {  
      compileCore: {
        options: {
          strictMath: true
        },
        src: 'src/bootstrap/less/bootstrap.less',
        dest: 'dist/css/mybootstrap.css'
      },
      
      base:{
        options: {
          strictMath: true,
          //sourceMap: true,
          outputSourceFiles: true,
          // sourceMapURL: 'mybootstrap.css.map',
          // sourceMapFilename: 'dist/css/mybootstrap.css.map'
        },
        src: 'src/css/_base.less',
        dest: 'src/css/_base.css'
      },
      animate:{
        options: {
          strictMath: true,
          //sourceMap: true,
          outputSourceFiles: true,
          // sourceMapURL: 'mybootstrap.css.map',
          // sourceMapFilename: 'dist/css/mybootstrap.css.map'
        },
        src: 'src/animatecss/_base.less',
        dest: 'src/animatecss/_base.css'
      }

    }, 
    copy: {
      main: {
        expand: true,
        cwd: 'src/img/',
        src: '**',
        dest: 'dist/img/'
      },
    },
    //css压缩合并
    cssmin: {
         options:{
            keepSpecialComments: 0
         },
         bootstrapmin:{
          src: 'dist/css/mybootstrap.css',
          dest: 'dist/css/mybootstrap.min.css'
         },
         default:{
            src: basecss,
            dest: 'dist/css/base.css'
         }
     },
     //监听文件变化，浏览器实时更新
    watch: {
      client: {
        files: ['*.html','page/*','dist/css/*', 'dist/js/*', 'img/*','src/css/*'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less') ;
  grunt.loadNpmTasks('grunt-common-html2js');
  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-copy');

  // 默认任务
  grunt.registerTask('build', ['html2js:main','html2js:tpls','less:base','less:animate','concat:myjslibs',"uglify:myjslibs",'concat:myjs','cssmin:default']);
  
  //编译bootstrap
  grunt.registerTask('bootstrap', ['concat:bootstrap','uglify:bootstrap','less:compileCore','cssmin:bootstrapmin']);

  //监听任务
  grunt.registerTask("live",["watch"]) ;


  //js压缩
  grunt.registerTask("jszip",["uglify:myjs"]) ;

  //validate插件
  grunt.registerTask("validate",["concat:validate","uglify:validate"]) ;

}