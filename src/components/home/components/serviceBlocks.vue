<!--首页不规则服务区块列表组件-->
<template>
  <div class="home-service-blocks-wrapper public-wrapper-width">
    <div class="text-align-c">
      <h2 class="home-public-title">{{slogan}}</h2>
      <h6 class="home-public-subTitle">
        <span class="subTitle">{{subSlogan}}</span>
      </h6>
    </div>
    <div>
      <div v-for="item in serviceBlockList" class="home-service-block home-service-block1 clearfix">
        <div class="firstly-service fl"
             :style="{
                  background: 'linear-gradient('+item.bgGradientColor+')',
                  background: '-webkit-linear-gradient('+item.bgGradientColor+')'
//                  background: 'url('+item.bgImg+') no-repeat right bottom, linear-gradient('+item.bgGradientColor+')',
//                  background: 'url('+item.bgImg+') no-repeat right bottom, -webkit-linear-gradient('+item.bgGradientColor+')',
//                  backgroundColor:item.bgColor+'\0',
//                  backgroundImage:'url('+item.bgImg+')'+'\0'
            }">
          <h2 class="name">{{item.name}}</h2>
          <h3 class="enName">{{item.enName}}</h3>
          <h6 class="description" v-html="item.slogan"></h6>
          <router-link  :to="{name:'facilitatorS'}" class="more">查看更多</router-link>
        </div>
        <ul class="secondly-service fr">
          <li v-for="subItem in item.subList"
              :class="subItem.style"
              :style="{ backgroundImage:'url('+subItem.bgImg+')' }"
              class="service-block hover-title-highlight hover-border-highlight hover-scale">
            <router-link :to="{name:'serviceDetailS'}">
              <h2 class="title">{{subItem.name}}</h2>
              <h6 class="subTitle">{{subItem.slogan}}</h6>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        slogan:'从企加开启您的一站式企业服务体验',
        subSlogan:'5年的企业经验累积，为您企业发展提供全方位保驾护航'
      }
    },
    computed:{
      serviceBlockList(){
        return this.$store.state.serviceBlocks.serviceBlockList   //获取不规则区块数组数据
      }
    }
  }
</script>
<style scoped>
  @import '../../../../static/css/independent/home/serviceBlocks/serviceBlocks.css';
</style>
