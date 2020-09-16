// 服务订单相关 Created by zhen wen 2017-11-26
exports.install=function(Vue,options){
  //获取全部订单列表
  Vue.prototype.getServiceOrderList_All=function(){
    //访问接口获取订单列表
    // this.$http.get()

    this.$store.commit('updateServiceOrderAllListTotalAmount', 15)  //更新数据库中相应结果总条数

    //用返回结果更新vuex数据
    this.$store.commit('updateServiceOrderListAll',[])
  }


  //获取待评价订单列表
  Vue.prototype.getServiceOrderList_Uncommented=function(){
    //访问接口获取订单列表
    // this.$http.get()

    this.$store.commit('updateServiceOrderUncommentedListTotalAmount', 3)  //更新数据库中相应结果总条数
    this.$store.commit('updateServiceOrderListUncommented',[]) //更新vuex
  }

  //获取服务中订单列表
  Vue.prototype.getServiceOrderList_Servicing=function(){
    //访问接口获取订单列表
    // this.$http.get()

    this.$store.commit('updateServiceOrderServicingListTotalAmount', 3)  //更新数据库中相应结果总条数
    this.$store.commit('updateServiceOrderListServicing',[])  //更新vuex
  }

  //获取待付款订单列表
  Vue.prototype.getServiceOrderList_Unpayed=function(){
    //访问接口获取订单列表
    // this.$http.get()

    this.$store.commit('updateServiceOrderUnpayedListTotalAmount', 2)  //更新数据库中相应结果总条数
    // this.$store.commit('updateServiceOrderListUnpayed',[])  //更新vuex
  }

  //获取维权订单列表
  Vue.prototype.getServiceOrderList_Refund=function(){
    //访问接口获取订单列表
    // this.$http.get()

    this.$store.commit('updateServiceOrderRefundListTotalAmount', 4)  //更新数据库中相应结果总条数
    this.$store.commit('updateServiceOrderListRefund',[])
  }

  //维权详情
  Vue.prototype.getOrderWqDetailDialogInfo=function(orderId){
    //根据orderId请求后端，返回后更新vuex相关数据
    this.$store.commit('updateOrderWqDetailDialogInfo',
      {reason:'订单号:'+orderId+'的维权详情更新:按照国务院批准同意的《海洋督察方案》，国家海洋局组建了第一批国家海洋督察组，于8月22日先期进驻辽宁、海南，开展以围填海专项督察为重点的海洋督察，重点查摆、解决围填海管理方面存在的“失序、失度、失衡”等问题。',
        attachment:'https://www.baidu.com/link?url=kOl80JLQ822q17OmZkCYsrmilEDtPco9IVCuFOK5RwXLrVSq7jG5eg5IGOaR3A_iIieE-A0KveJSYTx9kozUCPTfHHMdUXNgUbysY9VlY74Cuw0wcn6yGbBSvwKT2FHw&wd=&eqid=bd85a4580003fc440000000359a804a2',
        progress:[
          {time:'2017-7-20', content:' 提交维权请求'},
          {time:'2017-7-21', content:' 平台受理'},
          {time:'2017-7-22', content:'  平台联系客户及服务商'},
          {time:'2017-7-22', content:'  平台联系客户及服务商'},
          {time:'2017-7-22', content:'  平台联系客户及服务商'},
          {time:'2017-7-22', content:'  平台联系客户及服务商'}
        ]
      }
    )
  }

  //查看我对某个订单的评价
  Vue.prototype.getOrderEvaluationDetail=function(orderId){
    //访问接口获取评价
    // this.$http.get()
    //根据orderId请求后端，返回后更新vuex相关数据
    this.$store.commit('updateOrderEvaluationDetailDialog',{
        satisfaction:'中评',
        impressionList:['棒棒哒','服务好'],
        evaluateContent:'服务好，收费不高，下次还来'
      })
  }
}
