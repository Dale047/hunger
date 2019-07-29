<template>
  <!--
  	  最外层必须要有一个大div套着
  	  不能有多个div同级
  	  不然会造成模板暴露元素
  -->
  <div class="container">
  	<div>这里是List测试组件</div>
  	<!--界面间跳转-->
  	<router-link to="/">跳转到根组件</router-link>
  </div>
</template>

<script>
//导出一个对象
export default {
  name: 'list',
}
</script>