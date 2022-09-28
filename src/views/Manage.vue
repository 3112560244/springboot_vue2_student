<template>
<div>
  <el-container>
    <el-aside :width="sideWidth +'px'" style="background-color: rgb(238, 241, 246)" >
      <Aside/>
    </el-aside>

    <el-container>
      <!--      头部-->
      <el-header style=" border-bottom: 1px solid antiquewhite">

        <Header/>
      </el-header>

      <!--      主要内容-->
      <el-main>
        <router-view/>
      </el-main>

    </el-container>

  </el-container>
</div>
</template>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";
export default {
  name: 'HomeView',
  data() {
    return {
      // 菜单默认宽度
      sideWidth:200,
    }
  },
  mounted() {
    this.$bus.$on('getSideWidth',data =>{
      this.sideWidth = data;
    })
  },


  methods:{

  },
  components: {
    Header,
    Aside

  }
}
</script>
