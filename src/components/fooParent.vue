<template>
<div>
<h2>fooParent_demo</h2>
<div v-bind:style ="{fontSize:postFontSize + 'em'}">
<button-counter  ref= "childComponent"  post-title= "hello" v-for ="post of posts" v-bind:post ="post" v-bind:key ="post.id" v-on:enlarge-text ="enlargehandle($event)"></button-counter>
</div>
</div>
</template>
<script>
import buttonCounter from "./Foo.vue";
export default {
  provide: function() {  
    // 依赖注入 可以提供给所有后代组件的数据/方法  使用$parent属性无法很好的扩展到更深层次的嵌套组件上
    // 依赖注入  类似于一个 "大范围有效的props"， 除了以下两点：
    // 1. 祖先组件不需要知道那些后代组件使用了它提供的属性
    // 2. 后代组件不需要知道被注入的属性来自哪里
    return {
      getMap: function() {
        window.console.log('getMap');
      }
    }
  },
  name: 'fooParent',
  data () {
   return {
      posts:[
        {title:"child1",content: "ああああいいいうううえええ"},
         {title:"child2",content: "かかかかっかきききくうくくく"},
          {title:"child3",content: "だだだだだじじじじずずずででっで"},
      ],
      postFontSize: 1,
   } 
  },
  components: {buttonCounter},
  methods: {
    enlargehandle(event) {
        this.postFontSize +=event;
    }
  }
}
</script>