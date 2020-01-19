<template>
  <div>
  <label id= "user"><br>User:{{$route.params.id}}<br></label>
  <br>
  <input v-model.lazy = "input">
  <button v-on:click="changeRoute">update</button>
  <br>
  <button v-on:click="back">back</button>
  </div>
</template>


<script>
// import Vue from "vue";

// const User = new Vue({
// })

export default {
  data() {
    return {
      input: '',
    }
  },

  methods: {
    changeRoute() {
      // 路由跳转 触发beforeRouteUpdate
      this.$router.push({name:'user',params: {id:this.input}})  // router VS route
      window.console.log(this.$route);
    },
    back() {
      this.$router.go(-1)
    }
  },
    beforeRouteEnter(to,from,next){
    window.console.log(`组件内的守卫beforeRouteEnter,Form ${from.name} To ${to.name}`);
    //这个勾子中不能获取组件实例this
    next();
  },
  beforeRouteUpdate(to,from,next) {
    window.console.log(`组件内部的守卫beforeRouteUpdate,Form ${from.name} To ${to.name}`);
    next();
  }
}
</script>

<style>
#user{
  font-size: 20px;
  font-weight: bold;
  color: blue
}
</style>