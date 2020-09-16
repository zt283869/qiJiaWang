<template>
  <div class="carrierDetails clearfix">
      <div class="carrierDetails-nav">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><router-link :to="{name:'weworks'}">众创空间</router-link></el-breadcrumb-item>
          <el-breadcrumb-item>招商信息详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    <div class="carrierDetails-content clearfix">
      <div class="carrierDetails-content-left">
          <h1>长安创新中心进入2.0阶段，举办盛大发布会</h1>
          <div class="time">
            <span>企家网</span>
            <span>2017.10.23</span>
          </div>
        <div class="content-details">
          <div class="carrier-img">
            <img src="../../../static/img/home/carrier/bg.jpg" alt="">
          </div>
          <div class="carrier-text">
            <p>
              互联网金融正在经历一轮低谷期，监管收紧，粗放地增长模式已经走到尽头，从主要改善用户体验和创新资产类别的Fintech1.0阶段开始向2.0的智能化方向发展，在这种背景下，7月20日，36氪联合峰瑞资本、华创资本举办了“WISE科技金融创智沙龙”，对互金行业何去何从展开了深入探讨。

              在讨论前景前，首先需要明确金融创新的内在规律是什么？峰瑞资本创始合伙人李丰认为，经济体的信贷周期中会依次出现金融创新、资产证券化和财富管理创新这三件事。首先，降息使得流动性充裕，资金就有原始冲动去寻找一些原来未被充分发掘的创新资产类别，“金融创新是百分之百会出现的事情，唯一的变数是到底去哪里创新。”

              第二个阶段就是对创新资产做资产证券化，据李丰介绍，以美国举例，这一阶段就是把创新出来的房地产贷款资产进行分散化和对冲，第三个阶段就是财富管理的创新。总之，让钱去有更高生产效率的地方，是所有金融创新的唯一目的。

              因此，李丰认为，中国互联网金融的好机会在于，在资金端可以增加各种财富管理形式和资产类别；在资产端，也可把握“去监管化”的趋势，利用已有客户优势和中国市场化的机会，进行横向扩张。

              人工智能开始越来越多地在金融领域得到应用，这也可能是中国互金行业的转型机会，对此，信而富首席战略官王峻认为，美国人工智能目前还走在中国前面，值得中国企业学习，比如美国的相关企业可以根据人群在互联网上的非结构化的数据，对人群进行分析，建立征信系统的模型。这种方法跟绝大多数广告引流、即时授信的方法有根本区别。通过机器学习，能够识别很多低风险人群，减少单纯征信体系的误判，再通过事先推送白名单的办法，帮助平台方降低风险。
            </p>
            <p>
              互联网金融正在经历一轮低谷期，监管收紧，粗放地增长模式已经走到尽头，从主要改善用户体验和创新资产类别的Fintech1.0阶段开始向2.0的智能化方向发展，在这种背景下，7月20日，36氪联合峰瑞资本、华创资本举办了“WISE科技金融创智沙龙”，对互金行业何去何从展开了深入探讨。

              在讨论前景前，首先需要明确金融创新的内在规律是什么？峰瑞资本创始合伙人李丰认为，经济体的信贷周期中会依次出现金融创新、资产证券化和财富管理创新这三件事。首先，降息使得流动性充裕，资金就有原始冲动去寻找一些原来未被充分发掘的创新资产类别，“金融创新是百分之百会出现的事情，唯一的变数是到底去哪里创新。”

              第二个阶段就是对创新资产做资产证券化，据李丰介绍，以美国举例，这一阶段就是把创新出来的房地产贷款资产进行分散化和对冲，第三个阶段就是财富管理的创新。总之，让钱去有更高生产效率的地方，是所有金融创新的唯一目的。

              因此，李丰认为，中国互联网金融的好机会在于，在资金端可以增加各种财富管理形式和资产类别；在资产端，也可把握“去监管化”的趋势，利用已有客户优势和中国市场化的机会，进行横向扩张。

              人工智能开始越来越多地在金融领域得到应用，这也可能是中国互金行业的转型机会，对此，信而富首席战略官王峻认为，美国人工智能目前还走在中国前面，值得中国企业学习，比如美国的相关企业可以根据人群在互联网上的非结构化的数据，对人群进行分析，建立征信系统的模型。这种方法跟绝大多数广告引流、即时授信的方法有根本区别。通过机器学习，能够识别很多低风险人群，减少单纯征信体系的误判，再通过事先推送白名单的办法，帮助平台方降低风险。
            </p>
          </div>
          <div class="realize">
            <router-link :to="{name:'weworkDetailsS'}"><el-button type="primary" @click="submitForm('ruleForm')">了解更多</el-button></router-link>
          </div>
        </div>
      </div>
      <div class="carrierDetails-content-right">
        <div class="carrier-title">
          <span>相关招商信息</span>
        </div>
        <div class="text-list">
          <dl v-for="item in carrierLists">
            <dt><img :src="item.img" alt=""></dt>
            <dd>{{item.name}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    carrierLists(){
      return this.$store.state.carrier.carrierList

    }
  }
}
</script>
<style>
  @import '../../../static/css/independent/carrierDetails/carrierDetails.css';
</style>
