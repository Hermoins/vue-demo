<template>
<div>
<div>{{msg}}</div>
<br>
<child>this content is insert to  child component, child content is covered
<template v-slot:first> <!-- vue2.6.0引入v-solt  vue文档:独占默认插槽的缩写语法  -->
<div>v-slot:this is first slot</div>
</template>
<template slot = "second">
<div>slot"" this is second slot</div>
</template>
<p>
default slot
</p>
</child>
</div>
</template>


<script>
/** 插槽*/
// slot 父组件引用子组件时 对子组件的内容进行修改或者补充  在子组件中插入slot标签占位 会覆盖slot标签中的内容
// Vue实现的内容分发的API <slot>元素作为承载分发内容的出口。插槽就是子组件提供的可以替换的模板，父组件可以根据需求改变模板  类似Angular的 <ng-content>
// 具名插槽 插入到指定插槽名的位置
// 默认插槽 插入到没有指定插槽名的位置


import child from "./child.vue"
export default {
  components:{child},
  data: function () {
    return {
      msg: "this is parent component"
    }
  },
  
}
</script>

<style>

</style>