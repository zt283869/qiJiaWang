<template>
    <div class="wework clearfix">
      <wework_nav></wework_nav>
      <div class="wework-content clearfix">
        <div class="wework-left">
          <wework_title></wework_title>
          <wework_list></wework_list>
        </div>
        <div class="wework-right clearfix">
          <wework_attact></wework_attact>
          <wework_news></wework_news>
        </div>
      </div>
    </div>
</template>
<script>
  import wework_nav from './components/weworknav.vue'
  import wework_title from './components/weworkTitle.vue'
  import wework_list from './components/weworkList.vue'
  import wework_attact from './components/attract.vue'
  import wework_news from './components/news.vue'

  export default {
    data(){
      return{

      }
    },
    components:{
      wework_nav,
      wework_title,
      wework_list,
      wework_attact,
      wework_news,
    }
  }
</script>
<style>
  .wework {
    min-height: 800px;
    width: 1190px;
    margin: 0 auto;
  }
  .wework .wework-content{
    width: 1190px;
  }
  .wework .wework-left{
    float:left;
    width: 861px;

  }
  .wework .wework-right{
    float:right;
    width: 295px;
  }
</style>
