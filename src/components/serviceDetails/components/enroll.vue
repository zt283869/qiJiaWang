<template>
  <div class="register">
    <div class="register_left hover-img-scale overflow-h">
      <img src="../../../../static/img/home/service/s6.jpg" :alt="srsName">
    </div>
    <div class="register_right">
      <div class="register_right_top">
        <h3>有限公司注册</h3>
      </div>
      <div class="register_right_center">为你们提供方便</div>
      <div class="register_right_bottom">
       <div class="register_right-price">
         <div class="market_price">市场价 : <del>￥2563</del></div>
         <div class="present_price">价&nbsp;&nbsp;&nbsp;格 :<span>￥<b>1563</b>元</span></div>
       </div>
        <div class="register_right-best">
          <ul>
            <li>
              <span>2000笔</span>
              <span>月销量</span>
            </li>
            <li>
              <span>99.8%</span>
              <span>好评率</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="genre">
        <div class="genre_title">类型：</div>
        <span v-for="(item,index) in servtitle" :class="{'activetye': index==servDefalute}" @click="servDefalute=index">
         <a href="javascript:;">
            {{item.ztitle}}
          </a>
        </span>
      </div>
      <el-form ref="form" :model="form" id="selectRegionForm">
        <el-form-item label="地区：" class="district_title">
          <el-select v-model="value" placeholder="请选择" v-for="item in 2">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

        </el-form-item>
      </el-form>
      <div class="look">
        <div class="look-title">浏览量&nbsp;&nbsp;：</div>
        <span>29998次</span>
      </div>
      <!--电话弹出-->
      <div class="district_bottom">
        <el-button type="text" @click="dialogVisible = true">电话咨询</el-button>
        <div class="cart">加入购物车</div>
        <el-dialog
          title="电话咨询"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <el-form :model="form">
            <el-form-item label="您的电话号码 ："  class="activity_name">
              <el-input v-model="form.name" auto-complete="off" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码 :" class="message_code">
              <el-input v-model="form.name" auto-complete="off"></el-input>
              <button class="click_side">点击发送</button>
            </el-form-item>
          </el-form>
          <div class="hint">
            <p>客服人员会与您取得联系，接听过程完全免费，请放心使用。</p>
            <p> 友情提示：线上交易可获得平台保障服务，<span>请勿轻易线下交易</span>。</p>
          </div>
          <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false" class="ensures">确 定</el-button>
        </span>
        </el-dialog>

      </div>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        servDefalute: 0,
        servtitle: [
          {ztitle: '有限公司注册'},
          {ztitle: '合伙企业注册'},
          {ztitle: '个人独资企业'},

        ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dialogVisible: false,

        options: [{
          value: '选项1',
          label: '陕西省'
        },
          {
          value: '选项2',
          label: '河南省'
        }],
        value: ''
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
<style scoped>
  @import '../../../../static/css/independent/serviceDetails/serviceDetailsEnroll.css';
</style>


