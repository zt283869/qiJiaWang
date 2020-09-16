<!--首页服务标签切换组件-->
<template>
  <div class="home-service-switch-wrapper public-wrapper-width">
    <div class="text-align-c">
      <h2 class="home-public-title">{{slogan}}</h2>
      <h6 class="home-public-subTitle">
        <span class="subTitle">{{subSlogan}}</span>
      </h6>
      <nav>
        <a v-for="(item,index) in serviceSwitch.switchList" :class="{'active':index==activeIndex}" @mouseenter="switchService(index)" href="javascript:void(0);" class="home-service-switcher">{{item.name}}</a>
      </nav>
    </div>
    <div class="home-service-switch-body clearfix">
      <dt v-if="index===0" v-for="(item,index) in subList" class="large">
        <router-link :to="{name:'serviceDetailS'}" class="hover-border-highlight hover-title-highlight hover-img-scale">
          <h2 class="service-name title">{{item.title}}</h2>
          <h6 class="service-description">{{item.subTitle}}</h6>
          <img :src="item.icon" :alt="item.title">
        </router-link>
      </dt>
      <dd v-else :class="item.style" :style="{width:800/(subList.length-1)+'px'}">
        <router-link :to="{name:'serviceDetailS'}" class="hover-border-highlight hover-title-highlight hover-img-scale">
          <div>
            <h2 class="service-name title">{{item.title}}</h2>
            <h6 class="service-description">{{item.subTitle}}</h6>
          </div>
          <figure class="text-align-c"><img :src="item.icon" :alt="item.title"></figure>
        </router-link>
      </dd>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        serviceSwitch:this.$store.state.homeServiceSwitch,
        slogan:'从企加开启您的一站式企业服务体验',
        subSlogan:'5年的企业经验累积，为您企业发展提供全方位保驾护航'
      }
    },
    computed:{
      subList(){
        return this.$store.state.homeServiceSwitch.subList
      },
      activeIndex(){
        return this.$store.state.homeServiceSwitch.activeIndex
      }
    },
    created(){
        this.$store.commit('updateHomeSwitchActiveIndex',0)  //默认索引
        this.$store.commit('updateHomeSwitchSubList',0)  //默认索引
    },
    methods:{
      switchService(index){
        this.$store.commit('updateHomeSwitchActiveIndex',index)
        this.$store.commit('updateHomeSwitchSubList',index)
      }
    },
    components:{
    }
  }
</script>
<style scoped>
  @import '../../../../static/css/independent/home/serviceSwitch/serviceSwitch.css';
</style>
