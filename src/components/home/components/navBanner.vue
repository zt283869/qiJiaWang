<template>
  <div class="wrapper public-wrapper-width clearfix overflow-h">
    <!--侧边栏导航-->
    <asideNav></asideNav>
    <!--轮播-->
    <banner></banner>
    <!--轮播右侧广告-->
    <celebration></celebration>


  </div>
</template>

<script>
  import asideNav from './asideNav.vue'
  import banner from './banner.vue'
  import celebration from './celebration.vue'
  export default{
    data(){
      return {

      }
    },
    components:{
      asideNav,
      banner,
      celebration
    }
  }
</script>

<style scoped>
</style>
