<template>
  <div class="table-right-inner">
    <h1>财税服务</h1>
    <div class="refer-table-bottom">
      <h6>招商说明</h6>
      <p>
        1、企加网企服扶持政策全面开放，全国限量招商；<br>
        2、扶持机制：1V1专属顾问运营指导；定期店铺体检；定期培训；运营资源位；行业营销活动参与权；专属店铺活动定制；官方媒体宣传；线下活动优先；中、高端定制化需求雇主匹配等；<br>
        3、入驻说明：服务商入驻资料上传后，行业会对服务商资质进行后台评分，若服务商资质总分达到90分及以上，则
        可入选服务商联盟，请服务商提交更加完整的资料，更容易获得更高评分。
      </p>
      <h6>招商说明</h6>
      <ul>
        <li v-for="item in referRightList">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        referRightList: [
          {name: '入驻要求列表'},
          {name: '详情说明'},
          {name: '公司成立时间'},
          {name: '公司注册时间1年以上'},
          {name: '注册资本金'},
          {name: '500万以上'},
          {name: '办公场所'},
          {name: '独立办公场所500平米以上'},
          {name: '公司人数'},
          {name: '120人以上'},

        ]
      }
    }
  }
</script>
<style>
  @import '../../../../static/css/independent/centrum/refer.css';
</style>
