<template>
<div ref="myconmponent" @keyup.tab="TabHandler()">
  <label>{{msg}}</label>
  <ul id ="example-1">
  <li v-for = "(item,index) of items" v-bind:key = "item.id">
  {{parentMessage}}-{{index}}--{{item.message}}
  </li>
  </ul>



  <ul id ="example-2">
  <li v-for = "(value,name,index) of obj" v-bind:key = "value.id">
  {{index}}-{{name}}:{{value}}
  </li>
  </ul>
 <button v-on:click = "changeArray()">  change Array</button>
 <br>
<button v-on:click = "changeObj()">  change Obj</button>

<p>first name <input v-focus:param= "'testparam'" placeholder = "please input" v-model = "firstName">{{firstName}}</p>
<p>last name <input v-focus:[param]= "testparam" v-model.lazy = "lastName"  v-on:focus ="onFocus()">{{lastName}}</p>
<p>{{fullName}}</p>

<span>Multiline message is:</span>
<p style = "white-space: pre-line;">{{multiMessage}}</p>
<textarea style = "width: 250px;height: 100px" v-model = "multiMessage" placeholder ="add multiple lines"></textarea>
<br>
<h3>CheckBoxs</h3>
<input type ="checkbox" id="checkbox" v-model= "checked">
<label for="checkbox">{{checked}}</label>
<div id="example-3">
<input type ="checkbox" id="jack" value="jack" v-model= "checkedNames">
<label for="jack">jack</label>
<br>
<input type ="checkbox" id="john" value="john" v-model= "checkedNames">
<label for="john">john</label>
<br>
<input type ="checkbox" id="mike" value="mike" v-model= "checkedNames">
<label for="mike">mike</label>
<br>
<span>checkedNames:{{checkedNames}}</span>
</div>
<h3>RadioButton</h3>
<div id="example-4">
<input type ="radio" id="one" value="One" v-model= "picked">
<label for="one">one</label>
<br>
<input type ="radio" id="two" value="Two" v-model= "picked">
<label for="two">two</label>

<br>
<span>picked:{{picked}}</span>
</div>

<input  placeholder = "please input" v-model = "objFromVuex.firstName">{{objFromVuex.firstName}}
</div>
</template>

<script>

export default {
  directives: {  // 自定义指令
    focus: {
      inserted: function(el,binding){ // 勾子函数传入的参数
        el.focus();
        window.console.log(binding.arg,binding.value);
      }
    }
  },
  data() {
    return {
      param: 'param111',
      testparam: 'testparam1111',
      msg: 'My Component',
      picked:'',
      checkedNames: [],
      checked:true,
      multiMessage: '',
      name:'',
      firstName: '',
      lastName:'',
      parentMessage: "parentOutMessage",
      items: [
      { message:"Foo"},
      { message:"Bar"}
    ],
    obj: {
      title: "vue",
      author: "hermion",
      pubilishedAt: '2019-11-04'
    },
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + this.lastName;
    },
    objFromVuex() {
      return this.$store.state.obj
    }

  },
  methods: {
    changeArray() {
      this.items[1].message = "changed array";
      this.items.push({message: 'ssshhhmm'});
    },
    changeObj() {
      this.obj.title = "changed myVue";
      this.obj['age'] = 22;
    },
    onFocus() {
    // window.console.log("foused");
    },
    TabHandler() {
     window.console.log(document.activeElement.id) 
    }
  }
}
</script>

<style>
</style>