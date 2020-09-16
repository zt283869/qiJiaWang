<template>
  <div class="wework-details-content">
    <div class="content-nav">
      <ul>
        <li v-for="(item,index) in contentNav" :class="{'describe': index==TurnDefalute}" @click="TurnDefalute=index ;cutShow(index)">{{item.title}}</li>
      </ul>
    </div>
    <!--空间介绍-->
    <synopsis v-show="synopsisShow"></synopsis>
    <!--配套服务-->
    <assort v-show="assortsShow"></assort>
    <!--招募对象-->
    <recruit v-show="recruitShow"></recruit>
    <!--优惠方案-->
    <discounts v-show="discountsShow"></discounts>
  </div>
</template>
<script type="text/ecmascript-6">
  import synopsis from './synopsis.vue'
  import assort from './assort.vue'
  import recruit from './recruit.vue'
  import discounts from './discounts.vue'
  export default {
    data(){
      return{
        TurnDefalute:0,
        synopsisShow:true,
        assortsShow:false,
        recruitShow:false,
        discountsShow:false,
        contentNav:[
          {title:'空间介绍'},
          {title:'配套服务'},
          {title:'招募对象'},
          {title:'优惠方案'},
        ],

      }
    },
    components:{
      synopsis,
      assort,
      recruit,
      discounts

    },
    methods:{
      cutShow(index){
        if(index == 0){
            this.synopsisShow = true;
            this.assortsShow = false;
            this. recruitShow = false;
            this.discountsShow = false;
        }else if(index == 1){
          this.synopsisShow = false;
          this.assortsShow = true;
          this. recruitShow = false;
          this.discountsShow = false;
        }else if(index == 2){
          this.synopsisShow = false;
          this.assortsShow = false;
          this. recruitShow = true;
          this.discountsShow = false;
        }else if(index == 3){
          this.synopsisShow = false;
          this.assortsShow = false;
          this. recruitShow = false;
          this.discountsShow = true;
        }
      }
    }
  }
</script>
<style>
@import '../../../../static/css/independent/weworkDetails/contentNav.css';
</style>
