<template>
  <div class="home">
    <!--侧边栏导航、轮播-->
    <navBanner></navBanner>
    <!--服务切换-->
    <serviceSwitch></serviceSwitch>
    <!--服务区块-->
    <serviceBlocks></serviceBlocks>
    <business></business>
    <advertising></advertising>
    <taile></taile>
  </div>
</template>

<script type="text/ecmascript-6">

  import business from './components/business.vue'
  import advertising from './components/advertising.vue'
  import taile from './components/taile.vue'
  import navBanner from './components/navBanner.vue'
  import serviceSwitch from './components/serviceSwitch.vue'
  import serviceBlocks from './components/serviceBlocks.vue'

  export default {
    data(){
      return{
        name:''
      }
    },
    components:{
      business,
      advertising,
      taile,
      navBanner,
      serviceSwitch,
      serviceBlocks
    },
    mounted(){
//      判断是否需要从其它页面点击导航到首页滚动到某个锚点
      if(this.$route.params.scrollToDomId){
        var scrollToDom=document.getElementById(this.$route.params.scrollToDomId)
        window.scrollTo(0,scrollToDom.offsetTop)
      }
    }
  }
</script>
<style scoped>
  @import '../../../static/css/common/home-common.css'; /*首页公共样式*/
  .home{
    background: #fff;
    width: 100%;
    margin:0 auto;
  }
</style>
