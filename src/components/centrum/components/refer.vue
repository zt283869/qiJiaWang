<template>
  <div class="refer">
    <div class="refer-inner">
      <h3>资质查询</h3>
      <div class="refer-table">
        <div class="refer-table-left">
          <ul>
            <li v-for="(item,index) in referLeftList" :class="{'activeBg': index==referDeful}" @click="referDeful=index;rightShow(index)">{{item.name}}</li>
          </ul>
        </div>
        <div class="refer-table-right">
          <referBiz v-show="biz"></referBiz>
          <referLevy v-show="levy"></referLevy>
          <referLaw v-show="law"></referLaw>
          <referApt v-show="apt"></referApt>
          <referPoint v-show="point"></referPoint>
          <referJinpo v-show="jinpo"></referJinpo>
          <referArt v-show="art"></referArt>
        </div>

      </div>
      <div style="clear: both"></div>
    </div>

  </div>
</template>
<script>
  import Uilts from '../../../uitls'
  import referBiz from './referBiz.vue'
  import referLevy from './referLevy.vue'
  import referLaw from './referLaw.vue'
  import referApt from './referApt.vue'
  import referPoint from './referPoint.vue'
  import referJinpo from './referJinpo.vue'
  import referArt from './referArt.vue'

      export default {
        data(){
          return{
            a:Uilts,
            referDeful:0,
            biz:true,
            levy:false,
            law:false,
            apt:false,
            point:false,
            jinpo:false,
            art:false,
            referLeftList:[
              {name:"工商服务"},
              {name:"财税服务"},
              {name:"法律服务"},
              {name:"资质审查"},
              {name:"知识产权"},
              {name:"社保服务"},
              {name:"技术服务"},
            ],
            referRightList:[
              {name:'入驻要求列表'},
              {name:'详情说明'},
              {name:'公司成立时间'},
              {name:'公司注册时间1年以上'},
              {name:'注册资本金'},
              {name:'500万以上'},
              {name:'办公场所'},
              {name:'独立办公场所500平米以上'},
              {name:'公司人数'},
              {name:'120人以上'},

            ]
          }
        },
        components:{
          referBiz,
          referLevy,
          referLaw,
          referApt,
          referPoint,
          referJinpo,
          referArt
        },
        methods:{
          rightShow(index){
            if(index == 0){
              this.biz = true;
              this.levy = false;
              this.law = false;
              this.apt = false;
              this.point = false;
              this.jinpo = false;
              this.art = false;
            }else if(index == 1){
              this.biz = false;
              this.levy = true;
              this.law = false;
              this.apt = false;
              this.point = false;
              this.jinpo = false;
              this.art = false;
            }else if(index == 2){
              this.biz = false;
              this.levy = false;
              this.law = true;
              this.apt = false;
              this.point = false;
              this.jinpo = false;
              this.art = false;
            }else if(index == 3){
              this.biz = false;
              this.levy = false;
              this.law = false;
              this.apt = true;
              this.point = false;
              this.jinpo = false;
              this.art = false;
            }else if(index == 4){
              this.biz = false;
              this.levy = false;
              this.law = false;
              this.apt = false;
              this.point = true;
              this.jinpo = false;
              this.art = false;
            }else if(index == 5){
              this.biz = false;
              this.levy = false;
              this.law = false;
              this.apt = false;
              this.point = false;
              this.jinpo = true;
              this.art = false;
            }else if(index == 6){
              this.biz = false;
              this.levy = false;
              this.law = false;
              this.apt = false;
              this.point = false;
              this.jinpo = false;
              this.art = true;
            }
          }
        }
      }
</script>
<style>
  @import '../../../../static/css/independent/centrum/refer.css';
  .refer {
    background: url("../../../../static/img/home/centrum/b3.png");
  }
</style>
