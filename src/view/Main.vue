<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from '../components/commonAside.vue'
import commonHeader from '@/components/commonHeader'
export default {
  components: { commonAside, commonHeader },
  name: 'Main',
  data() { 
    return {
      
    }
  },
}
</script>

<style scoped>
  .el-header{
    background-color: #333;
  }
  .el-main{
    padding-top: 0;
  }
</style>