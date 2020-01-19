<template>
<div ide ="demo">
<form id="search">
Search <input name="query" v-model="searchQuery">
</form>
<demo-grid v-bind:heroes="gridData"
v-bind:columns="gridColumns"
v-bind:filter-key="searchQuery"></demo-grid>
</div>
</template>
<script>
// import Vue from "vue/dist/vue.esm.js";
const demoGrid = {
props: {
  heroes: Array,
  columns: Array,
  filterKey: String
},
template: `
<table>
<thead>
<tr>
<th v-for ="key in columns" v-on:click="sortBy(key)" v-bind:class ="{active: sortKey==key}">
{{key | caplitalize}}
<span class="arrow" v-bind:class ="sortOrders[key] > 0 ? 'asc':'dsc'"></span>
</th>
</tr>
</thead>
<tbody>
<tr v-for ="entry in filteredHeroes">
<td v-for="key in columns">
{{entry[key]}}
</td>
</tr>
</tbody>
</table>
`,
data: function() {
  const sortOrders = {}
  this.columns.forEach(function(key){
    sortOrders[key] = 1
  })
  return {
    sortKey: '',
    sortOrders: sortOrders
  }
},
computed: {
  filteredHeroes:function(){
    const sortKey = this.sortKey;
    const filterKey = this.filterKey && this.filterKey.toLowerCase();
    const order = this.sortOrders[sortKey] || 1
    let heroes = this.heroes
    if (filterKey) {
      heroes = heroes.filter(function(raw){
        return Object.keys(raw).some(function(key){
          return String(raw[key]).toLowerCase().indexOf(filterKey) > -1
        })
      })
    }
    if(sortKey) {
      heroes = heroes.slice().sort(function(a,b){
        return (a['power']===b['power'] ? 0 : a['power']>b['power'] ? 1 :-1)*order
      })
    }
    return heroes
  }
},
filters: {
  caplitalize: function(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  },
},
methods: {
    sortBy:function(key){
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key]*-1
    }
  }

}


export default {
  name: 'aaa',
  data: function() {
    return{
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        {name:"Chuck Norris", power: Infinity},
         {name:"Bruce Lee", power: 9000},
          {name:"Jackie Chan", power: 7000},
           {name:"Jet Li", power: 8000},
      ]
    }
  },
  components: {demoGrid},
  beforeRouteEnter(to,from,next){
    window.console.log(`组件内的守卫beforeRouteEnter,Form ${from.name} To ${to.name}`);
    // this.searchQuery = 'name'; 不能获取组件实例this
    next();
  },
    beforeRouteLeave(to,from,next){
    window.console.log(`组件内的守卫beforeRouteLeave,Form ${from.name} To ${to.name}`);
    this.searchQuery = 'name'; // 可以获取组件实例this
    next();
  }
}
</script>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor:pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,td{
   min-width: 120px;
   padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow{
    opacity: 1;
  }

  .arrow{
    display: inline-block;
    vertical-align: middle;
    width:0;
    height:0;
    margin-left: 5px;
    opacity:0.66;
  }
  .arrow.asc {
    border-left: 4px solid transparent;
        border-right: 4px solid transparent;
            border-bottom: 4px solid #fff;
            
  }
    .arrow.dsc {
    border-left: 4px solid transparent;
        border-right: 4px solid transparent;
            border-top: 4px solid #fff;
       
  }
  
</style>