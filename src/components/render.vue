<!---

<template>
<div>
  <h3>render function and JSX</h3>
 
  <el-button  @click = "clickHandler()" type="primary" icon="el-icon-search">搜索</el-button>
</div>
</template>

-->
<template>
<div>
  <h3>render function and JSX</h3>
 
  <el-button  @click = "clickHandler()" type="primary" icon="el-icon-search">搜索</el-button>
</div>
</template>
 <script>
// import Vue from "vue";
// import Component  from "vue-class-component"
// @Component({
//   template: `
//   <div>
//   <h3>render function and JSX</h3>
 
//   <el-button  @click = "clickHandler()" type="primary" icon="el-icon-search">搜索</el-button>
// </div>
//   `
// })



export default  {   // 使用基于类的API声明组件 支持TypeScript
    clickHandler () {
      window.console.log('click');
    }
}
</script>

<style>

</style>