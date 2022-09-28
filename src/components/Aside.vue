<template>
  <!--      导航栏-->
  <el-menu :default-openeds="['1', '3']" style="min-height: 100vh"
           background-color="rgb(48,65,86)"
           text-color="#fff"
           active-text-color="#ffd04b"
           :collapse-transition="false"
           :collapse="isCollapse"
  >
    <!--        菜单背景色-->
    <!--        background-color="rgb(48,65,86)"-->
    <!--        菜单文字背景色-->
    <!--        text-color="#fff"-->
    <!--        菜单选中颜色-->
    <!--        active-text-color="#ffd04b"-->

    <!--        首页图标-->
    <div style="height: 59px;  line-height: 59px;text-align: center">
      <img src="../assets/logo.png" style="width: 30px; height: 25px;position: relative;top: 5px">
      <b style="color: white" v-show="LogoText">后台管理系统</b>
    </div>

    <!--        菜单-->
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>
        <span slot="title">导航一</span>
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
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">选项4</template>
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data(){
    return{
      isCollapse:false,
      LogoText : true,

    }
  },
  mounted() {
    this.$bus.$on('getIsCollapse',data =>{
      this.isCollapse = data
      console.log(data)
    })
    this.$bus.$on('getLogoText',data =>{
      this.LogoText = data;
      console.log(data)
    })
  },
}
</script>

<style scoped>

</style>