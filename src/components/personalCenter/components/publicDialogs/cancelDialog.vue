<template>
  <div>
    <el-dialog title="提示" :visible.sync="visible" class=""
               size="confirm user-service-order-dialog">
      <div>
        <p>确定取消该服务吗？</p>
      </div>
      <div slot="footer" class="dialog-footer single-border">
        <el-button @click="cancel">我再想想</el-button>
        <el-button type="primary" @click="eventConfirm">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        activeOrderNo: state => state.serviceOrderDialogs.activeOrderNo,  //当前订单号
      }),
      visible:{
        get(){
          return this.$store.state.serviceOrderDialogs.cancelDialog.visible  //获取对话框显示与隐藏状态
        },
        set(val){
          this.$store.commit('updateOrderCancelDialogVisible',val) //更新对话框显示与隐藏状态
        }
      }
    },
    methods:{
      eventConfirm(formName){
        this.visible=false  //隐藏对话框
        console.log('订单号:'+this.activeOrderNo) //根据订单号发送表单数据

      },
      cancel(){
        this.visible=false  //隐藏对话框
      }
    }
  }
</script>

<style scoped>
  @import '../../../../../static/css/independent/personalCenter/publicDialogs.css';

</style>
