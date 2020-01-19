<template>
<div>
<h3>childComponent is button</h3>
 <baseinput v-on:click.native ="focusHandele()"></baseinput>
 </div>
</template>


<script>
import baseinput from "./input.vue"


export default {
  components: {baseinput},
    methods: {
    focusHandele(){
      window.console.log('Baseinput Clicked');
    }
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