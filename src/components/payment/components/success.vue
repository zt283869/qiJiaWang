<template>
    <div class="payment-success">
      <div class="payment-success-inner">
        <div class="payment-success-top">
          <img src="../../../../static/img/home/payment/success.jpg" alt="">
        </div>
        <div class="payment-success-bottom">
          <span>订单号：1296325874</span>
          <span>订单详情：</span>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="title" label="商品名称" width="200"></el-table-column>
            <el-table-column prop="name" label="服务商" width="200"></el-table-column>
            <el-table-column prop="price" label="单价" width="200"></el-table-column>
            <el-table-column prop="num" label="数量" width="200"></el-table-column>
            <el-table-column prop="total" label="小计金额" width="388"></el-table-column>

          </el-table>
          <div class="payment-success-rental">
            <div class="rental"> <span>合计总额</span>  <span>¥1499</span></div>
            <div class="deduction"><span>抵扣金额</span>  <span>¥0</span></div>
            <div class="summation"><span>应付总额</span>  <span>¥1499</span></div>
          </div>
          <div class="pattern">
            <span>支付方式：</span>
            <span>
              <img src="../../../../static/img/home/payment/pay.jpg" alt="">
            </span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
    data() {
      return {
        tableData: [{
          title: '资产审计',
          name: '淘丁财税',
          price: '1518元',
          num:'1236',
          total:'78896元'
        }, {
          title: '有限公司注册',
          name: '企加网',
          price: '123元',
          num:'8569',
          total:'52369元'
        },]
      }
    }
  }
</script>
<style>
  @import '../../../../static/css/independent/payment/success.css';
</style>
