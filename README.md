# Demo-Webpack

#  Do this to build node enviroment
>1. npm install package.json --save-dev(npm i)
>2. cd filepath?
>3. webpack(toload defalut file name(webpack.config.js))
## webpack中文文档入门例子
### 踩坑总结，也有在webpack.config.js中通过注释写出，以下是总结
```bash
 当你看了各种文档，找了无数视频，发现你还是没错的时候记得
 Such as  XXX is not defined,Try to uninstall  webpack 
#### Npm uninstall --save-dev webpack(各种相关插件模块)
#### npm uninstall -g webpoack(同理)
#### npm i webpack -g
#### npm i --save html-webpack-plugin|webpack|(各种插件)
####  奇迹当然会发生啦！！！
```
-------------------------------------
```bash
概念:官网node版本8.2，当前8.9以及以上版本API差异，需改成,
>npx webpack src/index.js --output-filename dist/bundle.js
----
入口起点:webpack不要全局安装，安装到当前项目下即可，否则报错：
Cannot find module 'webpack/lib/node/NodeTemplatePlugin'，
--------
多页面Demo：按照npm官网使用extract-text-webpack-plugin组件
提示Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
运行npm install extract-text-webpack-plugin@next//好像是版本问题，Github上说一大堆WebpackV4
多页面Demo：new webpack.optimize.UglifyJsPlugin不支持ES6语法，
要么再引入babel或者在npm市场使用[uglifyjs-webpack-plugin]

```
## [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
## [webpack中文文档](https://www.webpackjs.com/)
