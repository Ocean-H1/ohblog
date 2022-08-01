(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{624:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("前言")]),t("p",[s._v("自己在部署Vue项目到服务器上后，遇到刷新页面出现404的问题(history模式)，而路由如果使用hash模式，则不会出现问题，这篇文章主要整理一下出现问题的原因以及解决办法")])]),t("h2",{attrs:{id:"为什么history模式下有问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么history模式下有问题"}},[s._v("#")]),s._v(" 为什么history模式下有问题🎉")]),s._v(" "),t("p",[s._v("Vue是属于"),t("strong",[s._v("单页面应用")]),s._v("，也就是SPA")]),s._v(" "),t("blockquote",[t("p",[s._v("SPA是一种网络应用程序，所有与用户交互都是动态重写当前页面来实现页面变化的，这也就是为什么不管我们应用有多少页面，打包之后都只会产出一个"),t("code",[s._v("index.html")])])]),s._v(" "),t("p",[s._v("现在，先来看一下nginx的配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n  listen  80;\n  server_name  www.xxx.com;\n\n  location / {\n    index  /data/dist/index.html;\n  }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("可以根据 nginx 配置得出，当我们在地址栏输入 www.xxx.com 时，\n这时会打开我们 dist 目录下的 index.html 文件，然后我们在跳转路由进入到 www.xxx.com/login，")]),s._v(" "),t("p",[s._v("关键在这里，当我们在 www.xxx.com/login 页执行刷新操作，nginx location 是没有相关/login配置的，所以就会出现 404 的情况")]),s._v(" "),t("h2",{attrs:{id:"为什么hash模式下没有问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么hash模式下没有问题"}},[s._v("#")]),s._v(" 为什么hash模式下没有问题 🎉")]),s._v(" "),t("p",[s._v("router hash 模式我们都知道是用符号#表示的")]),s._v(" "),t("blockquote",[t("p",[s._v("特点：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("hash 虽然出现在URL中，但不会被包括在HTTP 请求中")]),s._v("，对服务端完全没有影响")]),s._v(" "),t("li",[s._v("所以改变hash不会重新向服务端发送请求，而改变hash，在hash模式中会被hashChange方法捕获，在Vue中会触发页面的修改")]),s._v(" "),t("li",[s._v("hash模式下，只有hash符号之前的内容会被包含在请求中，所以即使没有配置location，也不会返回404错误")])])]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案🎉")]),s._v(" "),t("h3",{attrs:{id:"_1-路由使用hash模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-路由使用hash模式"}},[s._v("#")]),s._v(" 1. 路由使用hash模式")]),s._v(" "),t("blockquote",[t("p",[s._v("很显然，这样问题会直接解决，但是看着地址栏中的#号，还是不太舒服")])]),s._v(" "),t("h3",{attrs:{id:"_2-修改nginx配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改nginx配置文件"}},[s._v("#")]),s._v(" 2. 修改nginx配置文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    listen       80 default_server;\n    listen       [::]:80 default_server;\n    server_name 175.24.527.47;// 服务器ip地址\n    index index.php index.html index.htm default.php default.htm default.html;\n    root /www/wwwroot/dist.com; // vue文件得目录\n    \n    location / {\n      #访问前端页面\n    \troot /www/wwwroot/dist.com;#vue项目存放路径\n    \tindex  index.html; #hash模式只配置访问html就可以了\n    \ttry_files $uri $uri/ /index.html;#history模式配置否则会出现vue的路由在nginx中刷新出现404\n    }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"_3-以宝塔面板举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-以宝塔面板举例"}},[s._v("#")]),s._v(" 3.以宝塔面板举例")]),s._v(" "),t("h4",{attrs:{id:"_3-1-打开软件商店找到nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-打开软件商店找到nginx"}},[s._v("#")]),s._v(" 3.1 打开软件商店找到nginx")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/nginx1.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_3-2-打开设置-查看nginx配置文件存放目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-打开设置-查看nginx配置文件存放目录"}},[s._v("#")]),s._v(" 3.2 打开设置，查看nginx配置文件存放目录")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/nginx2.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_3-3-进入配置文件目录-打开要修改vue项目的配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-进入配置文件目录-打开要修改vue项目的配置文件"}},[s._v("#")]),s._v(" 3.3 进入配置文件目录，打开要修改Vue项目的配置文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/nginx3.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_3-4-修改配置文件-添加配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-修改配置文件-添加配置"}},[s._v("#")]),s._v(" 3.4 修改配置文件，添加配置")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/nginx4.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"_3-5-完成之后-记得重载配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-完成之后-记得重载配置"}},[s._v("#")]),s._v(" 3.5 完成之后，记得重载配置")]),s._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/nginx5.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);