<template>
  <div class="telphone">
    <div class="telphone-top">
      <h1>与该团队取得联系</h1>
      <h4>联系电话：15114820087</h4>
      <img src="../../../../static/img/home/wework/details2.jpg" alt="">
      <h5>张国荣</h5>
      <h6>市场总监</h6>
    </div>
    <div class="telphone-bottom">
      <el-button type="text" @click="dialogVisible = true">约参观</el-button>
      <el-dialog
        title="预约参观"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="relation">请输入您的联系方式，我们的工作人员稍后会电话联系您！</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="phone" ref="phone">
            <el-input v-model.trim="ruleForm.phone" auto-complete="off" placeholder="填写您的手机号"></el-input>
          </el-form-item>
          <el-form-item prop="iCode">
            <el-input v-model.trim="ruleForm.iCode" auto-complete="off"  placeholder="请输入短信验证码"></el-input>
          </el-form-item>
          <el-button class="click_side cursor-p" v-if="ruleForm.sendIcodeEnabled" @click="sendIcode('phone')">点击发送 </el-button>
          <el-button class="click_side disabled" v-else disabled>点击发送<span v-if="countdownVisible">{{countDown}}</span></el-button>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')" class="ensures">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      var validatePhone = (rule, value, callback) => {
        if(/^\s*1[3|4|5|7|8][0-9]{9}\s*$/.test(value)){
          callback()
          this.ruleForm.sendIcodeEnabled=true
        }else{
          callback(new Error('请输入有效手机号码'));
          this.ruleForm.sendIcodeEnabled=false
        }
      }

      return {
        ruleForm: {
          phone: '',
          iCode:'',
          sendIcodeEnabled:false,
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
        rules:{
          phone:[
            {validator:validatePhone, trigger:'change'}
//            {validator:validatePhone, trigger:['change','blur']}
          ],
          iCode:[
            {required:true, message:'验证码不能为空', trigger:'blur'}
          ]
        },
        dialogVisible: false,
        countDown:3,
        countdownVisible:false
      }
    },
    methods: {
      handleClose() {
        this.cancel()
      },
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if(valid){
            this.sendOrderToVisit({phone:this.ruleForm.phone, id:this.ruleForm.id})  //访问接口发送数据
            this.dialogVisible = false
            this.resetForm()
          }
        })
      },
      cancel(){
        this.dialogVisible = false
        this.resetForm()
      },
      sendIcode(){
        this.ruleForm.sendIcodeEnabled=false  //发送验证码按钮可用
//        this.countdownVisible=true //显示倒数计时
//        this.countdown()  //触发倒数方法
      },

//      倒数方法
      countdown() {
        var _this = this
        var countdownInterval = setInterval(function () {
          _this.countDown--
          if (_this.countDown === 0) {
            clearInterval(countdownInterval)
//            _this.countdownVisible=false
          }
        }, 1000)
      },
      resetForm(){
        this.ruleForm.phone=''
        this.ruleForm.iCode=''

//        this.countDown=3  //倒计时恢复默认值
//        this.countdownVisible=false //隐藏倒数计时
      }
    }
  }
</script>
<style>
@import '../../../../static/css/independent/weworkDetails/telphone.css';
</style>
