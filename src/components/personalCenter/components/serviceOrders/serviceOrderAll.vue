<template>
  <div class="personal-center-main">
    <publicTabHeader :tagName="tagName"></publicTabHeader>
    <div class="service-order-table-wrapper">
      <div class="table-header table">
        <div class="tr">
          <div class="th">共{{serviceOrderListTotalAmount}}个订单</div>
          <div class="th" v-for="item in listHeaderItems" v-text="item"></div>
          <div class="th">操作</div>
        </div>
      </div>
      <template v-for="item in serviceOrderList">
        <div class="order-list-item hover-border-highlight">
            <div class="order-info ">
              订单号：<span class="order-number">{{item.orderId}}</span>
              <span class="order-time">下单时间：{{item.orderTime}}</span>
              <span>合计金额：{{item.list[0].price}}</span>
            </div>
          <div class="table">
            <template v-for="(subItem,subIndex) in item.list">
              <div class="tr">
                <div class="td" ><img :src="subItem.img" class="service-img" :alt="subItem.name"></div>
                <div class="td">{{subItem.name}}</div>
                <div class="td">{{subItem.price}}</div>
                <div class="td">{{subItem.payTime || '——'}}</div>
                <div class="td">{{subItem.status}}</div>
                <div class="td">{{subItem.progress}}</div>
                <div class="td operations">
                  <template v-for="(operation,operationIndex) in operations[subItem.statusId]">
                    <template v-if="operationIndex==0">
                      <el-button v-if="operation.type=='highlight'" class="red" @click="operation.handler(item.orderId)">{{operation.name}}</el-button>
                      <el-button v-else @click="operation.handler(item.orderId)">{{operation.name}}</el-button>
                    </template>
                    <p v-else class="operation">
                      <a href="javascript:;" @click="operation.handler(item.orderId)">{{operation.name}}</a>
                    </p>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
    <!--分页-->
    <pagination></pagination>

    <!--立即评价对话框-->
    <evaluateDialog></evaluateDialog>
    <!--申请维权对话框-->
    <applyToWqDialog></applyToWqDialog>
    <!--确定完成对话框-->
    <confirmDialog></confirmDialog>
    <!--取消订单对话框-->
    <cancelDialog></cancelDialog>
    <!--维权详情对话框-->
    <wqDetailDialog></wqDetailDialog>
    <!--查看评价对话框-->
    <evaluateDetailDialog></evaluateDetailDialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  import publicTabHeader from '../publicTabHeader.vue';  //公共标签
  import publicOrderListHeader from '../publicOrderListHeader.vue'; //订单列表公共表头
  import evaluateDialog from '../publicDialogs/evaluateDialog.vue'; //立即评价对话框
  import applyToWqDialog from '../publicDialogs/applyToWqDialog.vue'; //申请维权对话框
  import wqDetailDialog from '../publicDialogs/wqDetailDialog.vue'; //维权详情对话框
  import confirmDialog from '../publicDialogs/confirmDialog.vue'; //确定完成对话框
  import cancelDialog from '../publicDialogs/cancelDialog.vue'; //取消订单对话框
  import evaluateDetailDialog from '../publicDialogs/evaluateDetailDialog.vue'; //确定完成对话框

  import pagination from '../../../public/paging.vue'; //确定完成对话框

  export default {
    data() {
      return {
        tagName: '全部订单',
        listHeaderItems:['服务名称','单价','支付时间','订单状态','服务进度']
      }
    },
    created(){
//      this.getServiceOrderList_All()
    },
    computed:{
      ...mapState({
        serviceOrderListTotalAmount: state => state.serviceOrderList.serviceOrderAllListTotalAmount,
        serviceOrderList: state => state.serviceOrderList.serviceOrderListAll
      }),

      operations(){
        var _this=this
        var arr=[]
        arr['1']=[      //finished已完成
          {name:'立即评价', handler:function(orderId){ _this.showEvaluationDialog(orderId) } },
          {name:'再次购买?', handler:function(orderId){alert('再次购买 暂未提供效果图')} },
          {name:'申请维权', handler:function(orderId){ _this.showApplyToWqDialog(orderId) } }
        ]
        arr['2']=[      //servicing服务中
//          {name:'联系客服?', handler:function(orderId){alert('联系客服 暂未启用')} },
          {name:'确定完成',handler:function(orderId){ _this.showConfirmDialog(orderId) }},
          {name:'申请维权', handler:function(orderId){ _this.showApplyToWqDialog(orderId) } }
        ]
        arr['3']=[      //unevaluated待评价
          {name:'立即评价', handler:function(orderId){ _this.showEvaluationDialog(orderId) } },
          {name:'再次购买?', handler:function(orderId){alert('需要链接到服务详情')} }
        ]
        arr['4']=[      //evaluated已评价
          {name:'查看评价', handler:function(orderId){ _this.showEvaluationDetailDialog(orderId) } },
          {name:'再次购买?', handler:function(orderId){alert('需要链接到服务详情')} }
        ]
        arr['5']=[      //unpayed待支付
          {name:'去支付?', handler:function(orderId){alert('去支付 需要链接到支付页面')}, type:'highlight'},
          {name:'取消订单', handler:function(orderId){ _this.showCancelDialog(orderId) } }
        ]
        arr['6']=[      //refund维权中
          {name:'查看详情', handler:function(orderId){ _this.showWqDetailDialog(orderId) } }
        ]
        arr['7']=[      //refund维权完成
          {name:'查看详情', handler:function(orderId){ _this.showWqDetailDialog(orderId) } },
        ]
        return arr
      }
    },
    methods:{
      //立即评价对话框相关方法
      showEvaluationDialog(orderId){
        this.$store.commit('updateActiveOrderNo',orderId)   //更新点击订单的订单号
        this.$store.commit('updateOrderEvaluationDialog',true)  //显示对话框

        console.log(orderId)
      },

      //查看评价对话框相关方法
      showEvaluationDetailDialog(orderId){
        this.$store.commit('updateActiveOrderNo',orderId)   //更新点击订单的订单号
        this.getOrderEvaluationDetail(orderId)  //请求接口获取数据
        this.$store.commit('updateOrderEvaluationDetailDialogVisible',true)  //显示对话框

        console.log(orderId)
      },

      //申请维权对话框相关方法
      showApplyToWqDialog(orderId){
        this.$store.commit('updateActiveOrderNo',orderId)   //更新点击订单的订单号
        this.$store.commit('updateOrderApplyToWqDialog',true)  //显示对话框

        console.log(orderId)
      },

      //确定完成对话框相关方法
      showConfirmDialog(orderId){
        this.$store.commit('updateActiveOrderNo',orderId)   //更新点击订单的订单号
        this.$store.commit('updateOrderConfirmDialog',true)  //显示对话框

        console.log(orderId)
      },

      //取消订单对话框相关方法
      showCancelDialog(orderId){
        this.$store.commit('updateActiveOrderNo',orderId)   //更新点击订单的订单号
        this.$store.commit('updateOrderCancelDialogVisible',true)  //显示对话框

        console.log(orderId)
      },

      //维权详情对话框相关方法
      showWqDetailDialog(orderId){
        this.$store.commit('updateActiveOrderNo',orderId)   //更新点击订单的订单号
        this.getOrderWqDetailDialogInfo(orderId)  //请求接口获取数据
        this.$store.commit('updateOrderWqDetailDialogVisible',true)  //显示对话框

        console.log(orderId)
      },

    },
    components: {
      publicTabHeader,
      publicOrderListHeader,
      evaluateDialog,
      applyToWqDialog,
      confirmDialog,
      cancelDialog,
      wqDetailDialog,
      evaluateDetailDialog,
      pagination
    }
  }
</script>

<style scoped>
  @import "../../../../../static/css/independent/personalCenter/userPersonalInformation.css";
  @import "../../../../../static/css/independent/personalCenter/serviceOrder.css";
  .personal-center-main{
    width:930px;
    background-color: #FFF;
  }
  .th,
  .td{
    width:calc((900px - 151px) / 6);
  }
</style>
