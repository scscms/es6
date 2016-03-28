# babel编译ES6<sup>shine</up>
ECMAScript 6(ES6) 的发展或者说普及之快可以说是难以想象的，对很多人来说 ECMAScript 5(ES5) 都还普及呢。现代浏览器对 ES6 新特新或多或少的有些支持，但支持度不高，所以要想在浏览器中直接使用 ES6 的新特性，还得等上一段时间。
对 ES6 的普及起到至关重要的就不得不说 babel 了。 babel 可以将 ES6 代码完美地转换为 ES5 代码，所以我们不用等到浏览器的支持就可以在项目中使用 ES6 的特性。 
### 安装babel
```JavaScript
$ npm install -g babel
```
一般来说安装node模块，使用官网速度比较慢，所以建议使用淘宝滤镜文件。
```JavaScript
$ npm install -g babel --registry=https://registry.npm.taobao.org
```
### 测试编译
```JavaScript
$ babel es6.js
```
提示错误：
```JavaScript
The CLI has been moved into the package `babel-cli`.
npm install -g babel-cli
```
要求安装babel-cli,那么你就安装呗：
```JavaScript
$ npm install -g babel-cli
```
或者提示：
```JavaScript
You have mistakenly installed th `babel` packge, which is a no-op in Babel ......
    npm uninstall babel
    npm install babel-cli
See http://babeljs.io/docs/usage/cli/ for setup instructions.
```
意思要求删除babel直接安装babel-cli，那么请直接执行：
```JavaScript
$ npm uninstall babel
$ npm install -g babel-cli --registry=https://registry.npm.taobao.org
```
### 再次测试编译
```JavaScript
$ babel es6.js
```
输出仍是ES6源码！玛尼？
原来是没有安装babel-preset-es2015插件，再安装吧：
```JavaScript
$ npm install babel-preset-es2015 --registry=https://registry.npm.taobao.org
```
然后执行：
```JavaScript
$ babel es6.js --presets es2015
```
终于可以啦。
### 编译成文件
编译单人文件为ES5
```JavaScript
$ babel es6.js --presets es2015 -o es5.js
  # 或者
$ babel es6.js --presets es2015 --out-file es5.js
```
也可以整个文件夹编译，es6文件所有文件编译到es5文件夹下：
```JavaScript
$ babel es6/ --presets es2015 -d es5/
# 或者
$ babel es6/ --out-dir es5/
```
整个文件夹编译到一个js文件里：
```JavaScript
$ babel es6/ --out-file es5.js
```
### 编译同时生成源文件
```JavaScript
$ babel script.js --out-file script-compiled.js --source-maps
# 或
$ babel script.js -o script-compiled.js --s
```
如果你想生成只有一行的文件，可使用inline参数：
```JavaScript
$ babel script.js --out-file script-compiled.js --source-maps inline
```
### 实时编译文件
```JavaScript
$ babel --watch es6.js --out-file es5.js 
```
--watch命令即开启监听文件编辑功能，只要有修改就会同步编译好。那你就可以即时看到效果了。
如果要强制退出就安Ctrl+C键退出。

[babel视频](http://ninghao.net/video/3076) 