<template>
  <div id="app">
    <!--nav 模块可以注释访问-->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!--
        实际上展示的App.vue里面的内容来自于router-view
        如果删除 router-view 页面就没有内容了
        router-view指的是当前路由地址所指的对应内容
    -->
    <router-view/> 
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'App' 
  }  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
