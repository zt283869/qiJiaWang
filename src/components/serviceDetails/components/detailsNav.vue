<template>
  <div class="service-detail">
    <div class="service-details-nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><router-link :to="{name:'facilitatorS'}">全部服务</router-link></el-breadcrumb-item>
        <el-breadcrumb-item>企业服务详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">


</script>
<style scoped>
  @import '../../../../static/css/independent/serviceDetails/serviceDetails.css';
</style>


