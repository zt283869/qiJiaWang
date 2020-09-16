<template>
  <div class="attract">
    <div class="attract-top">
      <div class="attract-top-left">
        <img src="../../../../static/img/home/wework/weworkr.jpg" alt="">
      </div>
      <div class="attract-top-right">
        <span>招商信息</span>
        <span>Investment </span>
      </div>
    </div>
    <div class="attract-center hover-img-scale hover-title-highlight">
      <router-link :to="{name:'carrierDetailsS'}">
      <div class="attract-center-left overflow-h">
        <img src="../../../../static/img/home/wework/w5.jpg" alt="">
      </div>
      <div class="attract-center-right">
        <span class="title">高新区百度众创孵化器盛大开园</span>
        <span>该园区配备无人值守停车场，智能办公环境为主导，为培养创...</span>
      </div>
      </router-link>
    </div>
    <div class="attract-bottom">
      <ul>
        <router-link :to="{name:'carrierDetailsS'}"><li><span></span>某某园区开启二期招商正在火热进行中</li></router-link>
        <router-link :to="{name:'carrierDetailsS'}"><li><span></span>某某大学孵化器举办参观活动</li></router-link>
        <router-link :to="{name:'carrierDetailsS'}"><li><span></span>西安市**创业产业园区于今日盛大开园</li></router-link>
        <router-link :to="{name:'carrierDetailsS'}"><li><span></span>88888园区免费招商1年，第二年开始免租金三…</li></router-link>
        <router-link :to="{name:'carrierDetailsS'}"> <li><span></span>西安市**创业产业园区于今日盛大开园</li></router-link>
      </ul>
    </div>
  </div>

</template>
<script>

</script>
<style>
@import '../../../../static/css/independent/wework/attract.css';
</style>
