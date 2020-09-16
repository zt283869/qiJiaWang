<template>
  <div>
    <loginHead :headerTitle="headerTitle"></loginHead>
    <div class="login-passwordFind-register-main passwordFind-register-main password-find-main">
    <div class="form-wrapper">
      <div class="form-inner">
        <formHeader :formHeaderTitle="formHeaderTitle" :icon="icon"></formHeader>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" @keyup.enter.native="submitForm('ruleForm')">
          <el-form-item prop="userName">
            <el-input placeholder="请输入手机号" v-model.trim="ruleForm.userName" ref="userName" @focus="usernameVisible=true"></el-input>
            <label class="icon-wrapper icon-wrapper-left">
              <i class="iconfont iconfont-left icon-user"></i>
            </label>
            <div class="icon-wrapper icon-wrapper-right">
              <i class="iconfont iconfont-right icon-cross2 cursor-p" v-show="ruleForm.userName.length>0"  @click="clearUserName"></i>
            </div>
          </el-form-item>
          <el-form-item prop="icode" class="form-item-icode">
            <el-input type="text" placeholder="请输入验证码" v-model.trim="ruleForm.icode" :maxlength=4></el-input>
            <label class="icon-wrapper icon-wrapper-left">
              <i class="iconfont iconfont-right icon-yanzheng"></i>
            </label>
            <div class="icon-wrapper icon-wrapper-right icode-wrapper cursor-p" @click="getIcode" title="点击获取">
              <img src="../../../../static/img/login/temp/icode.png" alt="" class="loginRegister-form-iconImg">
            </div>
          </el-form-item>
          <el-form-item prop="mobileIcode" class="form-item-icode">
            <el-input type="text" placeholder="请输入短信验证码" v-model.trim="ruleForm.mobileIcode" :maxlength=4></el-input>
            <label class="icon-wrapper icon-wrapper-left">
              <i class="iconfont iconfont-right icon-yanzheng"></i>
            </label>
            <div class="icon-wrapper icon-wrapper-right icode-wrapper cursor-p" @click="getMobileIcode" title="点击获取" >
              获取验证码
            </div>
          </el-form-item>
          <el-form-item prop="psw">
            <el-input v-if="pswVisiable" type="text" placeholder="请输入新密码" v-model="ruleForm.psw"></el-input>
            <el-input v-else type="password" placeholder="请输入新密码" v-model="ruleForm.psw"></el-input>
            <label class="icon-wrapper icon-wrapper-left">
              <i class="iconfont iconfont-right icon-suo"></i>
            </label>
            <div class="icon-wrapper icon-wrapper-right"  v-show="ruleForm.psw.length>0">
              <i class="iconfont iconfont-right icon-visible cursor-p icon-psw-hidden" v-if="pswVisiable" @click="pswVisiable=!pswVisiable"></i>
              <i class="iconfont iconfont-right icon-visible cursor-p" v-else @click="pswVisiable=!pswVisiable"></i>
            </div>
          </el-form-item>
          <el-form-item prop="pswConfirm">
            <el-input v-if="pswConfirmVisiable" type="text" placeholder="请确认新密码" v-model="ruleForm.pswConfirm"></el-input>
            <el-input v-else type="password" placeholder="请确认新密码" v-model="ruleForm.pswConfirm"></el-input>
            <label class="icon-wrapper icon-wrapper-left">
              <i class="iconfont iconfont-right icon-suo"></i>
            </label>
            <div class="icon-wrapper icon-wrapper-right"  v-show="ruleForm.pswConfirm.length>0">
              <i class="iconfont iconfont-right icon-visible cursor-p icon-psw-hidden" v-if="pswConfirmVisiable" @click="pswConfirmVisiable=!pswConfirmVisiable"></i>
              <i class="iconfont iconfont-right icon-visible cursor-p" v-else @click="pswConfirmVisiable=!pswConfirmVisiable"></i>
            </div>
          </el-form-item>
          <el-form-item class="submit-wrapper">
            <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import loginHead from './loginHeader.vue'
  import formHeader from './public-form-header.vue'
  export default{
    data () {
      var validateUsername = (rule, value, callback) => {
        if (/^1[3|4|5|8][0-9]{9}$/.test(value)) {
          callback();
        } else {
          callback(new Error('请输入有效手机号'));
        }
      };
      var validatePsw = (rule, value, callback) => {
        if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(value)) {
          callback();
        } else {
          callback(new Error('6-12位数字和字母组合，不能是纯数字或纯字母'));
        }
      }
      var validatePswConfirm = (rule, value, callback) => {
        if (value===this.ruleForm.psw) {
          callback();
        } else {
          callback(new Error('两次密码不一致'));
        }
      }

      return {
        headerTitle:'找回密码',
        formHeaderTitle:'通过手机号重设密码',
        icon:'icon-suo',
        pswVisiable:false,
        pswConfirmVisiable:false,

        usernameVisible:false,
        ruleForm:{
          userName:'',
          psw:'',
          pswConfirm:'',
          icode:null
        },
        rules: {
          userName: [
            {validator:validateUsername, trigger: 'blur'}
          ],
          psw: [
            { validator:validatePsw, trigger: 'blur' }
          ],
          pswConfirm: [
            { validator:validatePswConfirm, trigger: 'blur' }
          ],
          icode:[
            { required:true, message:'请输入验证码', trigger: 'blur' }
          ],
          mobileIcode:[
            { required:true, message:'请输入短信验证码', trigger: 'blur' }
          ]
        }
      }
    },
    components:{
      loginHead,
      formHeader
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      clearUserName() {
        this.ruleForm.userName = ''  //清空手机号
        this.$refs.userName.$el.children[0].focus()  //清空后聚焦
      },
      getIcode(){

      },
      getMobileIcode(){

      }
    }
  }
</script>

<style scoped>
  @import '../../../../static/css/independent/login/register-pswFind-common.css';
  @import '../../../../static/iconfont/login/iconfont.css';
  @import '../../../../static/css/independent/login/common.css';

</style>
