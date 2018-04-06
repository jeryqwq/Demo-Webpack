# Demo-Webpack

#  Do this to build node enviroment
>1. npm install package.json(npm i)
>2. cd Demo?
>3. webpack(toload file name(webpack.config.js))
## webpack中文文档入门例子
### 踩坑总结，也有在webpack.config.js中通过注释写出，以下是总结
```bash
Demo1:官网node版本8.2，当前8.9以及以上版本API差异，需改成,
>npx webpack src/index.js --output-filename dist/bundle.js
----
Demo2:webpack不要全局安装，安装到当前项目下即可，否则报错：
Cannot find module 'webpack/lib/node/NodeTemplatePlugin'，
3.2版本的webpack也移除webpack.optimize.UglifyJsPlugin，
please use config.optimization.minimize instead.
---
```

## [**webpack中文文档**](https://www.webpackjs.com/){:target="_blank"} 
