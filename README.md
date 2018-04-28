> # vue-webpack-101
> 使用webpack4 从0到1构建一个vue 单页项目

# vue webpack 项目初始化

## 初始化
 1. mkdir vue-webpack-101
 2. cd vue-webpack-101
 3. npm init （都懂 就不介绍了）
 4. touch .gitignore （都懂 就不介绍了）

## 装包
- Yarn add webpack vue vue-loader 根据包与包之间的依赖关系提示 继续安装其他包 这里就不一一列出，后面会给完整的package.json，前期只需要 webpack vue vue-loader 这三个相关包就可以跑起来一个示例demo。

- 配置 script 
```
"scripts": {
    "build": "webpack --config webpack.config.js"
}
```
为什么要在这里面调用webpack而不是在终端里面直接运行呢？因为只有在这里调用webpack，它才会优先调用我们项目里面安装的webpack版本，如果我们在命令行里面输入webpack，它会调动全局的webpack，这个时候全局的webpack可能会跟我们项目中的webpack版本不一致，所以我们还是采取这种方式比较稳妥。

## 目录
- vue-webpack-101
    - src
        - app.vue 
        - index.js (入口文件)
    - package.json
    - .gitignore
    - node_modules

## 构建
###  app.vue 
```html
<template>
  <div id="test">{{test}}</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'abc',
    }
  }
}
</script>

<style>
 #test {
   color: brown;
 }
</style>
```
### index.js (入口文件)
``` javascript
import Vue from "vue";
import App from "./app.vue";

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root)
```
### webpack.config.js
```js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');  //*1 这里

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin() //*1 这里
  ]
}
```
## 一步一步的解决报错
### 错误1
> 1 引入VueLoaderPlugin解决了问题如图
![image](https://user-images.githubusercontent.com/10173268/39391065-8744357c-4ad0-11e8-90c0-c60cd43a6478.png)
> [vue-loader](https://vue-loader.vuejs.org/guide/)

### 错误2
![image](https://user-images.githubusercontent.com/10173268/39391154-b8e66c16-4ad1-11e8-8477-8b6cb4873a1a.png)

### webpack.config.js 添加如下规则
```js
// this will apply to both plain .css files
// AND <style> blocks in vue files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
```
### warning 1
![image](https://user-images.githubusercontent.com/10173268/39391237-0667ef22-4ad3-11e8-8d3f-d9b497191e78.png)
### webpack.config.js
```
entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  _**mode: 'development',**_
```
至此，npm run build 终于跑起来了
## 结果图
![image](https://user-images.githubusercontent.com/10173268/39391282-5a798760-4ad3-11e8-9e8d-d2e0963c01bc.png)

# 配置开发环境运行项目
## 安装依赖
```
npm install --save-dev webpack-dev-server
```
## 配置 webpack.config.js
```js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: [".js", ".json", ".css", '.vue']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain .js files
      // AND <script> blocks in vue files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain .css files
      // AND <style> blocks in vue files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'), // 模板文件
      inject: 'body' // js的script注入到body底部
    })
  ]
}
```
## 配置script
```js
"scripts": {
    "dev": "webpack-dev-server --config webpack.config.js"
  }
```
## 执行npm run dev

> 完结散花

TODO
- [ ] 资源优化
