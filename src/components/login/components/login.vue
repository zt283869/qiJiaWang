<template>
  <div>
    <loginHead :headerTitle="headerTitle"></loginHead>
    <div class="login-passwordFind-register-main login-main">
      <div class="login-main-inner public-wrapper-width">
        <div class="login-wrapper">
          <figure>
            <img :src="loginFormLogo">
          </figure>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" @keyup.enter.native="submitForm('ruleForm')">
            <el-form-item prop="userName">
              <el-input placeholder="请输入手机号" v-model.trim="ruleForm.userName" ref="userName" @focus="usernameVisible=true"></el-input>
              <label class="icon-wrapper icon-wrapper-left">
                <i class="iconfont iconfont-left icon-user"></i>
              </label>
              <div class="icon-wrapper icon-wrapper-right">
                <i class="iconfont iconfont-right icon-cross2 cursor-p" v-show="ruleForm.userName.length>0"
                   @click="clearUserName"></i>
              </div>
            </el-form-item>
            <el-form-item prop="psw">
              <el-input v-if="pswVisiable" type="text" placeholder="请输入密码" v-model="ruleForm.psw"></el-input>
              <el-input v-else type="password" placeholder="请输入密码" v-model="ruleForm.psw"></el-input>
              <label class="icon-wrapper icon-wrapper-left">
                <i class="iconfont iconfont-right icon-suo"></i>
              </label>
              <div class="icon-wrapper icon-wrapper-right" v-show="ruleForm.psw.length>0">
                <i class="iconfont iconfont-right icon-visible cursor-p icon-psw-hidden" v-if="pswVisiable"
                   @click="pswVisiable=!pswVisiable"></i>
                <i class="iconfont iconfont-right icon-visible cursor-p" v-else @click="pswVisiable=!pswVisiable"></i>
              </div>
            </el-form-item>
            <div class="login-added-tools clearfix">
              <span class="fl auto-login cursor-p" :class="{ticked:autoLogin}" @click="autoLogin=!autoLogin">自动登录</span>
              <router-link :to="{name:'userPasswordFind'}" class="fr forget-psw">忘记密码？</router-link>
            </div>
            <el-form-item class="submit-wrapper">
              <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
            </el-form-item>
            <router-link :to="{name:'userRegister'}">
              <el-button>注册企加通行证</el-button>
            </router-link>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Uilts from '../../../uitls'
  import loginHead from './loginHeader.vue'

  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        if (/^1[3|4|5|7|8][0-9]{9}$/.test(value)) {
          callback();
        } else {
          callback(new Error('请输入有效手机号码'));
        }
      };
      var validatePsw = (rule, value, callback) => {
        if (!/\.+/.test(value)) {
          callback(new Error('密码不能为空'));
        } else {
          callback();
        }
      }

      return {
        headerTitle: '欢迎登录',
        loginFormLogo: Uilts.publicPath + '../../../../static/img/login/login-form-logo.png',
        usernameVisible: false,
        autoLogin: false,
        pswVisiable: false,

        ruleForm: {
          userName: '',
          psw: '',
        },
        rules: {
          userName: [
            {validator:validateUsername, trigger: 'blur'}
          ],
          psw: [
            {required:true, message:'密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.replace({name: 'personalCenterS'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        console.log(this.ruleForm)
        localStorage.setItem("loginName",this.ruleForm.userName)
        localStorage.setItem("isLogo",true)

      },
      clearUserName() {
        this.ruleForm.userName = ''  //清空手机号
        this.$refs.userName.$el.children[0].focus()  //清空后聚焦
      }
    },
    components:{
      loginHead
    }
  }
</script>

<style scoped>
  @import '../../../../static/css/independent/login/login.css';
  @import '../../../../static/iconfont/login/iconfont.css';
  @import '../../../../static/css/independent/login/common.css';

</style>
