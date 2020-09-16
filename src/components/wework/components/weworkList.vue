<template>
    <div class="wework-list clearfix">
      <router-link :to="{name:'weworkDetailsS'}">
        <div class="wework-list-content hover-border-highlight hover-title-highlight hover-title-highlight" v-for="(item,index) in weworkList">
          <div class="wework-list-left">
            <img :src="item.img" alt="">
          </div>
          <div class="wework-list-right">
            <h1 class="title">{{item.title}}</h1>
            <span><i><img src="../../../../static/img/home/wework/wemap.jpg" alt=""></i>{{item.address}}</span>
            <span><i><img src="../../../../static/img/home/wework/wecart.jpg" alt=""></i>{{item.tel}}</span>
            <ul>
              <li v-for="items in item.project">{{items.name}}</li>
            </ul>
            <div class="wework-list-area">面积：<span>{{item.area}}万平方</span></div>

          </div>
        </div>
      </router-link>
      <div class="pining">
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="fromData.p"
            :page-size="4"
            layout="total,prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return{
      currentPage:1,
      total:100,
      fromData:{
        p:1,
        ps:4,
        district:' ',
        type:'',
        business:'',
        area:'',
      }
    }
  },
  computed:{
    ...mapState({
      weworkListS:state=>state.wework.weworkListContentS
    }),
    weworkList(){
      return this.$store.state.wework.weworkListContent
    }
  },
  methods:{
    ...mapActions([
      'weworkListSS'
    ]),
    handleCurrentChange(val) {
//           console.log(this.fromData.p)
    }
  },
  mounted:function () {
    this.weworkListSS()
  }
}
</script>
<style>
@import '../../../../static/css/independent/wework/weworkList.css';
.pining{
  height: 88px;
  width:100%;
  text-align: center;
  padding-top:30px;
  box-sizing: border-box;
}
</style>
