# GIT����ѧϰ<sup>shine</up>
## �����汾��
### ��һ�����Ƚ�һ����Ŀ¼
```JavaScript
$ mkdir es6
$ cd es6  //������Ӧ�ļ���
$ pwd //��ʾ��ǰĿ¼
/Users/shine/es6
```
�����ʹ��Windowsϵͳ��Ϊ�˱�����������Ī����������⣬��ȷ��Ŀ¼����������Ŀ¼�����������ġ�
### �ڶ�����ͨ��git init��������Ŀ¼���Git���Թ���Ĳֿ�
```JavaScript
$ git init
Initialized empty Git repository in /Users/shine/es6/.git/
```
ע�⣺��Ҫʹ�ü��±��༭�ĵ���Ӧ��ʹ�������༭����Ĭ�ϱ�������ΪUTF-8 without BOM���ɡ�
### ������������ļ�
```JavaScript
$ git add readme.txt
```
������git add����Git�����ļ���ӵ��ֿ⡣
### ���������ύ�ļ�
```JavaScript
$ git commit -m "wrote a readme file"
[master (root-commit) cb926e7] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
```
������git commit����Git�����ļ��ύ���ֿ⡣
Ҳ����һ���ύ����ļ���
```JavaScript
$ git add file2.txt file3.txt
$ git commit -m "add 3 files."
```
### ���Ĳ������ֿ⵱ǰ״̬
```JavaScript
$ git status
```
### ���岽���Ƚ��ļ��仯���
```JavaScript
$ git diff readme.txt 
```
## �汾����
### ��һ�����Ȳ鿴һ�¼�¼
```JavaScript
$ git log
commit d574fe5baa7c76d616fd63f08f150db8b549db64
Author: shine <guangda1234@126.com>
Date:   Thu Mar 3 18:07:52 2016 +0800
```
�����Ϣ̫������Ӳ�����
```JavaScript
$ git log --pretty=oneline
```
����commit���ǰ汾�š����ȣ�Git����֪����ǰ�汾���ĸ��汾����Git�У���HEAD��ʾ��ǰ�汾����һ���汾����HEAD^������һ���汾����HEAD^^����Ȼ����100���汾д100��^�Ƚ�������������������д��HEAD~100��
### �ڶ�����������һ���汾
```JavaScript
$ git reset --hard HEAD^
```
��
```JavaScript
$ git reset HEAD~1
```
��ϸ�˽�--hard���� [git reset soft,hard,mixed֮�������](http://www.cnblogs.com/kidsitcn/p/4513297.html) 
������ָ���汾�����ָ����汾�ſɲ�дȫ��ָֻ��ǰ�漸���ַ����ɡ���ȻԽȫԽ�ã�����git���ҡ�
```JavaScript
$ git reset --hard d574fe5baa7c
```
ʹ��reflog�鿴������ʷ
```JavaScript
$ git reflog
a945af2 HEAD@{0}: reset: moving to HEAD^
d574fe5 HEAD@{1}: commit: edit file
a945af2 HEAD@{2}: commit: add storeroom
8edcdce HEAD@{3}: commit (initial): add let
```
## ͬ��Զ�̿�
### ��һ��������SSH Key
```JavaScript
$ ssh-keygen -t rsa
```
### �ڶ��������Զ�̿�
```JavaScript
$ git remote add origin git@github.com:scscms/es6.git
$ git push -u origin master
```
�����һ��ʹ��Git��clone����push��������GitHubʱ����õ�һ�����档ȷ�ϼ��ɣ��Ժ�����Ͳ�������ˡ�
�Ժ�ͬ��Զ��ֻҪ���룺
```JavaScript
$ git push origin master
```
### ��Զ�̿��¡
```JavaScript
$ git clone git@github.com:scscms/es6.git
```
��ϸ�μ��� [GIT�̳� ����ƪ](http://www.scscms.com/html/article/20150409-19457815.html)







��Դ [��ѩ�� Git�̳�](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000) 