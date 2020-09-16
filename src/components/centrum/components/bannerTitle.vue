<template>
  <div class="banner-title">
   <div class="title-top-img">
     <img src="../../../../static/img/home/centrum/b2.png" alt="">
     <h1>企业服务，我们更专业</h1>
     <h6>加入企加网，坐拥海量客户</h6>
     <router-link :to="{name:'enterS'}"><span>立即入驻</span></router-link>
   </div>
    <div class="title-bottom-img">
      <div class="bottom-img-inner">
       <h5>快速接入企加网</h5>
        <div class="bottom-img-left">
          <h1>1</h1>
          <div class="text-box">
            <span>如何入驻？</span>
            <span>一张图看懂入驻流程，轻松又省事！</span>
            <span @click="scrollPosition()">立即了解</span>
          </div>
        </div>
        <div class="bottom-img-right">
          <h1>2</h1>
          <div class="text-box">
            <span>资质不够？</span>
            <span>想要成为企加网严选的优质服务商，必查！</span>
            <span @click="scrollPosition()">立即了解</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    scrollPosition() {
      this.$nextTick(function () {
        window.scrollTo(0, 1650)
      })
    }
  }
}
</script>
<style>
  @import '../../../../static/css/independent/centrum/bannerTitle.css';

</style>
