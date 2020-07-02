# tuitui-ui样式库

#### 项目介绍
tuitui-ui，由推推科技发布的UI样式框架。欢迎关注推推优品，回复“ui”即可获得项目的预览地址。

![](http://ui.tuituitech.com/demo/img/modal-test.jpg)

#### 项目使用方式
一、安装Node.js依赖，推荐8.16.0版本。

二、初始化npm依赖，执行初始化脚本：
```
npm install
```

三、进入项目目录，执行打包脚本（Windows用户可以使用gitbash执行）：
```
./shell/build.sh
```

四、生成的/dist/tuitui-ui.min.css即为最终文件。

#### 项目依赖
- **postcss-cli@6.1.3** ：CSS处理工具postcss的命令行版本
- **postcss-import@12.0.1**：处理CSS文件里的@import语法，把通过import组织的多个文件合成一个
- **autoprefixer@9.6.1**：处理兼容性，对有兼容性问题的属性自动添加-webkit前缀
- **cssnano@4.1.10**：压缩CSS文件


## 变更记录
0.1.1
- 【Initial】初始版本

0.1.2
- 【Add】Panel组件的标题部分添加“查看更多”这种引导链接的样式。
- 【Bug Fix】Search组件指定z-index，解决和有定位元素同时使用时的层级错乱问题。
- 【Bug Fix】修复Article组件中图片不居中的问题。