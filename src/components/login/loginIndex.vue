<template>
  <div class="login-register-public-wrapper">
    <div class="header">
      <publicHead></publicHead>
    </div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import  publicHead from '../header/components/headerTop.vue'
  import  foot from '../footer/footer.vue'
  export default{
    components:{
      publicHead,
      foot
    }
  }
</script>

<style>
  .login-register-public-wrapper .el-form .iconfont:after,
  .login-register-public-wrapper .el-form .iconfont{
    width: 20px;
    height:20px;
    color: #272536;
    z-index:1;
    opacity: 0.28;
  }
</style>
