<template>
    <div class="header" >
      <!--最顶部-->
      <headerTop v-on:child-say="listenerF"></headerTop>
      <div class="header-bottom"  @click="leaves()">
        <div class="header-bottom-inner">
          <router-link :to="{name:'indexS'}">
              <div class="header-bottom-logo"><img src="../../../static/img/home/header/qj_logo.jpg" alt=""></div>
          </router-link>
          <div class="header-bottom-nav">
            <ul>
               <li v-for="(item, index,key) in header_nav" :class="{'active': index==TurnDefalute}" @click="scrollPosition(index)" @mouseenter="shows(index)">
                 <router-link :to="pathR[index]"> {{item.nav_title}} </router-link>
               </li>
            </ul>
          </div>
          <div class="header-bottom-input">
            <div>
              <el-input placeholder="您想寻找什么样的企业服务，比如搜索“公司注册”" v-model="input">
                <template slot="append">搜索</template>
              </el-input>
            </div>

          </div>
          <nav_box :class="{'nav-box-show':reveal}" @mouseleave.native="reveal=false"></nav_box>
        </div>
      </div>

    </div>
</template>
<script type="text/ecmascript-6">
  import nav_box from './components/headerNav.vue'
  import ctiy from './components/ctiy.vue'
  import headerTop from './components/headerTop.vue'
  export default {
    data(){
      return{
        isLogo:false,
        input:'',
        loginName:'',
        pathR:[
          "/entrance/index",
          "/entrance/facilitator",
          "/entrance/service",
          "/entrance/wework",
          "/entrance/index",
          "/entrance/centrum",
        ],
        reveal:false,
        ctiys:false,
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
      listenerF(data){
        this.TurnDefalute=data;
      },
      stroke(){
        this.ctiys=true;
      },
      leaves(){
        this.ctiys=false;
      },
      hideCtiy(){
        setTimeout(_ => {
          this.ctiys=false;
        }, 5000);
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
        ctiy,
        headerTop
    },
    mounted() {

    },
    watch:{
      TurnDefalute:function (val) {
        console.log(val)
      }
    },


  }

</script>
<style scoped>
  @import '../../../static/css/independent/header/header.css';
  .i{
    font-style: normal;
  }
</style>


