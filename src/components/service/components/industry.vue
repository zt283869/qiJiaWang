<template>
    <div class="service-industry">
      <div class="industry-their">
        <div class="industry-their-title">所属行业：</div>
        <div class="industry-their-content">
          <ul>
            <li v-for="(item,index) in their" :class="{'active': index==TurnDefalute}" @click="TurnDefalute=index">{{item.theirTitle}}</li>
          </ul>
        </div>
      </div>
      <div class="industry-vita">
        <div class="industry-vita-title">生命周期：</div>
        <div class="industry-vita-content">
          <ul>
            <li v-for="(item,index) in vita" :class="{'active': index==TurnDefalutes}" @click="TurnDefalutes=index">{{item.vitaTitle}}</li>
          </ul>
        </div>
      </div>
      <div class="industry-sort">
        <div class="industry-sort-title">服务类别：</div>
        <div class="industry-sort-content">
          <el-checkbox-group v-model="checkedCities1">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        TurnDefalute: 0,
        TurnDefalutes: 0,
        TurnDefalutess: 0,
        checked: true,
        their:[
          {"theirTitle":"不限"},
          {"theirTitle":"传统行业"},
          {"theirTitle":"电商企业"},
          {"theirTitle":"互联网企业"},
          {"theirTitle":"餐饮企业"},
          {"theirTitle":"商贸企业"},
          {"theirTitle":"金融企业"},
          {"theirTitle":"自贸区企业"},
          {"theirTitle":"游戏企业"}
        ],
        vita:[
          {"vitaTitle":"创办公司"},
          {"vitaTitle":"天使融资"},
          {"vitaTitle":"A轮"},
          {"vitaTitle":"B轮"},
          {"vitaTitle":"C轮及以上"},
          {"vitaTitle":"持续经营"},
          {"vitaTitle":"功成身退"},
        ],
        budget:[
        {"budgetTitle":"不限"},
        {"budgetTitle":"节约资金"},
        {"budgetTitle":"高性价比"},
        {"budgetTitle":"追求效率"},

      ],
      checkedCities1: ['工商服务', '财税服务'],
      cities: ['工商服务', '财税服务', '知识产权', '法律咨询' ,'资质服务','社保服务','技术服务'],
      }
    }
  }
</script>
<style scoped>
  @import '../../../../static/css/independent/service/industry.css';
</style>
