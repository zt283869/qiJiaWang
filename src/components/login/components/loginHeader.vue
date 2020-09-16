<template>
  <header class="login-header">
    <div class="inner public-wrapper-width">
      <h2 class="logo-wrapper fl">
        <router-link :to="{path:'/'}" class="logo" title="首页"><img src="../../../../static/img/login/login-logo.png" alt="企加网"></router-link>
      </h2>
      <span class="title">{{headerTitle}}</span>
    </div>
  </header>
</template>

<script>
  export default{
    props:['headerTitle']
  }
</script>

<style scoped>
  .login-header .inner{
    height:114px;
    line-height:114px;
  }
  .login-header .logo img{
    height:52px;
  }
  .login-header .inner .title{
    font-size: 24px;
    color: #4A4A4A;
    margin-left:12.5px;
  }
  .login-header .logo-wrapper img{
    border-right: 1px solid #E3E3E3;
    padding-right:15px;
  }
</style>
