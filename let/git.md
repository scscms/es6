# GIT命令学习<sup>shine</up>
## 创建版本库
### 第一步：先建一个空目录
```JavaScript
$ mkdir es6
$ cd es6  //进入相应文件夹
$ pwd //显示当前目录
/Users/shine/es6
```
如果你使用Windows系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。
### 第二步：通过git init命令把这个目录变成Git可以管理的仓库
```JavaScript
$ git init
Initialized empty Git repository in /Users/shine/es6/.git/
```
注意：不要使用记事本编辑文档，应该使用其他编辑器，默认编码设置为UTF-8 without BOM即可。
### 第三步：添加文件
```JavaScript
$ git add readme.txt
```
用命令git add告诉Git，把文件添加到仓库。
### 第三步：提交文件
```JavaScript
$ git commit -m "wrote a readme file"
[master (root-commit) cb926e7] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
```
用命令git commit告诉Git，把文件提交到仓库。
也可以一次提交多个文件：
```JavaScript
$ git add file2.txt file3.txt
$ git commit -m "add 3 files."
```
### 第四步：检查仓库当前状态
```JavaScript
$ git status
```
### 第五步：比较文件变化情况
```JavaScript
$ git diff readme.txt 
```
## 版本回退
### 第一步：先查看一下记录
```JavaScript
$ git log
commit d574fe5baa7c76d616fd63f08f150db8b549db64
Author: shine <guangda1234@126.com>
Date:   Thu Mar 3 18:07:52 2016 +0800
```
如果信息太长可添加参数。
```JavaScript
$ git log --pretty=oneline
```
提醒commit就是版本号。首先，Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
### 第二步：返回上一个版本
```JavaScript
$ git reset --hard HEAD^
```
或
```JavaScript
$ git reset HEAD~1
```
详细了解--hard参数 [git reset soft,hard,mixed之区别深解](http://www.cnblogs.com/kidsitcn/p/4513297.html) 
还可以指定版本号来恢复，版本号可不写全，只指定前面几个字符即可。当然越全越好，方便git查找。
```JavaScript
$ git reset --hard d574fe5baa7c
```
使用reflog查看命令历史
```JavaScript
$ git reflog
a945af2 HEAD@{0}: reset: moving to HEAD^
d574fe5 HEAD@{1}: commit: edit file
a945af2 HEAD@{2}: commit: add storeroom
8edcdce HEAD@{3}: commit (initial): add let
```
## 同步远程库
### 第一步：创建SSH Key
```JavaScript
$ ssh-keygen -t rsa
```
### 第二步：添加远程库
```JavaScript
$ git remote add origin git@github.com:scscms/es6.git
$ git push -u origin master
```
当你第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告。确认即可，以后操作就不会出现了。
以后同步远程只要输入：
```JavaScript
$ git push origin master
```
### 从远程库克隆
```JavaScript
$ git clone git@github.com:scscms/es6.git
```
详细参见： [GIT教程 提升篇](http://www.scscms.com/html/article/20150409-19457815.html)







来源 [廖雪峰 Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000) 