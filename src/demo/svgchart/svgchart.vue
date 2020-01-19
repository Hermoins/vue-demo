<template>
  <div id="demo">
    <div>
    <poly-graph v-bind:stats="stats"></poly-graph>
    <div v-for="stat of stats" v-bind:key="stat.id">
    <label>{{stat.label}}</label>
    <input type ="range" v-model="stat.value" min= "0" max="100">
    <span>{{stat.value}}</span>
    <button v-on:click ="remove(stat)" class="remove">X</button>
    </div>
    <form id="add">
    <input name="newlabel" v-model="newlabel">
    <button v-on:click="add">Add a Stat</button>
    </form>
    </div>
    <pre id="raw">{{stats}}</pre>
  </div>
</template>


<script>
  import polyGraph from "./polygraph.vue"

export default {

  data(){
    return {
      stats: [
        {label:"A", value: 100},
        {label:"B", value: 100},
        {label:"C", value: 100},
        {label:"D", value: 100},
        {label:"E", value: 100},
        {label:"F", value: 100},
      ],
      newlabel: '',
    }
  },
  components: {polyGraph},
  methods: {
    add:function(e) {
      e.preventDefault();
      if(!this.newlabel) return
      this.stats.push({
        label:this.newlabel,
        value:100
      })
      this.newlabel = ""
    },
    remove: function(stat) {
      if(this.stats.length > 3){
        this.stats.splice(this.stats.indexOf(stat),1);
      } else {
        alert("can not delete more!");
      }
    }
  }
}
</script>

<style>
label {
  display: inline-block;
  margin-left: 10px;
  width: 20px
}
text {}

#demo {
  display:flex
}

#raw{
    margin-top: 250px;
    margin-left: 100px;
      font-family: Helvetica Neue, Arial, sans-serif;
}



</style>