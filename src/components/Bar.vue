<template>
  <div>
  BarSelf
  <router-view></router-view>
  </div>
</template>
<script>
export default {
//   关于Module的语法，一个Moudle就是一个文件

// import 命令是编译阶段执行的，在代码运行之前
// export default  => import xxx from ""  export default 只能使用一次  xxx可以为任意
// export xxx => import  {xxx} from ""

// CommonJs 和 es6的Module
// 1. CommonJs模块输出对象的拷贝  es6的Module输出对象的引用
// 2. CommonJs模块运行时加载， es6的Module编译时输出接口    // 因为CommonJs加载的是一个对象 reuqire("fs") 这个对象只有脚本运行完以后才会生成

// create-react-app myreact
  name: 'Bar',
}
</script>