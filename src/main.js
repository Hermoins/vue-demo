import Vue from "vue/dist/vue.esm";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import Vuex from "vuex";
// import VueResource from 'vue-resource'
import axios from "axios"
import VueAxios from "vue-axios"
// Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

// 全局引入echarts的方式  注意使用 Vue.use  和   Vue.prototype.$echarts = echarts;
// import echarts from './echart.js'
// Vue.use(echarts);
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;


// Vue.use(VueResource); // vue2.0之后不再推荐使用
Vue.use(VueAxios,axios)
Vue.prototype.$appName ="My App"  // 通过原型链定义全局变量 可以在每个vue实例中访问this.$appName
Vue.prototype.$reverseText = function(propertyName) {  // 传入数据的key 
  // 注意这里定义函数不能使用箭头函数，因为es6中的箭头函数隐式的绑定父级作用域为this
  this[propertyName] = this[propertyName].split('').reverse().join('');
  // window.console.log(this[propertyName])  
}
const store = new Vuex.Store({
  state: {
    count:0,
    obj: {
      firstName: 'shm'

    }
  },
  // strict: true, // 严格模式
  // mutations中必须是同步函数
  // 推荐 使用常量代替mutations事件类型
  mutations: {  
    increment(state,payload){ state.count+=payload.amount},
    // decrement: state => {
    //   state.count--
    // }
    decrement(state){
       setTimeout((x)=>{x.count--}, 1000,state)
    }
   
  }
})
new Vue({
  router: router,
  render: h => h(App),
  store:store,
  data() {
    return {
      rootValue: "I am Root Component"
    };
  }
}).$mount("#app");
