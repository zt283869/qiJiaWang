<template>
  <div class="message" style="background: url('../../../../static/img/home/centrum/b1.png')no-repeat 100% 100%">
    <div class="message-inner">
      <h3>想了解更详细的招商信息？</h3>
      <div class="message-bottom">
        <div class="message-bottom-left">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="您的称呼">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="您的电话">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="提供服务">
            </el-form-item>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form>
          <div class="message-bottom-present">
            <el-button type="primary">立即提交</el-button>
          </div>
        </div>
        <div class="message-bottom-right">
          <h4>联系我们</h4>
          <span>联系电话：029-883777582, 029-883536254</span>
          <span>在线客服： QQ123456789</span>
          <span>咨询邮箱：852369874@qijia.com</span>
          <span>服务时间：周一至周五 9:00 ~ 17:30</span>
          <div class="erweima">
            <img src="../../../../static/img/home/centrum/erweima.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    }
  }
</script>
<style>
  @import '../../../../static/css/independent/centrum/message.css';
</style>
