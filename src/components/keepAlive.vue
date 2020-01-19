<template>
  <div id ="dynamic-component-demo">
    <button
        v-for="tab in tabs"
        v-bind:key ='tab'
        v-bind:class = "[{active:currentTab === tab},'tab-button']"
        v-on:click="clickHandler(tab)"
    >{{tab}}
    </button>
    <keep-alive>
    <component v-bind:is="currentTabComponent" class ="tab">
    </component>
    </keep-alive>
  </div>
</template>


<script>
// import Vue from "vue/dist/vue.esm";
// Vue.component('tab-posts', {})
import 'emoji-mart/css/emoji-mart.css'
import {emojiIndex} from 'emoji-mart';
// import emoji from 'emoji-list';
const tabPosts = {
  data() {
    return {
      posts: [
        {
          title:'news',
          content: '<p>newsnewsnewsnews</p>'
        },
        {
          title:'local',
          content: '<p>locallocallocal</p>'
        },
        {
          title:'games',
          content: '<p>gamesgamesgames</p>'
        },
      ],
      selectedPost: null
    }
  },
  template: `
  <div class="posts-tab">
    <ul class ="posts-sidebar">
    <li v-for="post in posts"
        v-bind:key ="post.id"
        v-on:click ="selectedPost = post"
    >{{post.title}}
    </li>
    </ul>
    <div class ="selected-post-container">
    <div v-if = "selectedPost" class="selected-post">
    <h3>{{selectedPost.title}}</h3>
    <div v-html="selectedPost.content"></div>
    </div>
    <strong v-else>Click on a blog title to the left to view it </strong>
    </div>
  </div>
  `,
}

const tabArchive = {
  // <div><label v-for ="item in emojis">{{item}}</label></div>
  template:`<div>
  <input v-model.lazy = "input"> <label>{{face}}</label>
  <br>
  <div class ="emoji"><label v-on:click="clickHandler(item)" v-for ="item in getEmoji">{{item}}</label></div>
  </div>`,
  data() {
    return {
      // emojis: emoji
      input: 'christmas',
      face: ''
    }
  },
  computed: {
    getEmoji() {
      return emojiIndex.search(this.input).map((o) => o.native)
    } 
  },
  methods: {
    clickHandler(emoji) {
      this.face = emoji
    }
  }
}
export default {
  // el: "#dynamic-component-demo",
  data(){
    return {
      currentTab: 'Posts',
      tabs: ['Posts','Archive']
    }
  },
  computed: {
    currentTabComponent() {
        return 'tab-'+ this.currentTab.toLowerCase()
    }
  },
  methods: {
    clickHandler(tab) {
      this.currentTab = tab;
    }
  },
    components: {tabPosts,tabArchive}
}
</script>

<style>
.tab-button.active{
  background:#e0e0e0;
}

.tab-button{
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background:#e0e0e0;
}

.tab{
  border: 1px solid #ccc;
  padding: 10px;
}

.posts-tab{
  display:flex
}

.posts-sidebar{
  max-width:40vw;
  margin:0;
  padding: 0 10px 0 0;
  list-style-type:none;
  border-right:1px solid #ccc;
}
.posts-sidebar li{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
  cursor:pointer;
}
.posts-sidebar li:hover{
    background:#eee;
}
.posts-sidebar li.selected{
    background:lightblue;
}
.selected-post-container{
  padding-left:10px
}

.selected-post > :first-child{
  margin-top:0;
  padding-top:0;
}

.emoji{
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>