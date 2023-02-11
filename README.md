@[toc]
效果：
登录页：
1、包含表单校验
2、路由守卫
3、密码显示切换
4、输入框的重置功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/f30118e174654fb5897e64b982563446.png)

学生管理包含
1、侧边栏菜单
2、面包屑导航
3、学生新增功能
4、学生查询功能
5、学生信息修改
6、学生信息删除
7、学生信息查询校验
8、elementui前端分页功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/992e2be09f094a01a1d4c8f3e6914d0b.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0648568fed63446db5a8e4d46ab37be4.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/74185a14b8b54f75bd40678f7c821a93.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/34a39769718c455abf3e460f4b333664.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/e49b5bdeef5542bd87ac116951ff545d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f5eaf85b9d524005b1624ef670973fea.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c128d1c835204249b5af149e58eac744.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/de551c33c54540dfba02363bb5a1a9a3.png)
作业列表
![在这里插入图片描述](https://img-blog.csdnimg.cn/6c3a77ccee7d4331a33be0afc178a4a9.png)

信息列表
![在这里插入图片描述](https://img-blog.csdnimg.cn/fe530e963c3a4695bcf05c19df40de7e.png)

考勤列表
![在这里插入图片描述](https://img-blog.csdnimg.cn/088d1c6705124d469070133c1160b6bb.png)
echarts实时关联学生管理中的数据，以可视化呈现

![在这里插入图片描述](https://img-blog.csdnimg.cn/77d426af72334b838da31112839eeb6b.png)



# 一、项目初始化
## 初始化安装
Vue-Cli2.0
1、安装
```console
npm i -g vue
npm i -g vue-cli
npm i -g webpack
npm i -g webpack-cli
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c986b7253d2469e9f075eaeab120c89.png)

2、检查版本，看安装是否成功
```console
vue -V
webpack -v
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/344bb67b2ea54cc78d8b50d30ba67dab.png)

3、新建项目

vue-cli3之前，也就是vue-cli2只能利用`vue init webpack app`命令初始化vue2.x的项目
```console
vue init webpack projectName
```
(如果是从vue-cli3.0+版本切换成vue-cli2.0+版本，那么需要使用命令`npm uni -g @vue/cli`先卸载vue-cli3.0+版本后再做以上操作)


## 初始化项目
```console
vue init webpack front-end
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/4b679ea72f9a4507bf7c1ef70a262a3f.png)

## 运行项目
```console
npm run dev
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ffed7a1d170743c88baf9efdb067e8ef.png)
## 自动打开浏览器
修改配置 自动打开浏览器
![在这里插入图片描述](https://img-blog.csdnimg.cn/cc9426cff9984ada9c16fcd5e26ae91e.png)

false设置为true
![在这里插入图片描述](https://img-blog.csdnimg.cn/7f0f296f0408401a9c8bd032347c2132.png)

## 修改路由模式 hash改为history
![在这里插入图片描述](https://img-blog.csdnimg.cn/746a2b6def71445f9a33d629f3ef983c.png)
作用：
![在这里插入图片描述](https://img-blog.csdnimg.cn/d99de7164807488fb7401e98b61d6134.png)

# 二、ElementUI配置
[element-ui官网](https://element.eleme.cn/#/zh-CN/component/installation)

## 全局安装
```console
npm i element-ui -S
```
## 在main.js中导入并使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/d108545fd9cc4d1c818facff0fd4fed5.png)
组件中使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/60d404c9e2244a8aa3da8cb436960864.png)
效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/92aaffe685e5407282b7ca65da611f12.png)
到这儿就证明安装成功了

# 三、在项目中使用CSS预处理器scss
官网 `www.sass.hk`
## 1. 安装
```console
npm i sass-loader node-sass -S
```
## 2. 使用在.vue文件中的style标签里加上lang='scss'既可使用scss语法


==如果是vue2.x、webpack3.x，可做如下解决方案：==
```console
npm install node-sass@4.14.1 -S //安装node-sass
npm install sass-loader@7.3.1 -S //安装依赖包sass-loader
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/f4487ee2d5a145a48c14dae5df840742.png)


因为vue2不支持sass-loader^10以上版本，可从vue更新版本或者sass-loader版本着手


如果报错就是sass版本过高
```console
node 16对应的sass
npm install node-sass@6.0.1 -D
npm install sass-loader@10.2.0 -D

sass-loader 4.1.1，node-sass 4.3.0
sass-loader 7.0.3，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.14.1
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/4ffb8ab28d6b400e8cacce06e3febe36.png)
## 3. 在build文件夹下的webpack.base.conf.js的module下 rules里面添加配置
```console
{
test: /.sass$/,
loaders: ['style', 'css', 'sass']
},
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ca8324a91f82491db06fd1ed11c0eae4.png)
查看使用是否成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/e8c8a1c3ee4042de8415b10dd7433376.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/62926f39b4cc4cb69fd5b28c719234c2.png)

# 四、Vue中使用reset.css
任何一个项目都需要做样式重置,这里我们使用官方的样式重置内容，如果需要补充可以自己手动添加。

官网地址：https://meyerweb.com/eric/tools/css/reset/

我们把代码复制下来,在vue中新建一个reset.css文件,然后在app.vue的style中进行引入使用：
`@import url('./assets/css/reset')`
![在这里插入图片描述](https://img-blog.csdnimg.cn/3c8bf668cf2149cdbc5d5e79f8abbe29.png)
# 五、关闭Eslint语法检测规则
方式1、在bulid文件夹中的webpack.base.conf.js文件中注释掉rules中的这行代码，重启项目即可。
```
...(config.dev.useEslint ? [createLintingRule()] : [])
```
方式2、或者在config文件夹中的index.js中设置`useEslint:false`
![在这里插入图片描述](https://img-blog.csdnimg.cn/fc9733d74c6d41f9966972723870ada8.png)
# 六、路由懒加载方法
1、官方推荐度 方法，使用ES中的import
```js
component: () => import('@/components/Home')
````
![在这里插入图片描述](https://img-blog.csdnimg.cn/0dad3e61235c406ca2dc40731fb5a6cb.png)
2、使用Vue异步组件
```js
component: resolve => require((['@/components/Login']), 
```


## 配置404页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/c533147f13dd41e2b95136ca38226be9.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/1e5eba5dd0d043798189aeddcdf723a9.png)



# 七、配置Login页面
效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/b6a46637a4a244d58f5e6960fb800c4d.png)


使用element ui中的自定义校验规则
![在这里插入图片描述](https://img-blog.csdnimg.cn/922c9c6dd8eb4ddd9f9346e7dc96d4c7.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c05b8004e2194d899d9dc17766d245fb.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6750fbcd07b747e49fc5cce264a26ce1.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c525f26459b949999bba5a31bce33486.png)

测试输入密码和用户名，点击登录，是否可以得到数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/5643b0f7b76c4a28b6674831790aef59.png)
重置也可生效



登录验证
![在这里插入图片描述](https://img-blog.csdnimg.cn/5fec4a6acb0447258b491d40ac685cca.png)

## 添加密码显示切换icon
input的官网文档上属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/f80292a9b44d4638bd0b861e09f9b655.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/fb7fc04ea0494d9882ca85d3698cf087.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c0e9d9fa6fbe467fa025c7838d4a102a.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/8ffe3ae986904f34a5ba24fcd70d1a80.png)



# 八、完成Login登录验证功能
在input写入elementui的登陆规则
![在这里插入图片描述](https://img-blog.csdnimg.cn/ba52b675c0aa4d02b43dbee5b2a721d5.png)
登录成功 则跳转到/main页面，错误则打印error
![在这里插入图片描述](https://img-blog.csdnimg.cn/9e045057ab7a48e6988f6f429fcb01a8.png)
# 九、完成菜单项各个页面组件的封装
1、新建页面，迁移结构代码，然后迁移样式代码，再迁移功能代码
2、在需要使用这个组件的页面进行导入和使用
例子
```js
import Footer from  '组件的路径'
components: {
    Footer
}
<Footer></Footer>
```
## header
![在这里插入图片描述](https://img-blog.csdnimg.cn/e62949ba3e4a40338325c1db624b37ce.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/1301c2a0887c4ff0802b2a2d3db268fa.png)
## footer
![在这里插入图片描述](https://img-blog.csdnimg.cn/be5d5f9e1c174e15b9c32d3d6cb13a91.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2fa7a6caa49b49d0ac2c97c2e0ccbc91.png)
## 学生管理的二级页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/b620f910bb074ce99f79431e62fb9c78.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c7605bf0f5a74b82b585911df4cb15c0.png)


# 十、导航菜单 侧边栏

使用模板
![在这里插入图片描述](https://img-blog.csdnimg.cn/7499d679d29b446eb99d7625b53c1e0c.png)


mean组件，创建menu和activePath。
activePath是elementui所使用的default-active的属性，当前激活菜单的 index。作用是刷新页面也会在这个index。
menus拿来存储路由信息。
![在这里插入图片描述](https://img-blog.csdnimg.cn/f720570a253a42119c9a695664bcd689.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/26d34b3125754b8d808d2a18c11d338d.png)




获取全局路由对象使用this.$router，获取所有路由信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/570589449430442eb266d072bf0a95df.png)
配置router和default-active
![在这里插入图片描述](https://img-blog.csdnimg.cn/6d749e8288b74b8891f8bb98f947ce0f.png)

遍历循环路由对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/268c779eb58e4a3c9ed2bf8231b7d589.png)

路由`router\index.js`
![在这里插入图片描述](https://img-blog.csdnimg.cn/35e52e58887145ea88733982979d7859.png)
实现的菜单效果

>![在这里插入图片描述](https://img-blog.csdnimg.cn/25288c724fec4d21971dc6d68632b408.png)


# 十一、font-awesome图标库的使用

## 基本使用

官网地址：https://fontawesome.com/
下载: 
```console
npm i font-awesome
```
在main.js中加入以下代码就可以使用font-awesome图标库
```js
import 'font-awesome/css/font-awesome.min.css'
<i class='fa fa-users'></i>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/a5fb2ba19429492ea09fc4302d622cc1.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a8b077f8475f40a88721369b8ed7b3d7.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/adca5e518ee543378c03fccf0a2a12a8.png)
## 动态配置图标
![在这里插入图片描述](https://img-blog.csdnimg.cn/23a0769662794f8a8d34b7ceaa0826a4.png)
在路由数据中添加属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/0c32811c220d427f8810a29c992effb9.png)
menu中循环绑定各自的class样式
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9958bddd75e42b89d27cb26b2447b2b.png)

# 十二、添加面包屑导航栏

![在这里插入图片描述](https://img-blog.csdnimg.cn/dd6f97faeb0842e284c24c0b41f402be.png)
```js
this.$route 用来获取当前路由的信息
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/c2d4663fc4514e1687eb887462237a35.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/97def659314a4a6ba50854b8667601e9.png)
效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/d9d670a8ebc14bb9aace738bbf2953cc.png)

# 十三、设置学生列表信息表格
![在这里插入图片描述](https://img-blog.csdnimg.cn/322ecbfbe792413f96127a9a0c7aca37.png)
修改优化
伪数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/501819c19384499aa934efa36aa96513.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/4ddbf82047e84104a96f8f555371e297.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/e03ecbee6fa24566981cfdd33ae60e8f.png)



## 添加修改和删除按钮
![在这里插入图片描述](https://img-blog.csdnimg.cn/cca6cce665044b559d0b464122b737b6.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/5620833789bd43d0bfc3c79cc5e076e0.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/4d4c3a5e3b1340f583df10e7056a88ea.png)
## 新增、查找按钮
![在这里插入图片描述](https://img-blog.csdnimg.cn/39ac1cb5c62646049921b36c582b7a1d.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/96f6384749604f86a1041e3238ea23ba.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e165501f1d8499a993ca5988263e0c4.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/683dde4f86654d10ba9838f9eb23406f.png)

效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/9c3e679de93247b08d08434668c9f4b2.png)

修改优化
![在这里插入图片描述](https://img-blog.csdnimg.cn/37b970bfa28a4ae1a15fccddbf0dd776.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/08fc82014dfc4fb1b9ec81b481082e72.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3d17b397dbc24e159a7c4003745467bb.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d71187e696194354b3693aae65294696.png)


## 新增按钮弹出对话框模板
![在这里插入图片描述](https://img-blog.csdnimg.cn/cc8e42afe8d14bf4a1c052fdfd7c4950.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/48a55c965da541b7bb1a56bbfc6eca3a.png)
修改优化

![在这里插入图片描述](https://img-blog.csdnimg.cn/fd0c21b6bea04623ab3a3693bac2d7b5.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/b53b219373104439b610051ab0c86434.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2fdac6dc0dc240bf91cb8efdf2a377db.png)
设置的默认值
![在这里插入图片描述](https://img-blog.csdnimg.cn/5cdfef87c24c480882d2ae024bf5d07d.png)
## 添加表单验证规则
![在这里插入图片描述](https://img-blog.csdnimg.cn/7b451fedb1424d3cb9bd3ff1f7dc7dbe.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/86da84e8e629430ca2dced3101080e8d.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/e23a61ee6c6c42ab8d32afb6ff7b0755.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/47a375e5ebf241deb853ba872b38bcdf.png)
判断验证是否通过
![在这里插入图片描述](https://img-blog.csdnimg.cn/2b6d61ff7579402b89eee21c366503cd.png)
# 十四、学生列表-信息修改按钮
修改沿用新增的弹窗
![在这里插入图片描述](https://img-blog.csdnimg.cn/6926dddfd215488db485e63247cfd6b7.png)
当时新增时，为true，标题则显示新增学生信息，否则显示修改学生信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/7cbe33666bd14dc5bb5f75994dba3126.png)
点击修改后，将本行数据赋值给对话框
![在这里插入图片描述](https://img-blog.csdnimg.cn/49d57ae595f747a79d8aa6216ef8bdfa.png)

效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/5c05de037e2543139a9a02094fba2604.png)
确定方法中做判断是添加还是修改
![在这里插入图片描述](https://img-blog.csdnimg.cn/383fdd4dbff14351b1d56d72c347aceb.png)
# 十五、完善作业列表、信息列表布局
![在这里插入图片描述](https://img-blog.csdnimg.cn/c0a882675b894954a81a9b9340405ae4.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/1266745c1b954120bce54faf1035429c.png)

# 十六、使用My JSON Server添加接口，拿来做模拟服务器

官网https://my-json-server.typicode.com/
创建自己的接口
![在这里插入图片描述](https://img-blog.csdnimg.cn/bab29500ca8e4a1381a0baa4361a2ada.png)
# 十七、axios数据交互
官方网址：http://www.axios-js.com/
中文网址：https://www.kancloud.cn/yunye/axios/234845
1、安装axios：`npm i axios`
![在这里插入图片描述](https://img-blog.csdnimg.cn/05ce1d4eadc549358e52f0b6458cb8d5.png)

2、在main.js中进行全局的挂载后使用
```js
import axios from 'axios'
Vue.prototype.axios = axios
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/0c96ac6b577a4686bba88958e5be194d.png)
然后使用：`this.axios[请求方法].then().catch()`

![在这里插入图片描述](https://img-blog.csdnimg.cn/21b2d1feb84749188530cb40e3aa6ccd.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/5acff1a8e061432ca4aa8fd38cefd132.png)

## 模拟get方法
在login方法上去测试
![在这里插入图片描述](https://img-blog.csdnimg.cn/113da28a5e2248efb068317410809cdd.png)
响应成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/4718d1a66ccb470bac121dab73d4b0b7.png)

## 模拟post登录，post推送服务器成功，本地存入用户名
![在这里插入图片描述](https://img-blog.csdnimg.cn/fea0c36e803a4b68b9d7f9bc53f4e44d.png)

post请求数据成功存入接口，返回status201
![在这里插入图片描述](https://img-blog.csdnimg.cn/07903b56f61b4ffb9e8a0a4900e6d251.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/344d5d045f3b45c6b0614b47fb834162.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/27fa8cdd2de5444eb52f4f895f9ab51e.png)
### 将用户名存入localstorage
```js
存值：localStorage.setItem("username", res.data.username)
取值：localStorage.getItem("username")
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/82c98c47ac7e476197c2840170da5b91.png)
在header中取出localstorage的数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/482f87ddbef848b0a78fbf7c235b5c17.png)

对应展示出来即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e0dc1b5ae554feb8e3bd341ee73a197.png)
## 创建登录成功提示弹窗
![在这里插入图片描述](https://img-blog.csdnimg.cn/37427e069c0844d192c06399a2f1d95c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/dac2028169af46738000ec7b9bd4269c.png)
效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/eaa92ce425d84981acc9680155e50904.png)

# 十八、axios二次封装
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c01bbf5ee984dcbab9480c52cec4bd0.png)
将service挂载到main.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/398ac7729231444381b9b23b16312e07.png)
封装后就可直接调用service取代axios路径方法了
![在这里插入图片描述](https://img-blog.csdnimg.cn/529bd31b4242451ea2c878485d090c94.png)


# 十九、学生列表信息展示
页面一渲染就拉取服务器数据
![在这里插入图片描述](https://img-blog.csdnimg.cn/603f876f8a304e95990de4a3646b945b.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6f7456a60ea0406eb45a7925d8e6d14d.png)



# 二十、学生列表新增、删除功能
## 新增功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/00f0b8a85db54971b50e54e4ad6f98dd.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7f416cf1a04e472da3b5377af19f0610.png)
## 删除功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/cd68179c2a9d4d039f3818393ef1c736.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/2087b42298f2422c835e00d77f89e02c.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/13699a8e768a4ac18e6b44df5905ce39.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/13a70afea6c047439b65bfbf90e0fabb.png)

# 二十一、cors 跨域问题 改造项目
![在这里插入图片描述](https://img-blog.csdnimg.cn/422c6a3b97974664a04a6a77764a7e9d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d2db609c879b4f28901d93e1ea049258.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/29e79f4821b74372b886c8aa17c2b5de.png)

# 二十二、学生列表-修改功能
patch方法，传入id，根据返回状态进行判断
![在这里插入图片描述](https://img-blog.csdnimg.cn/5430a2f43b1f43b898304ce9567400a4.png)

# 二十三、学生列表-查找功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/d3d07ef8a48d4c3f8d1413b738a6bbde.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c046779c73eb40959830762f62c9310f.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/718a0a7286824824ad8e558bdcdd33c8.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/504bbc75cad041cf8951b3d24181eedb.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/ae105af824b6436ab219339790e78bc9.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/8437f3e5eebb479399e4e07e11d67dea.png)

# 二十四、前端分页

1、前端实现分页：
首先获取所有的数据内容，然后使用slice进行分页
```js
tableData.slice((当前页数 -1)*每页条数, 当前页数 * 当前条数)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/12e7c76cc23b4d8fad8eb670189ad183.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/882050cb1c53477ba3c3254d4ccd626c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9b26c3c3bd7642e0a36a19698fddbfe3.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0646725d22694f6ebfd8d8504ce90e62.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/29df92156e8c47fd96da10f33e823005.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc44a6fcb4594032b2bdfd15663870da.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6aecaf870fce4dcc9d2d7c5b85e3fc12.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f5aef744198a40439a6985ff90fa6830.png)


效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c4b998bd2164a8fa71d1b1b5cf52c16.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c7ed7265545d46c0b0e4eaa1362bafe9.png)

# 二十五、封装分页等公用方法 快速完成作业列表
创建一个api来存放公用方法，获取服务器数据，root来替代this，将方法导出，
![在这里插入图片描述](https://img-blog.csdnimg.cn/17539de77bbc42ac885624706443a067.png)

在组件中使用封装方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/0cdf0c8346b34f75b7abe16ab5cb473d.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/71c640d2a2bd4832a512069981b19cd8.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/16eec432034a408f847d17075bb149d8.png)

# 二十六、封装分页组件

添加一个attend.vue考勤列表
![在这里插入图片描述](https://img-blog.csdnimg.cn/bef1355aeab1491ca8e06d15c816e3c8.png)
router\index.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/1afd7b66084c4eec8d4dd411f436b780.png)
封装一个page组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/68319d5ca1894c4fb06a8e7481e146e4.png)
将其使用在attend页面中
![在这里插入图片描述](https://img-blog.csdnimg.cn/5dab5fec9c3a4a168c6e815d3be5b741.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/dea6412d173041ca86b9145acd6e6abf.png)

# 二十七、封装 增加、修改方法，使用组件完善信息列表



![在这里插入图片描述](https://img-blog.csdnimg.cn/422b1ae080f24bfcacb70c1b46076d4c.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/9115c336bb7f4651ba6a250591ac55d4.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/fc8809dde4b54c129ff2a2543071e8b2.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/15ff54d9d3cb4daaac5c690d78f212ab.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c377b62d042e4009a305b474fcb0896c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c8892f787170414891f1205cdb6faeb2.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3d32b925f76a42e0b968cb779c33357a.png)

# 二十八、配置ECharts
npm安装echarts
```js
npm install echarts --save
```
官网：https://echarts.apache.org/handbook/zh/basics/import
参照官网，挂载到vue上
![在这里插入图片描述](https://img-blog.csdnimg.cn/faea4d37e9ad4ab5b8ae44f852ca2480.png)
创建一个新的组件页，拿来展示echarts
![在这里插入图片描述](https://img-blog.csdnimg.cn/7eeed354b5db46b2b37f05d331010f90.png)
mounted挂载完成 则加载echarts
![在这里插入图片描述](https://img-blog.csdnimg.cn/5c571f65efb6475182cfba19eb68a30b.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/4ce9592fd73a40c1afbc2f5b7d52111c.png)
# 二十九、完成班级人数饼图与作业完成率条形图
![在这里插入图片描述](https://img-blog.csdnimg.cn/96689fdaa1584afb8c01fae39199f9ed.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/60a3e1dc6c294d52a6a706cc8153b056.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/55adf050463e4285984ec9ef412317bc.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0c4051616a5e4e0cbd003b8c2482ca31.png)

渲染option
![在这里插入图片描述](https://img-blog.csdnimg.cn/fbfcb22973e44343a48c7b892400bfce.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/32808321099b4c859e6af5bb06326fcf.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b2f288f73e604991bdad89617df4e2a9.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6acdad557dca4f75b7932bdb30522a1f.png)

# 三十、优化退出和登录

退出按钮
![在这里插入图片描述](https://img-blog.csdnimg.cn/a16314d555004644b6c6acdf5c22a677.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/78ea7412ecd2467ba0c797796b5b407a.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c974130ee9e422189d6355e76bf6db3.png)


登录判断为 服务器中数据是否匹配
![在这里插入图片描述](https://img-blog.csdnimg.cn/3f36b358547f4a429217bb7aa6818288.png)

# 三十一、添加vue导航守卫
![在这里插入图片描述](https://img-blog.csdnimg.cn/3d77c6e21d0348bcb75ff32306f8b3ca.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/945b22a482ee4ce3b11163ef24b29a21.png)

