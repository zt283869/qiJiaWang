<template>
  <div>
    <el-dialog title="申请维权" :visible.sync="applyToWqDialogVisible"
               size="applyToWq user-service-order-dialog user-service-order-dialog2 user-service-order-dialog4">
      <el-form name="applyToWqForm" :model="ruleForm" :rules="rules" ref="ruleForm">
        <p class="dialog-title text-align-c">申请维权</p>
        <fieldset>
          <div class="detail-warp">
            <div class="reason-wrapper table">
              <div class="clearfix">
                <div class="td text-align-r">订单号</div>
                <div class="td">{{activeOrderNo}}</div>
              </div>
              <div class="clearfix">
                <div class="fl text-align-r">申请原因</div>
                <div class="fl">
                    <el-form-item prop="reasonForApplyToWq">
                      <el-input type="textarea" v-model="ruleForm.reasonForApplyToWq"></el-input>
                    </el-form-item>
                    <el-form-item v-model="ruleForm.fileOfApplyToWq">
                      <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :before-upload="beforeApplyToWqFileUpload">
                        <el-button size="small" class="attachment attachment-upload iconfont icon-upload">
                          <svg class="icon upload" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M210.71872 675.75808c-11.32544 0-20.48 9.17504-20.48 20.48l0 125.60384c0 11.30496 9.15456 20.48 20.48 20.48l573.44 0c11.32544 0 20.48-9.17504 20.48-20.48l0-125.60384c0-11.30496-9.15456-20.48-20.48-20.48s-20.48 9.17504-20.48 20.48l0 105.12384-532.48 0 0-105.12384C231.19872 684.93312 222.04416 675.75808 210.71872 675.75808zM498.33984 716.71808c11.32544 0 20.48-9.17504 20.48-20.48l0-440.5248 129.90464 125.48096c3.95264 3.85024 9.09312 5.75488 14.21312 5.75488 5.36576 0 10.71104-2.08896 14.72512-6.2464 7.86432-8.13056 7.63904-21.0944-0.49152-28.95872l-164.31104-158.74048c-0.02048-0.02048-0.02048-0.02048-0.04096-0.04096L512.55296 192.7168c-0.73728-0.7168-1.65888-1.024-2.4576-1.59744-1.31072-0.94208-2.51904-1.98656-4.01408-2.60096-2.33472-0.96256-4.8128-1.41312-7.31136-1.47456-0.14336 0-0.28672-0.08192-0.43008-0.08192s-0.28672 0.08192-0.43008 0.08192c-2.49856 0.06144-4.95616 0.512-7.31136 1.47456-1.49504 0.6144-2.70336 1.65888-4.01408 2.58048C485.7856 191.6928 484.864 192 484.12672 192.7168l-0.24576 0.22528c-0.02048 0.02048-0.02048 0.02048-0.04096 0.04096l-164.31104 158.74048c-8.13056 7.86432-8.35584 20.82816-0.49152 28.95872 7.82336 8.13056 20.84864 8.37632 28.93824 0.49152l129.90464-125.48096 0 440.5248C477.85984 707.54304 487.0144 716.71808 498.33984 716.71808z" /></svg>
                          上传文件
                        </el-button>
                        <div slot="tip" class="el-upload__tip">文件大小不能超过2MB</div>
                      </el-upload>
                    </el-form-item>
                </div>
              </div>
            </div>
          <div class="text-align-r">
            <el-button type="primary" @click="submitDialogApplyToWq('ruleForm',$event)">发送</el-button>
          </div>
          </div>
          <div class="single-border"></div>
          <div slot="footer" class="dialog-footer">
            <div class="dialog-footer-info">
              <p v-for="item in applyToWqDialogConnectionInfo">{{item}}</p>
            </div>
          </div>
        </fieldset>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      var validateBlank = (rule, value, callback) => {
        if(!/\S+/.test(value)){
          callback(new Error())
        } else {
          callback()
        }
      }
      return {
        ruleForm:{
          reasonForApplyToWq:'',
          fileOfApplyToWq:''
        },
        rules: {
          reasonForApplyToWq:[
            {required: true, validator:validateBlank, message: '请填写申请原因', trigger: 'blur'}
          ]
        }
      }
    },
    created(){
    },
    computed: {
      ...mapState({
        activeOrderNo: state => state.serviceOrderDialogs.activeOrderNo,  //当前订单号
        applyToWqDialogConnectionInfo: state => state.serviceOrderDialogs.applyToWqDialogConnectionInfo,  //申请维权联系方式
      }),
      applyToWqDialogVisible:{
        get(){
          this.resetForm()  //显示对话框时重置表单
          return this.$store.state.serviceOrderDialogs.applyToWqDialog.visible  //获取对话框显示与隐藏状态
        },
        set(val){
          this.$store.commit('updateOrderApplyToWqDialog',val) //更新对话框显示与隐藏状态
        }
      }
    },
    methods:{
      submitDialogApplyToWq(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.applyToWqDialogVisible=false

            //发送表单数据
            console.log(this.ruleForm.reasonForApplyToWq)
            console.log(this.ruleForm.fileOfApplyToWq)
            console.log('订单号:'+this.activeOrderNo) //根据订单号发送表单数据


            this.resetForm()  //重置表单
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //    申请维权弹窗上传文件 按钮 点击回调
      beforeApplyToWqFileUpload: function (file) {
        const isFileTypeOk = (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        const isLt = file.size / 1024 / 1024 < 2

        if (!isFileTypeOk) {
          this.$message.error('只能是 doc、docx 格式!1')
        }
        if (!isLt) {
          this.$message.error('大小不能超过 2MB!')
        }
//        return isFileTypeOk && isLt2M
        return isLt
      },
      resetForm(){
        this.ruleForm.reasonForApplyToWq =''
      }
    }
  }
</script>

<style scoped>
  @import '../../../../../static/css/independent/personalCenter/publicDialogs.css';

</style>
