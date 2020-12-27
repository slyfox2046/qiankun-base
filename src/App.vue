<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/home">Home</el-menu-item>
      <!-- 应用其它子应用 -->
      <el-menu-item index="/vue">Vue应用</el-menu-item>
      <el-menu-item index="/react">React应用</el-menu-item>
      <el-menu-item index="/inspect">Angularjs应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue"></div>
    <div id="react"></div>
    <div id="inspect"></div>
  </div>
</template>

<script>


  export default {
    name: 'App',

  }
</script>

<style>

</style>