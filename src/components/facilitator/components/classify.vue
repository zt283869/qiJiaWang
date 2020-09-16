<template>
  <div class="facilitator-classify">
    <div class="classify-spec">
      <div class="classify-spec-title">服务规格：</div>
      <div class="classify-spec-content">
        <ul>
          <li v-for="(item,index) in spec" :class="{'active': index==specDefalute}" @click="specDefalute=index">{{item.specTitle}}</li>
        </ul>
      </div>
    </div>
    <div class="classify-price">
      <div class="classify-price-title">次级分类：</div>
      <div class="classify-price-content">
        <ul>
          <li v-for="(item,index) in sort" :class="{'active': index==TurnDefalute}" @click="TurnDefalute=index">{{item.sortTitle}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data(){
      return {
        TurnDefalute:0,
        specDefalute:0,
        spec: [
          {specTitle:'工商服务'},
          {specTitle:'财税服务'},
          {specTitle:'知识产权'},
          {specTitle:'法律咨询'},
          {specTitle: '资质服务'},
          {specTitle: '社保服务'},
          {specTitle: '技术服务'},
          {specTitle: '云服务'}
        ],

        sort:[
          {"sortTitle":"公司注册"},
          {"sortTitle":"公司变更"},
          {"sortTitle":"注销及其他"},
        ],
      }
    },
    methods: {
      cut(index){
      console.log(index)
      }
    }
  }
</script>
<style scoped>
  @import '../../../../static/css/independent/facilitator/classify.css';
</style>
