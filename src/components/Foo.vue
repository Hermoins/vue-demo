<template>
  <div>
  <p>{{postTitle}}</p>
  <p>{{post.title}}<button @click="clickHandle()">You Clicked me {{count}} times</button></p>
  <div  v-html = "post.content"></div>
  </div>
</template>


<script>
// component_deom 的子组件
export default {
  name: 'Foo',
  // props: ['post','postTitle'],

  inject: ['getMap'],   // 注入  
  props: {
    postTitle: String,
    post: Object,

  },
  data() {
    return {
      count: 0,
    }

  },

  methods: {
    clickHandle(){
      // window.console.log(this.$root.rootValue); // 通过$root获取跟组件实例来访问跟组件的数据
      window.console.log(this.$parent.postFontSize);  // 通过$parent获取父组件的实力来访问父组件的数据
      // this.$forceUpdate(); // 强制更新
      this.count++;
      this.getMap();
      this.$emit('enlarge-text', 0.5);
      this.post.title = '21312321';  // Object and Array  is reference object, change childComponent  affect parentComponent 
    }
  }
}
</script>