(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{622:function(t,v,e){"use strict";e.r(v);var _=e(6),s=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"一、什么是vue的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是vue的生命周期"}},[t._v("#")]),t._v(" 一、什么是Vue的生命周期？")]),t._v(" "),e("blockquote",[e("p",[t._v("vue每个组件都是独立的，每个组件都有一个属于它的生命周期，从一个组件"),e("strong",[t._v("创建、数据初始化、挂载、更新、销毁")]),t._v("，==这就是一个组件所谓的生命周期。")])]),t._v(" "),e("h1",{attrs:{id:"二、vue的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、vue的生命周期"}},[t._v("#")]),t._v(" 二、Vue的生命周期：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/12c638906e3a4dfb9839b6db1c11d562.webp?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAT2NlYW7vvIHvvIE=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),e("ol",[e("li",[t._v("首先做的的事情就是实例化vue对象，也就是创建一个vue实例，紧接着 初始化事件以及生命周期；")]),t._v(" "),e("li",[t._v("触发 "),e("strong",[t._v("beforCreate")]),t._v("，是创建实例之前执行的钩子事件，此事件执行完成后进行初始化注入；")]),t._v(" "),e("li",[t._v("触发"),e("strong",[t._v("created")]),t._v(",是创建实例之后执行的钩子事件 ；")]),t._v(" "),e("li",[t._v('然后Vue会判断，是否含有"el"选项，如果没有，则使用vm.$mount()挂载模板；如果有，就判断是否含有template，然后进行编译模板的工作，将data对象里面的数据和使用vue语法声明的模板编译成浏览器可读的html；')]),t._v(" "),e("li",[t._v("触发 "),e("strong",[t._v("beforMount")]),t._v(",是将编译好的HTML挂载到对应的虚拟dom上时执行的钩子事件，此时页面并没有内容；")]),t._v(" "),e("li",[t._v("然后将编译好的HTML替换掉el属性所指向的dom；")]),t._v(" "),e("li",[t._v("此时触发"),e("strong",[t._v("mounted")]),t._v("，是将编译好的HTML挂载完成后执行的钩子，这个钩子函数中一般进行一些ajax的请求获取数据进行数据的初始化，注意："),e("strong",[t._v("mounted在整个实例中只执行一次")])]),t._v(" "),e("li",[t._v("此时，实例已经将编译后的HTML挂载完成，开始"),e("strong",[t._v("实时监控数据的变化，并随之更新dom")])]),t._v(" "),e("li",[e("strong",[t._v("beforeUpdate")]),t._v("，是更新之前执行的钩子；"),e("strong",[t._v("updated")]),t._v("是更新完成后执行的钩子；")]),t._v(" "),e("li",[t._v("接下来，vue实例开始执行销毁工作,"),e("strong",[t._v("拆除数据监听，子组件和事件监听")]),t._v("；")]),t._v(" "),e("li",[t._v("此时触发"),e("strong",[t._v("beforeDestroy")]),t._v(",是实例销毁工作完成前执行的钩子；")]),t._v(" "),e("li",[t._v("等待实例销毁工作完成后，触发"),e("strong",[t._v("destroyed")]),t._v(",是销毁工作完成后执行的钩子;")])])])}),[],!1,null,null,null);v.default=s.exports}}]);