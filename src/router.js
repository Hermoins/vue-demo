import Foo from "./components/Foo.vue";
import Bar from "./components/Bar.vue";
import User from "./components/User.vue";
import mycomponent from "./components/mycomponent.vue";
import HelloWorld from "./components/HelloWorld.vue";
import fooParent from "./components/fooParent.vue";
import input from "./components/input.vue";
import reactive from "./components/reactive.vue";
import baseInput from "./components/base_input.vue";
import child from "./components/slot/child.vue";
import parent from "./components/slot/parent.vue";
import transition from "./components/transition.vue";
import render from "./components/render.vue";
import markdown from "./demo/markdown.vue";
import cookBook from "./demo/cookBook.vue";
import aggrid from "./demo/aggrid.vue";
import svgchart from "./demo/svgchart/svgchart.vue";
import polygraph from "./demo/svgchart/polygraph.vue";
import grid from "./demo/grid.vue";
import vuex from "./vuex/vuexdemo.vue";
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router";
import keepAlive from "./components/keepAlive.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", name: "home", component: HelloWorld },
  { path: "/foo", name: "foo", component: Foo }, // redirect: "/", redirect: { name: "home" }
  {
    path: "/bar",
    component: Bar,
    name: "bar",
    children: [
      // { path: "", component: Bar },
      { path: "hello", name: "HelloWorld of bar", component: HelloWorld },
      { path: "foo", name: "Foo of bar", component: Foo }
    ]
  },
  { path: "/user/:id", name: "user", component: User },
  { path: "/myComponent", name: "myComponent", component: mycomponent },
  { path: "/fooParent", name: "fooParent", component: fooParent },
  { path: "/input", name: "input", component: input },
  { path: "/baseInput", name: "baseInput", component: baseInput },
  { path: "/child", name: "child", component: child },
  { path: "/parent", name: "parent", component: parent },
  { path: "/transition", name: "transition", component: transition },
  { path: "/render", name: "render", component: render },
  { path: "/markdown", name: "markdown", component: markdown },
  { path: "/svgchart", name: "svgchart", component: svgchart },
  { path: "/polygraph", name: "polygraph", component: polygraph },
  { path: "/grid", name: "grid", component: grid },
  { path: "/vueX", name: "vueX", component: vuex },
  { path: "/keepAlive", name: "keepAlive", component: keepAlive, beforeEnter: (to, from, next)=> {
  next();
  window.console.log(`路由独享守卫beforeEnter,Form ${from.name} To ${to.name}`);
  }},
  { path: "/cookBook", name: "cookBook", component: cookBook },
  { path: "/aggrid", name: "aggrid", component: aggrid },
  { path: "/reactive", name: "reactive", component: reactive },
];

const router = new VueRouter({ routes, mode: "history", base: __dirname });
// 全局守卫
// router.beforeEach((to, from, next) => {
//   next();
//   window.console.log(`全局前置守卫beforeEach,Form ${from.name} To ${to.name}`);
// });

// router.beforeResolve((to, from, next) => {
//   next();
//   window.console.log(`全局解析守卫beforeResolve,Form ${from.name} To ${to.name}`);
// });

// router.afterEach((to, from) => {
//   window.console.log(`全局后置守卫afterEach,Form ${from.name} To ${to.name}`);

// });
export default router;
