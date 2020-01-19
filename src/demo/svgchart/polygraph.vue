<template>
  <div>
  <h3>polygraph-template</h3>
  <svg width = "300" height="300">
  <g>
    <polygon v-bind:points="points" ></polygon>
    <circle cx="100"  cy="100" r="80"></circle>
    <axis-label v-for ="(stat, index) of stats"
    v-bind:stat="stat"
    v-bind:index ="index"
    v-bind:total ="stats.length"
    v-bind:key ="stat.id">
    </axis-label>
    </g>
  </svg>
  
</div>
</template>
<script>
import axisLabel from "./axislabel.vue"
export default {
  //   data(){
  //   return {
  //     stats: [
  //       {lable:"A", value: 50},
  //       {lable:"B", value: 100},
  //       {lable:"C", value: 100},
  //       {lable:"D", value: 100},
  //       {lable:"E", value: 100},
  //       {lable:"F", value: 100},
  //     ],
  //     newlabel: '',
  //   }
  // },
  props: ['stats'],
  template: "#polygraph-template",
  computed: {
    points:function() {
      const total = this.stats.length;
      return this.stats.map((stat,index) => {
        const point = this.valueToPoint(stat.value,index,total)
        return point.x + ','+point.y
      }).join(' ')
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
  components: {axisLabel},
}
</script>

<style>
polygon {
  fill: #42b983;
  opacity: .75;
}
circle {
  fill: transparent;
  stroke: #999;
}
</style>