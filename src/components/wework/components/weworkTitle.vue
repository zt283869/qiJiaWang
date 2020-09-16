<template>
    <div class="wework-title">
      <div class="wework-area">
        <div class="wework-area-title">区域：</div>
        <div class="wework-area-content">
          <ul>
            <li v-for="(item,index) in area" :class="{'active': index==areaDefalute}" @click="areaDefalute=index">{{item.areaTitle}}</li>
          </ul>
        </div>
      </div>
      <div class="wework-rank">
        <div class="wework-rank-title">类型：</div>
        <div class="wework-rank-content">
          <ul>
            <li v-for="(item,index) in rank" :class="{'active': index==rankDefalute}" @click="rankDefalute=index">{{item.rankTitle}}</li>
          </ul>
        </div>
      </div>
      <div class="wework-trade">
        <div class="wework-trade-title">行业：</div>
        <div class="wework-trade-content">
          <ul>
            <li v-for="(item,index) in trade" :class="{'active': index==tradeDefalute}" @click="tradeDefalute=index">{{item.tradeTitle}}</li>
          </ul>
        </div>
      </div>
      <div class="wework-acreage">
        <div class="wework-acreage-title">面积：</div>
        <div class="wework-acreage-content">
          <ul>
            <li v-for="(item,index) in acreage" :class="{'active': index==acreageDefalute}" @click="acreageDefalute=index">{{item.acreageTitle}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data(){
      return{
        areaDefalute: 0,
        rankDefalute: 0,
        tradeDefalute: 0,
        acreageDefalute: 0,

        checked: true,
        area:[
          {"areaTitle":"不限"},
          {"areaTitle":"新城区"},
          {"areaTitle":"碑林区"},
          {"areaTitle":"莲湖区"},
          {"areaTitle":"灞桥区"},
          {"areaTitle":"未央区"},
          {"areaTitle":"雁塔区"},
          {"areaTitle":"临潼区"},
          {"areaTitle":"长安区"},
          {"areaTitle":"高陵区"},
        ],
        rank:[
          {"rankTitle":"不限"},
          {"rankTitle":"国家级孵化"},
          {"rankTitle":"省级孵化"},
          {"rankTitle":"市级孵化"},
          {"rankTitle":"国家级众创空间"},
          {"rankTitle":"省级众创空间"},
          {"rankTitle":"市级众创空间"},
          {"rankTitle":"区级众创空间"},
        ],
        trade:[
          {"tradeTitle":"不限"},
          {"tradeTitle":"综合"},
          {"tradeTitle":"电子信息"},
          {"tradeTitle":"生物医药"},
          {"tradeTitle":"现代服务业"},
          {"tradeTitle":"金融"},
          {"tradeTitle":"石油化工"},
          {"tradeTitle":"新材料"},
          {"tradeTitle":"新能源"},
          {"tradeTitle":"电子商务"},

        ],
        acreage:[
          {"acreageTitle":"不限"},
          {"acreageTitle":"0.5万平方米以下"},
          {"acreageTitle":"0.5-2万平方"},
          {"acreageTitle":"2-5万平方"},
          {"acreageTitle":"5万平方米以上"},

        ]
        }
      },
    computed:{
      ...mapState({
          areas:state=>state.weworkTitle.area,
          ranks:state=>state.weworkTitle.rank,
          trades:state=>state.weworkTitle.trade,
  }),
  },
  methods:{
  ...mapActions([
      'weworkTitleAreas',
      'weworkTitleRank',
      'weworkTitleTrades'
    ]),
  },
  mounted:function () {
    this.weworkTitleAreas('/web/countys?format=json&type=2&ps=1000&ob=id')
    this.weworkTitleRank( '/web/carriertypes?format=json')
    this.weworkTitleTrades( '/web/carrierindustrys?format=json')
    console.log(this.areas.body.body.County,8)
//    console.log(this.ranks.body.body.CarrierType,9)
//    console.log(this.trades.body.body.CarrierIndustry,10)

  }
  }




</script>
<style>
@import '../../../../static/css/independent/wework/weworkTitle.css';
</style>
