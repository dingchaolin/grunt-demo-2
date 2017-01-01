# grunt-demo-2

##### 目录介绍
- 开发编写的代码都是在src中写的
- 开发完成之后 会将代码输出到dist中去 
- 这个过程可能会有代码的合并和代码的压缩

##### 安装静态服务器
- npm install http-server -g 
- linux 或者 mac 需要 sudo 命令
- http-server 路径 
- 该路径将会作为一个服务器的文件夹在8080端口执行
- http://localhost:8080/test.html 即可访问该目录下的文件

##### 全局安装命令行
-  npm install -g grunt-cli

##### 安装grunt
- npm install grunt --save-dev
 
##### 安装 grunt-contrib-concat
- npm install grunt-contrib-concat --save-dev
- 文件合并相关
- 很多css文件可以合并到一个css中
- 很多js文件可以合并到一个js文件中

##### --save-dev 开发环境所依赖的一些工具

##### --save 开发所需要的包

##### 安装csslint css语法检查
- npm install grunt-contrib-csslint --save-dev

##### 安装cssmin css压缩
- npm install grunt-contrib-cssmin --save-dev

##### 安装jshint js语法检查
- npm install grunt-contrib-jshint --save-dev

##### 安装uglify js压缩
- npm install grunt-contrib-uglify --save-dev