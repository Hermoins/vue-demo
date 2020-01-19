<template>
<div id = 'vuex'>
<p>{{count}}</p>
<p>
<button v-on:click = "increment">+</button>
<button v-on:click = "decrement">-</button>
</p>
<button v-on:click = "clickHandler">root component</button>
<div>
<h3>demo</h3>
<button v-on:click = "InAsync(10)">async fun</button>
<div>
  {{time}}
</div>
</div>
</div>
</template>

<script>
// 对象展开运算符...
// 新对象替换旧对象
// state.obj = {...state.obj, newProp: 'newValue'}



// import Vue from "vue/dist/vue.esm";
// import Vuex from "vuex";
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     count:0
//   },
//   mutations: {
//     increment: state => state.count++,
//     decrement: state => state.count--
//   }
// })
export default {
  data() {
   return {
      time: '',
      msg: 'hello shm',
   }
  },
computed: {
  count() {
    return this.$store.state.count
  }
},
methods: {
  increment() {
  this.$store.commit('increment', {amount: 10})
  },
  decrement() {
  this.$store.commit('decrement')
  },
  clickHandler() {
    window.console.log(this.$root.rootValue)
  },

  // js sleep实现
  sleep(interval) {
    return new Promise(resolve => {
      setTimeout(resolve,interval)
    })
  },
  async InAsync(num) {
    for(let i=1;i<=num;i++){
      this.time = i;
      await this.sleep(1000);
    }
  },
},
 created: function() {
      window.console.log(this.$appName)
      window.console.log(this.msg)
      this.$reverseText('msg')
      window.console.log(this.msg)
  }
}

</script>