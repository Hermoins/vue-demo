<template>
<div>
<div>
<h3 ref="msg">{{msg1}}</h3>
<button v-on:click="test1">test1</button>
</div>
<div>
<ul>
<li v-for ="item of list" v-bind:key="item.id">{{item}}</li>
</ul>
<button v-on:click ="test2">change array</button>
</div>
</div>

</template>
<script>
export default {
  data(){
    return {
      msg1:'hello Vue',
      list: ['orange','apple','audio'],

    }
  },

  methods: {
    test1() {
      this.msg1 = 'hello world';
      window.console.log(this.$refs.msg.innerHTML)  // helloVue
      this.$nextTick(()=> {
        window.console.log(this.$refs.msg.innerHTML)  // helloworld
      })
    },
    test2() {
      this.list[2] = 'banana';    // 不是响应性的
      // this.$set(this.list, 2,'banana')  // 响应性的 官方推荐
      // this.list.push('tea');      // 响应性的
    }
  }
}
</script>