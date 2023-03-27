# vue3.2后台管理系统项目

练手项目源自 [Vue3.2后台管理系统](https://www.bilibili.com/video/BV1pq4y1c7oy)

项目使用`vite`创建，运行方式如下

## Project Setup

```
npm install
```

### Compile and Hot-Reload for Development

```
npm run dev
```

### Compile and Minify for Production

```
npm run build
```

## 项目简介

感觉这个项目比较有趣吧，学习到了国际化（中英切换），引导，页面全屏等功能

### 技术方面

项目使用的是`Javascript`开发， 组件库使用的是 `element-plus`，使用 `mockjs`模拟接口返回数据

主要使用到的技术点：

* vuex存取数据

* 路由守卫
* axios网络请求
* mockjs模拟数据
* i18n国际化
* driver实现帮助引导功能
* screenfull实现页面全屏
* dayjs时间格式转换

### 主要功能

由于与另一个项目的修改，分页等不少功能有重叠之处，根据兴趣选择了一些功能实现，实现的功能主要有

* 强制退出------这个功能的实现是通过对本地的token设置时效，在每次请求时，对token的时效检验

* 页面引导
* 国际化

* 页面全屏

* 登入登出和基础的搜索等操作

### 主要界面

项目教程中只以用户管理为例，实现了一个界面，所以就只有一个界面了...... 

<img src="https://www.hualigs.cn/image/64219797f36d8.jpg" style="zoom:50%;" />

页面引导示例：

<img src="https://www.hualigs.cn/image/64219f1badcf6.jpg"/>

## 主要收获

主要是对组件拆分的学习又深入了一些，项目中把头像，面包屑导航，折叠按钮都单独分成一个vue组件，并利用 `difineEmits`和 `defineProps`进行父子组件的传值，从父组件向标题，表格数据等

此外，还有对store中的 `mutations`与 `acions`有了了解，简单来说，`mutations`主要用于修改数据，是同步操作， 而`actions`用于响应组件中的动作，是异步的，用于向后台提交或接受后台的数据，例如，在这个项目中就是用于实现登入和登出功能

其他的国际化，全屏，引导等的实现过程也是比较重要的收获
