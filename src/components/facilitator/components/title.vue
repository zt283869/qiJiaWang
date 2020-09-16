<template>
    <div class="facilitators-content clearfix">
      <router-link :to="{name:'serviceDetailS'}">
         <dl v-for="(item,index) in contentList" class="hover-border-highlight hover-title-highlight hover-img-scale">
           <dt class="overflow-h"><img :src="item.img" alt=""></dt>
           <dd>
             <h1 class="title">{{item.name}}</h1>
             <strong>{{item.price}}起</strong>
           </dd>
         </dl>
      </router-link>
    </div>
</template>


<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        TurnDefalute: 0,
        dialogVisible: false,
        turntitle: [
          {ttitle: '综合'},
          {ttitle: '好评率'},
          {ttitle: '成交量'},
          {ttitle: '价格'},
          {ttitle: '服务商评级'}
        ],
      }
    },
    computed:{
      contentList(){
        return this.$store.state.facilitator.content_list
      }
    }
  }

</script>
<style scoped>
  @import '../../../../static/css/independent/facilitator/facilitatorTitle.css';
  @import '../../../../static/css/font/iconfont/iconfilrat/iconfont.css';
</style>


