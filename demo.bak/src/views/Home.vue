<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// @ 符号代指的是 src 目录
// 将 HelloWorld 子组件导到 Home 下
import HelloWorld from '@/components/HelloWorld.vue'

//导出一个对象
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
