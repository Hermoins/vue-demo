<template>
<text v-bind:x="point.x" v-bind:y="point.y">{{stat.label}}</text>
</template>
<script>
export default {
  props: {
    stat: Object,
    index: Number,
    total:Number
  },
  // template: "#axis-label-template",
  computed: {
    point: function(){
      return this.valueToPoint(
        +this.stat.value+10,
        this.index,
        this.total
      )
    }
  },
    methods: {
   valueToPoint:function(value,index,total) {
     const x=0;
     const y=-value*0.8;
     const angel=Math.PI *2/total*index;
     const cos = Math.cos(angel)
     const sin = Math.sin(angel)
     const tx = x*cos-y*sin+100
     const ty = x*sin + y*cos +100
     return {
       x:tx,
       y:ty
     }
  }
  },
}
</script>
<style>
text {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 15px;
  fill: #666;
}
</style>