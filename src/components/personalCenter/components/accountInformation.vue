<template>
  <div class="personalInf accountInf">
      <publicTabHeader :tagName="tagName"></publicTabHeader>
      <div class="personalInfMain">
            <div class="userNuM userborder">
              <span>电话号码：</span> <span>187****8085</span>
              <span>绑定的手机号码可用于重置密码或其他安全性验证</span>
            </div>
            <div class="userPass overflow-h">
              <span class="fl">账号密码</span>
              <button class="fr button"><router-link :to="{name:'resetPasswardS'}">修改</router-link></button>
            </div>
      </div>
  </div>
</template>

<script>
  import publicTabHeader from './publicTabHeader.vue';
  export default {
    data() {
      return {
        tagName: "账号资料"
      }
    },
    props: {},
    components: {
      publicTabHeader
    }
  }
</script>

<style scoped>
  @import "../../../../static/css/independent/personalCenter/accountInformation.css";
.personalInf{
  height:230px;}
</style>
