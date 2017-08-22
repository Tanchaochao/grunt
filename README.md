
提供两种自动化工具，grunt gulp。两者用法类似，看个人习惯，目前gulp比较流行，github上用的较多

通过npm installd导入package.json会很卡，推荐一个个插件去装

1.提供两种自动化工具，grunt：

npm install grunt --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-common-html2js --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-less --save-dev   
npm install grunt-contrib-watch --save-dev
//这个非常慢
npm install grunt-contrib-imagemin --save-dev

2.gulp模块导入

npm install gulp --save-dev
npm install gulp-html2js --save-dev
npm install gulp-less --save-dev
npm install gulp-minify-css --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install gulp-jshint --save-dev
