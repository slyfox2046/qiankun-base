<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/home">Home</el-menu-item>
      <!-- 应用其它子应用 -->
      <el-menu-item index="/vue">Vue应用</el-menu-item>
      <el-menu-item index="/react">React应用</el-menu-item>
      <el-menu-item index="/inspect">Angularjs应用</el-menu-item>
      <el-menu-item index="/trans-diag">诊断</el-menu-item>
      <el-menu-item index="/trans-alarm">告警</el-menu-item>
    </el-menu>




    <div>
      <el-row class="tac" style="display: flex;">
        <el-col>
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col class="mycontainer" >
          <div id="vue"></div>
          <div id="react"></div>
          <div id="inspect"></div>
          <div id="subapp-viewport"></div>
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>


  export default {
    name: 'App',

  }
</script>

<style>
  .tac .el-col {
    width: 200px;
    box-sizing: border-box;
  }
  .tac .mycontainer{
    width:100%;
  }

</style>