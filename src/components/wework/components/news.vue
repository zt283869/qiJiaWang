<template>
  <div class="news">
    <div class="news-top hover-img-scale overflow-h">
      <router-link :to="{name:'trendsNewsS'}">
          <img src="../../../../static/img/home/wework/s1.jpg" alt="">
      </router-link>
      <span>西安市**创业产业园区于今日盛大开园</span>
    </div>
    <div class="news-center">
      <div class="news-center-left">
        <img src="../../../../static/img/home/wework/webook.jpg" alt="">
      </div>
      <div class="news-center-right">
        <span>动态新闻</span>
        <span>News </span>
      </div>
    </div>
    <div class="news-bottom">
      <div class="news-bottom-lists" v-for="(item,index) in newList">
        <div class="news-bottom-left">
          <span>{{item.month}}</span>
          <span>{{item.year}}</span>
        </div>
        <div class="news-bottom-right">
          <router-link :to="{name:'trendsNewsS'}">{{item.title}}</router-link>
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
    computed:{
      newList(){
        return this.$store.state.wework.newsList
      }
    }
  }
</script>
<style>
@import '../../../../static/css/independent/wework/news.css';
</style>
