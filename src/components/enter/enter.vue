<template>
    <div class="enter">
        <div class="enter-top">
          <span>服务商入驻</span>
          <span>欢迎提交服务商入驻申请，提交信息后会有工作人员与您电话沟通</span>
        </div>
        <div class="enter-bottom">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="enter-basic">
                <div class="title-basic"><i><img src="../../../static/img/home/enter/enter1.jpg" alt=""></i>基本信息</div>
                        <el-form-item label="服务商名称" prop="title">
                            <el-input v-model="ruleForm.title" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="服务商简称" prop="short">
                            <el-input v-model="ruleForm.short" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="注册地址" prop="address">
                          <el-input v-model="ruleForm.address" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="机构类型" prop="organ">
                          <el-input v-model="ruleForm.organ" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="组织机构代码" prop="word">
                          <el-input v-model="ruleForm.word" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="组织机构代码证有效期" prop="validity">
                          <el-input v-model="ruleForm.validity" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="组织机构代码证证明文件">
                        </el-form-item>
                        <el-form-item label="加盖公章">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed">
                                <el-button size="small" type="primary">上传文件</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="法定代表人姓名" prop="names">
                            <el-input v-model.number="ruleForm.names"></el-input>
                        </el-form-item>
                        <el-form-item label="法定代表人身份证号码" prop="tel">
                            <el-input v-model.number="ruleForm.tel"></el-input>
                        </el-form-item>
                        <el-form-item label="法定代表人身份证号码（正面）">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed">
                                <el-button size="small" type="primary">上传文件</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="法定代表人身份证号码（反面）">
                            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed">
                                <el-button size="small" type="primary">上传文件</el-button>
                            </el-upload>
                        </el-form-item>

            </div>
            <div class="enter-honor">
                <div class="title-honor"><i><img src="../../../static/img/home/enter/enter2.jpg" alt=""></i>资质信息</div>
                  <el-form-item label="服务资质" prop="aptitude">
                    <el-input v-model.number="ruleForm.aptitude"></el-input>
                  </el-form-item>
                  <el-form-item label="其他资质证明文件编号" prop="number">
                    <el-input v-model.number="ruleForm.number"></el-input>
                  </el-form-item>
                  <el-form-item label="证明文件（加盖公章）">
                    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" multiple :limit="3" :on-exceed="handleExceed">
                      <el-button size="small" type="primary">上传文件</el-button>
                    </el-upload>
                  </el-form-item>

            </div>
            <div class="enter-liaison">
                <div class="title-liaison"><i><img src="../../../static/img/home/enter/enter3.jpg" alt=""></i>联络信息</div>
                  <el-form-item label="联系人" prop="attn">
                    <el-input v-model.number="ruleForm.attn"></el-input>
                  </el-form-item>
                  <el-form-item label="联系电话" prop="telsign">
                    <el-input v-model.number="ruleForm.telsign"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="mailbox">
                    <el-input v-model.number="ruleForm.mailbox"></el-input>
                  </el-form-item>

            </div>
            <div class="present">

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  </el-form-item>

            </div>
          </el-form>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      var validateTitle = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入服务商名称'));
        } else {
          callback();
        }
      };
      var validateShort = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入服务商简称'));
        } else {
          callback();
        }
      };
      var validateAddress = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入注册地址'));
        } else {
          callback();
        }
      };
      var validateOrgan = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入机构类型'));
        } else {
          callback();
        }
      };
      var validateWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入组织机构代码'));
        } else {
          callback();
        }
      };
      var validateValidity = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入组织机构代码证有效期'));
        } else {
          callback();
        }
      };
      var validateNames = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入法定代表人姓名'));
        } else {
          callback();
        }
      };
      var validateTel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入法定代表人身份证号码'));
        } else {
          callback();
        }
      };
      var validateAptitude = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入服务资质'));
        } else {
          callback();
        }
      };
      var validateNumber = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入其他资质证明文件编号'));
        } else {
          callback();
        }
      };
      var validateAttn = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入联系人'));
        } else {
          callback();
        }
      };
      var validateTelsign = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入联系电话'));
        } else {
          callback();
        }
      };
      var validateMailbox = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else {
          callback();
        }
      };
      return {
        labelPosition: 'right',
        ruleForm: {
          title:'',                 //服务商名称
          short:'',                 //服务商简称
          address:'',               //注册地址
          organ:'',                 //机构类型
          word:'',                  //组织机构代码
          validity:'',              //组织机构代码证有效期
          names:'',                 //姓名
          tel:'',                   //号码
          aptitude:'',             //资质
          number:'',                //编号
          attn:'',                  //联系人
          telsign:'',               //联系电话
          mailbox:''                //邮箱
        },
        rules: {
          title: [
            { validator: validateTitle, trigger: 'blur' }
          ],
          short: [
            { validator: validateShort, trigger: 'blur' }
          ],
          address: [
            { validator: validateAddress, trigger: 'blur' }
          ],
          organ: [
            { validator: validateOrgan, trigger: 'blur' }
          ],
          word: [
            { validator: validateWord, trigger: 'blur' }
          ],
          validity: [
            { validator: validateValidity, trigger: 'blur' }
          ],
          names: [
            { validator: validateNames, trigger: 'blur' }
          ],
          tel: [
            { validator: validateTel, trigger: 'blur' }
          ],
          aptitude: [
            { validator: validateAptitude, trigger: 'blur' }
          ],
          number: [
            { validator: validateNumber, trigger: 'blur' }
          ],
          attn: [
            { validator: validateAttn, trigger: 'blur' }
          ],
          telsign: [
            { validator: validateTelsign, trigger: 'blur' }
          ],
          mailbox: [
            { validator: validateMailbox, trigger: 'blur' }
          ],


        }
      };
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      }
    }
  }
</script>
<style>
@import '../../../static/css/independent/enter/enter.css';
</style>

