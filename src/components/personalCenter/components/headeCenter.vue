<template>
    <div class="header">
      <!--最顶部-->
      <div class="header-bottom"  @click="leaves()">
        <div class="header-bottom-inner">
          <router-link :to="{name:'indexS'}">
            <div class="header-bottom-logo"><img src="../../../../static/img/home/header/qj_logo.jpg" alt=""></div>
          </router-link>
          <div class="header-bottom-nav">
            <ul>
              <li v-for="(item, index,key) in header_nav" :class="{'active': index==TurnDefalute}" @click="scrollPosition(index)" @mouseenter="shows(index)" >
                <router-link :to="pathR[index]">{{item.nav_title}} </router-link>
              </li>
            </ul>
          </div>
          <nav_box v-show="reveal" @mouseleave.native="reveal=false"></nav_box>
          <div class="header-bottom-input">
            <input type="text" name="text" class="seach-input" placeholder="您想寻找什么样的企业服务，比如搜索“公司注册”"><span>搜索</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import nav_box from '../../header/components/headerNav.vue'
  export default {
    data(){
      return{
        NavboxHigt:'',
        name:'',
        reveal:false,
        pathR:[
          "/entrance/index",
          "/entrance/facilitator",
          "/entrance/service",
          "/entrance/wework",
          "/entrance/index",
          "/entrance/centrum",
        ],
        TurnDefalute: 0,
          header_nav: [
          {nav_title: '首页'},
          {nav_title: '全部服务'},
          {nav_title: '企加定制'},
          {nav_title: '众创空间'},
          {nav_title: '云服务'},
          {nav_title: '招商中心'},
        ],
      }
    },
    methods:{
       shows(index){
            if(index == 1){
              this.reveal=true;
            }else{
              this.reveal=false;
            }
       },
      //滚动条定位
      scrollPosition(index) {
        this.TurnDefalute = index;
        this.$nextTick(function () {
          if (index == 4) {
            window.scrollTo(0, 3700)
          }
        })
      }

    },
    components:{
        nav_box,

    },
  }

</script>
<style scoped>
  .nav-box{
    top:80px !important;
  }
</style>
