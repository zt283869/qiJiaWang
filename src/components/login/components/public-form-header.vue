<template>
  <header class="formHeader clearfix">
    <div class="form-name fl"><i class="iconfont" :class="icon"></i>{{formHeaderTitle}}</div>
    <div class="shortcut fr"> <span>已有账号，直接</span> <router-link :to="{name:'userLogin'}">登录</router-link></div>
  </header>
</template>

<script>
  export default{
    data(){
      return {

      }
    },
    props:['formHeaderTitle','icon']
  }
</script>

<style scoped>
  @import '../../../../static/css/independent/login/public-form-header.css';
  @import '../../../../static/iconfont/login/iconfont.css';
</style>
