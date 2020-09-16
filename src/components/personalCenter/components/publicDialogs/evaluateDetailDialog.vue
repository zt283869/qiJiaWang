<template>
  <div>
    <el-dialog title="服务评价" :visible.sync="evaluationDetailDialogVisible" class="" size="evaluate user-service-order-dialog user-service-order-dialog1">
        <div>
          <p class="order-number">订单号<span>{{activeOrderNo}}</span></p>
          <div class="flex">
            <div>
              <figure>
                <span class="img-link dis-b"><img :src="evaluationInfo.image" :alt="evaluationInfo.serviceName"></span>
                <figcaption>
                  <strong>{{evaluationInfo.serviceName}}</strong>
                  <span class="fr">{{evaluationInfo.price}}元</span>
                  <p>{{evaluationInfo.place}}</p>
                </figcaption>
              </figure>
            </div>
            <el-form name="evaluateForm" id="evaluateForm" :model="ruleForm" ref="ruleForm">
              <fieldset>
                <section class="form-item-satisfaction">
                  <h6>服务满意度</h6>
                  <el-form-item label="">
                    <el-radio-group v-model="evaluation.satisfaction">
                      <el-radio disabled class="radio" name="satisfaction" label="好评"></el-radio>
                      <el-radio disabled class="radio" name="satisfaction" label="中评"></el-radio>
                      <el-radio disabled class="radio" name="satisfaction" label="差评"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </section>
                <section class="form-item-impressions">
                  <h6>服务印象</h6>
                  <el-form-item label="">
                    <el-checkbox-group disabled class="input-group" id="impressionsCheckboxList">
                      <el-checkbox-button v-for="item in evaluation.impressionList" :label="item"></el-checkbox-button>
                    </el-checkbox-group>
                  </el-form-item>
                  <h6>我的评价：</h6>
                  <el-form-item label="">
                    <el-input disabled type="textarea" v-model="evaluation.evaluateContent"></el-input>
                  </el-form-item>
                </section>
              </fieldset>
            </el-form>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submit('ruleForm',$event)">关闭</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        ruleForm:{
          evaluateSatisfactionRadio:null,
          impressionList:[],
          evaluateContentTextarea:''
        }
      }
    },
    created(){
    },
    computed: {
      ...mapState({
        activeOrderNo: state => state.serviceOrderDialogs.activeOrderNo,  //当前订单号
        evaluationInfo: state => state.serviceOrderDialogs.evaluationDetailDialog.info,  //评价对话框的展示性信息
        evaluation: state => state.serviceOrderDialogs.evaluationDetailDialog.evaluation  //评价对话框的评价相关内容
      }),
      evaluationDetailDialogVisible:{
        get(){
          this.resetForm()  //显示对话框时重置表单
          return this.$store.state.serviceOrderDialogs.evaluationDetailDialog.visible  //获取对话框显示与隐藏状态
        },
        set(val){
          this.$store.commit('updateOrderEvaluationDetailDialogVisible',val) //更新对话框显示与隐藏状态
        }
      }
    },
    methods:{
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.commit('updateOrderEvaluationDetailDialogVisible',false) //隐藏
            this.resetForm()  //重置表单
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(){
        this.ruleForm.evaluateContentTextarea =''
        this.ruleForm.evaluateSatisfactionRadio =null
        this.ruleForm.impressionList =[]
      }
    }
  }
</script>

<style scoped>
  @import '../../../../../static/css/independent/personalCenter/publicDialogs.css';

</style>
