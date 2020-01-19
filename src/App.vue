<template>
<div>
<div style="text-align:center;border-bottom:1px solid #000">
  <h1>
    Vue.js
  </h1>
</div>
<div id = "body">
 <div id="menu">
    <p>Current route name: {{$route.name}}</p>
    <nav>
    <router-link to ="/">home</router-link>
    <br>
    <!-- 
        <router-link to ="/foo">Go to Foo</router-link>
        <br>
    -->
    <router-link to ="/bar">Go to Bar</router-link>
    <br>
    <router-link to ="/user">Go to User</router-link>
    <br>
     <router-link to ="/myComponent">Go to myComponent</router-link>
    <br>
    <router-link to ="/fooParent">Go to fooParent</router-link>
    <br>
    <router-link to ="/input">Go to Input</router-link>
    <br>
    <router-link to ="/baseInput">Go to baseInput</router-link>
    <br>
    <router-link to ="/child">Go to childComponent</router-link>
    <br>
    <router-link to ="/parent">Go to parentComponent</router-link>
    <br>
    <router-link to ="/transition">Go to transition</router-link>
    <br>
     <router-link to ="/render">Go to render</router-link>
    <br>
    <router-link to ="/markdown">markdown</router-link>
    <br>
    <router-link to ="/svgchart">svgchart</router-link>
    <br>
    <router-link to ="/grid">grid</router-link>
    <br>
    <router-link to ="/vueX">vueX</router-link>
    <br>
    <router-link to ="/keepAlive">keepAlive</router-link>
    <br>
    <router-link to ="/cookBook">cookBook</router-link>
    <br>
    <router-link to ="/aggrid">aggrid</router-link>
    <br>
    <router-link to ="/reactive">reactive</router-link>
    <br>
  </nav>
  </div>
 <div id="main">
  <router-view></router-view>
  </div>
</div>
</div>
</template>
<script>

export default {
}
</script>

<style>
#body {
  display:flex;
}
#menu {
  width: 20%;
  height: 800px;
  padding: 10px;
  float: left;
  border-right: 1px solid #000;
}
#main {
  width: 80%;
  padding: 10px;
  float: left;
}
</style>
