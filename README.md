# babel����ES6<sup>shine</up>
ECMAScript 6(ES6) �ķ�չ����˵�ռ�֮�����˵����������ģ��Ժܶ�����˵ ECMAScript 5(ES5) �����ռ��ء��ִ�������� ES6 �����»����ٵ���Щ֧�֣���֧�ֶȲ��ߣ�����Ҫ�����������ֱ��ʹ�� ES6 �������ԣ����õ���һ��ʱ�䡣
�� ES6 ���ռ���������Ҫ�ľͲ��ò�˵ babel �ˡ� babel ���Խ� ES6 ����������ת��Ϊ ES5 ���룬�������ǲ��õȵ��������֧�־Ϳ�������Ŀ��ʹ�� ES6 �����ԡ� 
### ��װbabel
```JavaScript
$ npm install -g babel
```
һ����˵��װnodeģ�飬ʹ�ù����ٶȱȽ��������Խ���ʹ���Ա��˾��ļ���
```JavaScript
$ npm install -g babel --registry=https://registry.npm.taobao.org
```
### ���Ա���
```JavaScript
$ babel es6.js
```
��ʾ����
```JavaScript
The CLI has been moved into the package `babel-cli`.
npm install -g babel-cli
```
Ҫ��װbabel-cli,��ô��Ͱ�װ�£�
```JavaScript
$ npm install -g babel-cli
```
������ʾ��
```JavaScript
You have mistakenly installed th `babel` packge, which is a no-op in Babel ......
    npm uninstall babel
    npm install babel-cli
See http://babeljs.io/docs/usage/cli/ for setup instructions.
```
��˼Ҫ��ɾ��babelֱ�Ӱ�װbabel-cli����ô��ֱ��ִ�У�
```JavaScript
$ npm uninstall babel
$ npm install -g babel-cli --registry=https://registry.npm.taobao.org
```
### �ٴβ��Ա���
```JavaScript
$ babel es6.js
```
�������ES6Դ�룡���᣿
ԭ����û�а�װbabel-preset-es2015������ٰ�װ�ɣ�
```JavaScript
$ npm install babel-preset-es2015 --registry=https://registry.npm.taobao.org
```
Ȼ��ִ�У�
```JavaScript
$ babel es6.js --presets es2015
```
���ڿ�������
### ������ļ�
���뵥���ļ�ΪES5
```JavaScript
$ babel es6.js --presets es2015 -o es5.js
  # ����
$ babel es6.js --presets es2015 --out-file es5.js
```
Ҳ���������ļ��б��룬es6�ļ������ļ����뵽es5�ļ����£�
```JavaScript
$ babel es6/ --presets es2015 -d es5/
# ����
$ babel es6/ --out-dir es5/
```
�����ļ��б��뵽һ��js�ļ��
```JavaScript
$ babel es6/ --out-file es5.js
```
### ����ͬʱ����Դ�ļ�
```JavaScript
$ babel script.js --out-file script-compiled.js --source-maps
# ��
$ babel script.js -o script-compiled.js --s
```
�����������ֻ��һ�е��ļ�����ʹ��inline������
```JavaScript
$ babel script.js --out-file script-compiled.js --source-maps inline
```
### ʵʱ�����ļ�
```JavaScript
$ babel --watch es6.js --out-file es5.js 
```
--watch������������ļ��༭���ܣ�ֻҪ���޸ľͻ�ͬ������á�����Ϳ��Լ�ʱ����Ч���ˡ�
���Ҫǿ���˳��Ͱ�Ctrl+C���˳���

[babel��Ƶ](http://ninghao.net/video/3076) 