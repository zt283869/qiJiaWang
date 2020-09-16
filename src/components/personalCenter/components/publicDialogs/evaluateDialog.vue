<template>
  <div>
    <el-dialog title="服务评价" :visible.sync="evaluationDialogVisible" class="" size="evaluate user-service-order-dialog user-service-order-dialog1">
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
            <el-form name="evaluateForm" id="evaluateForm" :model="ruleForm" :rules="rules" ref="ruleForm">
              <fieldset>
                <section class="form-item-satisfaction">
                  <h6>服务满意度</h6>
                  <el-form-item label="" prop="evaluateSatisfactionRadio">
                    <el-radio-group v-model="ruleForm.evaluateSatisfactionRadio">
                      <el-radio class="radio" name="satisfaction" label="好评"></el-radio>
                      <el-radio class="radio" name="satisfaction" label="中评"></el-radio>
                      <el-radio class="radio" name="satisfaction" label="差评"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </section>
                <section class="form-item-impressions">
                  <h6>服务印象</h6>
                  <el-form-item label="" prop="evaluateImpressionsCheckbox">
                    <el-checkbox-group v-model="ruleForm.impressionList" class="input-group" id="impressionsCheckboxList">
                      <el-checkbox-button
                        v-for="item in evaluationInfo.impressionList"
                        :label="item.impression"
                        :key="item.impression" :name="item.impression">
                        {{item.impression}}({{item.amount}})
                      </el-checkbox-button>
                      <!--<a href="" @click.prevent="impressionsAddInputShow=true" v-show="!impressionsAddInputShow"-->
                      <!--id="impressionsAddIcon" class="impressionsAddIcon" title="添加新印象">+</a>-->
                      <!--<input class="el-input__inner" @keyup.enter.trim.prevent="impressionsAdd"-->
                      <!--@blur="impressionsAddInputShow=false" v-show="impressionsAddInputShow"-->
                      <!--id="impressionsAddInput" autofocus="true" autocomplete="off"-->
                      <!--placeholder="添加新印象,按回车键生效"></input>-->
                    </el-checkbox-group>
                  </el-form-item>
                  <h6>我的评价：</h6>
                  <el-form-item label="" prop="evaluateContentTextarea">
                    <el-input type="textarea" v-model="ruleForm.evaluateContentTextarea"></el-input>
                  </el-form-item>
                </section>
              </fieldset>
            </el-form>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitDialogEvaluate('ruleForm',$event)">提交</el-button>
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
        },
        rules: {
          evaluateSatisfactionRadio: [
            {required: true, message: '请选择满意度', trigger: 'blur'}
          ]
        }
      }
    },
    created(){
    },
    computed: {
      ...mapState({
        activeOrderNo: state => state.serviceOrderDialogs.activeOrderNo,  //当前订单号
        evaluationInfo: state => state.serviceOrderDialogs.evaluationDialog.info  //评价对话框的展示性信息
      }),
      evaluationDialogVisible:{
        get(){
          this.resetForm()  //显示对话框时重置表单
          return this.$store.state.serviceOrderDialogs.evaluationDialog.visible  //获取对话框显示与隐藏状态
        },
        set(val){
          this.$store.commit('updateOrderEvaluationDialog',val) //更新对话框显示与隐藏状态
        }
      }
    },
    methods:{
      submitDialogEvaluate(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.evaluationDialogVisible=false

            console.log(this.ruleForm.evaluateContentTextarea); //服务满意度
            console.log(this.ruleForm.evaluateSatisfactionRadio); //服务印象
            console.log(this.ruleForm.impressionList); //我的评价

            console.log('订单号:'+this.activeOrderNo) //根据订单号发送表单数据

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
