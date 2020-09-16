<template>
  <div class="wework-details">
    <navBanner></navBanner>
   <div class="wework-details-contents">
     <div class="wework-details-left">
       <contentNav></contentNav>
     </div>
     <div class="wework-details-right">
       <telphone></telphone>
     </div>
   </div>
  </div>
</template>
<script>
import navBanner from './components/navBanner.vue'
import contentNav from './components/contentNav.vue'
import telphone from './components/telphone.vue'
  export default {
      data(){
        return{

        }
      },
      components:{
        navBanner,
        contentNav,
        telphone
      }
  }
</script>
<style>
  .wework-details{
  width:100%;
  height:100%;

}
  .wework-details .wework-details-contents{
    width: 1190px;
    margin:0 auto;
    min-height:500px;
  }
  .wework-details .wework-details-contents .wework-details-left{
    float:left;
    width:780px;
    margin-right:98px;
  }
  .wework-details .wework-details-contents .wework-details-right{
    float:right;
  }
</style>
