<template>
  <div style="text-align: left; font-size: 12px;  line-height: 60px; display: flex">
    <!--        收缩按钮-->
    <div style="flex: 1;font-size: 24px">
      <span :class="collapseBtnClass" style="cursor: pointer; font-size: 18px" @click="collapse"></span>
    </div>

    <!--        用户信息-->
    <el-dropdown style="width: 100px; cursor: pointer">

      <span>王小虎</span>
      <i class="el-icon-setting" style="margin-right: 15px;margin-left: 10px"></i>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      // 收缩按钮动态图表
      collapseBtnClass:"el-icon-s-fold",
      // 菜单是否收缩
      isCollapse:false,
      // 菜单默认宽度
      sideWidth:200,
      //主页文字是否隐藏
      LogoText: true,
    }
  },
  methods:{
    collapse(){
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse){
        this.sideWidth= 64
        this.collapseBtnClass = "el-icon-s-unfold"
        this.LogoText = false
      }else {
        this.sideWidth = 200
        this.collapseBtnClass = "el-icon-s-fold"
        this.LogoText = true
      }
      this.$bus.$emit ('getIsCollapse',this.isCollapse)
      this.$bus.$emit ('getLogoText',this.LogoText)
      this.$bus.$emit ('getSideWidth',this.sideWidth)
    },
  },
  mounted() {
    this.$bus.$on('getIsCollapse',data =>{
      this.isCollapse = data
      console.log(data)
    })
    this.$bus.$on('getCollapseBtnClass',data =>{
      this.isCollapse = data
      console.log(data)
    })
  },

  // props:['collapseBtnClass','collapse']

}
</script>

<style scoped>

</style>