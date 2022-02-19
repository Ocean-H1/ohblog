/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "F:\\VueProgram\\Ohblog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-63a96fe4",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-63a96fe4").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-34324faf",
    path: "/blog/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%80%BB%E7%BB%93%EF%BC%9A%E7%94%B5%E5%95%86%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-34324faf").then(next)
    },
  },
  {
    path: "/blog/前端项目开发总结：电商后台管理系统.html",
    redirect: "/blog/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%80%BB%E7%BB%93%EF%BC%9A%E7%94%B5%E5%95%86%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html"
  },
  {
    path: "/blog/前端项目开发总结：电商后台管理系统.html",
    redirect: "/blog/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%80%BB%E7%BB%93%EF%BC%9A%E7%94%B5%E5%95%86%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html"
  },
  {
    name: "v-503ccbb9",
    path: "/blog/%E5%85%B3%E4%BA%8EJs%E4%B8%AD%E5%88%9B%E5%BB%BA%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E5%9D%91.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-503ccbb9").then(next)
    },
  },
  {
    path: "/blog/关于Js中创建二维数组的坑.html",
    redirect: "/blog/%E5%85%B3%E4%BA%8EJs%E4%B8%AD%E5%88%9B%E5%BB%BA%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E5%9D%91.html"
  },
  {
    path: "/blog/关于Js中创建二维数组的坑.html",
    redirect: "/blog/%E5%85%B3%E4%BA%8EJs%E4%B8%AD%E5%88%9B%E5%BB%BA%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E5%9D%91.html"
  },
  {
    name: "v-3036352a",
    path: "/blog/%E6%A0%91%E2%80%94%E2%80%94%E5%93%88%E5%A4%AB%E6%9B%BC%E7%BC%96%E8%AF%91%E7%A0%81.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3036352a").then(next)
    },
  },
  {
    path: "/blog/树——哈夫曼编译码.html",
    redirect: "/blog/%E6%A0%91%E2%80%94%E2%80%94%E5%93%88%E5%A4%AB%E6%9B%BC%E7%BC%96%E8%AF%91%E7%A0%81.html"
  },
  {
    path: "/blog/树——哈夫曼编译码.html",
    redirect: "/blog/%E6%A0%91%E2%80%94%E2%80%94%E5%93%88%E5%A4%AB%E6%9B%BC%E7%BC%96%E8%AF%91%E7%A0%81.html"
  },
  {
    name: "v-e19f586c",
    path: "/blog/%E5%AF%B9JavaScript%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6%E7%9A%84%E7%90%86%E8%A7%A3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e19f586c").then(next)
    },
  },
  {
    path: "/blog/对JavaScript事件循环机制的理解.html",
    redirect: "/blog/%E5%AF%B9JavaScript%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6%E7%9A%84%E7%90%86%E8%A7%A3.html"
  },
  {
    path: "/blog/对JavaScript事件循环机制的理解.html",
    redirect: "/blog/%E5%AF%B9JavaScript%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E6%9C%BA%E5%88%B6%E7%9A%84%E7%90%86%E8%A7%A3.html"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-322a45da",
    path: "/tag/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-322a45da").then(next)
    },
    meta: {"pid":"tags","id":"vue"}
  },
  {
    path: "/tag/vue/index.html",
    redirect: "/tag/vue/"
  },
  {
    name: "v-71df9e40",
    path: "/tag/element-ui/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-71df9e40").then(next)
    },
    meta: {"pid":"tags","id":"element-ui"}
  },
  {
    path: "/tag/element-ui/index.html",
    redirect: "/tag/element-ui/"
  },
  {
    name: "v-14055bfa",
    path: "/tag/node/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-14055bfa").then(next)
    },
    meta: {"pid":"tags","id":"node"}
  },
  {
    path: "/tag/node/index.html",
    redirect: "/tag/node/"
  },
  {
    name: "v-07a3e910",
    path: "/tag/javascript/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-07a3e910").then(next)
    },
    meta: {"pid":"tags","id":"javascript"}
  },
  {
    path: "/tag/javascript/index.html",
    redirect: "/tag/javascript/"
  },
  {
    name: "v-92b3076c",
    path: "/tag/数据结构/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-92b3076c").then(next)
    },
    meta: {"pid":"tags","id":"数据结构"}
  },
  {
    path: "/tag/数据结构/index.html",
    redirect: "/tag/数据结构/"
  },
  {
    name: "v-55d899ac",
    path: "/categories/项目总结/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-55d899ac").then(next)
    },
    meta: {"pid":"categories","id":"项目总结"}
  },
  {
    path: "/categories/项目总结/index.html",
    redirect: "/categories/项目总结/"
  },
  {
    name: "v-14bbbf36",
    path: "/categories/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-14bbbf36").then(next)
    },
    meta: {"pid":"categories","id":"前端"}
  },
  {
    path: "/categories/前端/index.html",
    redirect: "/categories/前端/"
  },
  {
    name: "v-171cfbad",
    path: "/categories/数据结构与算法/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-171cfbad").then(next)
    },
    meta: {"pid":"categories","id":"数据结构与算法"}
  },
  {
    path: "/categories/数据结构与算法/index.html",
    redirect: "/categories/数据结构与算法/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]