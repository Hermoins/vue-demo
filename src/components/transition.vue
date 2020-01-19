<template>
<div>
<h3>{{msg}}</h3>
<div>
<button v-on:click ="toggle()">toggle</button>
<transition >
<p v-if="show">Hello</p>
</transition>

<div id="example-4">
<input type ="radio" id="A" value="first" v-model= "view">
<label for="A">A</label>
<input type ="radio" id="B" value="second" v-model= "view">
<label for="B">B</label>
</div>
<transition mode="out-in">  
<!--  
过渡模式(防止出现一个离开过渡的时候另一个开始进入过度)
out-in(常用)：当前元素先进行离开过度，新元素再进入过渡  
in-out： 新元素先进入过度，当前元素再离开过度
-->
<!--
/** dynamic conponent */
// <keep-alive>
// <component v-bind:is ="currentTabComponent"></compomemt>
// </keep-alive> -->

<component v-bind:is = "view"></component>
</transition>
</div>
</div>
</template>


<script>

import a  from "./HelloWorld.vue"
import b from "./input.vue" 
import Vue from "vue";
var myMixin ={
  created: function (){
    this.hello();
  },
  methods: {
    hello: function() {
      // window.console.log('混入对象的created勾子被调用');
    }
  }
}
var mycomponent = Vue.extend({
  mixins:[myMixin]
})

var mixinObj = new mycomponent();
export default {
  created: function(){
          window.console.log('组件自身的勾子被调用');
  },
  data () {
    return {
      msg:"this is transition demo",
      show:true,
      view: 'first'
      // 响应式(reactive)原理

      // 如何追踪变化？
      // Object.defineProperty => getter/setter
      // 组件实例对应一个watch实例，组件渲染过程中使用到接触到的数据
      // 作为"依赖"，之后当"依赖项"的setter触发时通知watch，使相关的组件重新渲染

      // ---------------------------------------------------------------------
      // ---------------------------------------------------------------------
      // vue无法检测到对象属性的添加或删除
      // 对于已经创建的实例，不允许动态添加跟级别的响应式属性
      // 所以属性必须在data对象上存在才能让vue转化为响应式的
      // 使用Vue.set(object,propertyName,value)向嵌套对象添加属性

    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
  components: {
    first:a ,second:b,mixinObj
  }

}
// 
</script>

<style>
.v-enter-active, .v-leave-active{ 
  transition: opacity 2.5s;
}
.v-enter,.v-leave-to{
  opacity:0;
}
</style>