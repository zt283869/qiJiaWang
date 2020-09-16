<template>
  <div>
    <el-dialog title="维权详情" :visible.sync="wqDetailDialog.visible"
               size="applyToWq user-service-order-dialog user-service-order-dialog2 user-service-order-dialog4">
      <p class="dialog-title text-align-c">维权详情</p>
      <div class="detail-warp">
        <div class="reason-wrapper ">
          <div class="clearfix">
            <div class="text-align-r fl">订单号</div>
            <div class="fl">{{activeOrderNo}}</div>
          </div>
          <div class="clearfix">
            <div class="fl text-align-r">申请原因</div>
            <div class="fl">
              <p class="detail" v-text="wqDetailDialog.info.reason"></p>
              <p class="attachment-wrapper">
                <a :href="wqDetailDialog.info.attachment"
                   target="_blank" class="attachment attachment-download iconfont icon-download">
                  <el-button type="default">
                  <svg class="icon" width="15px" height="15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M952.896 952.896 71.104 952.896 16 952.896l0-55.104L16 622.224l55.104 0 0 275.552 881.776 0L952.88 622.224 1008 622.224l0 275.552 0 55.104L952.896 952.88zM512 732.448 512 732.448l-27.552-16.144L244.512 476.368l38.976-38.976 200.96 200.96L484.448 71.104l55.104 0 0 567.248 200.96-200.96 38.976 38.976L539.552 716.304 512 732.448z" /></svg>
                  下载附件
                  </el-button>
                </a>
              </p>
            </div>
          </div>
          <div class="single-border"></div>
          <div class="progress clearfix">
            <div class=" text-align-r fl">维权进度</div>
            <ul class="progress fl">
              <li v-for="item in wqDetailDialog.info.progress">
                <span>{{item.time}}</span>
                <span>{{item.content}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="default" class="service-order-button" @click="eventConfirm">关闭</el-button>
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
    created() {
    },
    computed: {
      ...mapState({
        activeOrderNo: state => state.serviceOrderDialogs.activeOrderNo,  //当前订单号
      }),
      wqDetailDialog: {
        get() {
          return this.$store.state.serviceOrderDialogs.wqDetailDialog  //获取对话框显示与隐藏状态
        },
        set(val) {
          this.$store.commit('updateOrderWqDetailDialogVisible', val) //更新对话框显示与隐藏状态
        }
      }
    },
    methods: {
      eventConfirm(orderId){
        this.wqDetailDialog.visible=false  //隐藏对话框
      }
    }
  }
</script>

<style scoped>
  @import '../../../../../static/css/independent/personalCenter/publicDialogs.css';

</style>
