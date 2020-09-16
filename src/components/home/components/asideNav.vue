<!--首页侧边服务类目抽屉菜单-->
<template>
  <div class="home-aside-service-wrapper fl" @mouseleave="hideSubService">
    <aside class="home-aside-service-nav">
      <div class="tab">全部企业服务</div>
      <ul>
        <li v-for="(item,index) in serviceList" :class="{'active':index===activeIndex}" @mouseenter="switchSubService(index)">
          <a href="javascript:void(0);">{{item.name}}<span class="arrow"></span></a>
        </li>
      </ul>
    </aside>
    <div class="home-aside-subService-wrapper clearfix" :class="{show:subServiceWrapperShow}">
      <div class="home-aside-subService-inner fl">
        <section v-for="item in subServiceList">
          <h3 class="sub-name">{{item.name}}</h3>
          <ul class="srs-list">
            <li v-for="subItem in item.srsList"><router-link :to="{name:'serviceDetailS'}">{{subItem.name}}</router-link></li>
          </ul>
        </section>
      </div>
      <div class="home-aside-subService-shortcut fl">
        <section>
          <a href="javascript:void(0);">自助专利查询工具</a>
        </section>
        <section>
          <a href="javascript:void(0);">自助商标查询工具</a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        activeIndex:null,
        subServiceWrapperShow:false
      }
    },
    computed:{
      serviceList(){
        return this.$store.state.asideServiceNav.serviceList
      },
      subServiceList(){
        return this.$store.state.asideServiceNav.subServiceList
      }
    },
    created(){
      this.$store.commit('updatesubServiceList',0)  //默认第一项
    },
    methods:{
//      显示抽屉菜单
      switchSubService(index){
        this.activeIndex=index  //改变高亮索引
        this.subServiceWrapperShow=true //显示抽屉菜单
        this.$store.commit('updatesubServiceList',index)   //更新索引值
      },
//      隐藏抽屉菜单
      hideSubService(){
        this.activeIndex=null    //改变高亮索引
        this.subServiceWrapperShow=false  //显示抽屉菜单
      }
    },
    components:{

    }
  }
</script>

<style scoped>
    @import '../../../../static/css/independent/home/asideNav/asideNav.css';
</style>
