<template>
<div>
<div>{{msg}}</div>
<div>
<button @click = "clickHandle()">slot default</button>
</div>

<slot name ="first"><div>first slot</div></slot>
<slot name ="second"><div>second slot</div></slot>
<slot>slot！！！！！！！！！！！</slot>
</div>



</template>


<script>


export default {
  data () {
    return {
      msg:"this is child parent"
    }
  },

  methods: {
  clickHandle(){
    // $slots是Vue的一个实例属性， 当有内容插入插槽时返回插入插槽的内容
    window.console.log(this.$slots.default)  
    window.console.log(this.$slots.first)  
  }
  }

}
</script>

<style>

</style>