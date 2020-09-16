/*
 * 订单列表的对话框状态
 * Created by zhen wen on 2017/11/24
 */
import Uilts from '../../uitls'

const state={
  activeOrderNo:null,  //订单号
  applyToWqDialogConnectionInfo:[
    '企加网售后电话：029-12345678',
    '企加网售后邮箱：customer_service@qijia.com',
    '企加网售后微信号：4893243285'
  ],
  evaluationDialog:{   //立即评价
    visible:false,
    info:{
      orderNumber:'11111111111',
      image:Uilts.publicPath + 'static/img/home/home/celebration/celebration1.jpg',
      serviceName:'测试服务1',
      price:'111',
      place:'一省一市',
      impressionList:[
        {impression:'很好', amount:12},
        {impression:'很棒', amount:123},
        {impression:'还可以', amount:412},
        {impression:'不错', amount:90}
      ]
    }
  },
  evaluationDetailDialog:{   //查看评价
    visible:false,
    info:{
      orderNumber:'11111111111',
      image:Uilts.publicPath + 'static/img/home/home/celebration/celebration1.jpg',
      serviceName:'测试服务1',
      price:'111',
      place:'一省一市',
      impressionList:[
        {impression:'很好', amount:12},
        {impression:'很棒', amount:123},
        {impression:'还可以', amount:412},
        {impression:'不错', amount:90}
      ]
    },
    evaluation:{
      satisfaction:null,
      impressionList:[],
      evaluateContent:''
    }
  },

  applyToWqDialog:{  //申请维权
    visible:false
  },

  confirmDialog:{  //确定完成
    visible:false
  },

  cancelDialog:{  //取消对话框
    visible:false
  },

  wqDetailDialog:{  //维权详情
    visible:false,
    info:{
      reason:'本报北京8月22日电  （记者刘诗瑶）记者从国家海洋局获悉：按照国务院批准同意的《海洋督察方案》，国家海洋局组建了第一批国家海洋督察组，于8月22日先期进驻辽宁、海南，开展以围填海专项督察为重点的海洋督察，重点查摆、解决围填海管理方面存在的“失序、失度、失衡”等问题。',
      attachment:'https://www.baidu.com/link?url=kOl80JLQ822q17OmZkCYsrmilEDtPco9IVCuFOK5RwXLrVSq7jG5eg5IGOaR3A_iIieE-A0KveJSYTx9kozUCPTfHHMdUXNgUbysY9VlY74Cuw0wcn6yGbBSvwKT2FHw&wd=&eqid=bd85a4580003fc440000000359a804a2',
      progress:[
        {time:'2017-7-20', content:' 提交维权请求'},
        {time:'2017-7-21', content:' 平台受理'},
        {time:'2017-7-22', content:'  平台联系客户及服务商'},
      ]
    }
  },

  refundDetailDialog:{ //退款详情
    visible:false,
    info:{
      reason:'退款详情：按照国务院批准同意的《海洋督察方案》，国家海洋局组建了第一批国家海洋督察组，于8月22日先期进驻辽宁、海南，开展以围填海专项督察为重点的海洋督察，重点查摆、解决围填海管理方面存在的“失序、失度、失衡”等问题。',
      attachment:'https://www.baidu.com/link?url=kOl80JLQ822q17OmZkCYsrmilEDtPco9IVCuFOK5RwXLrVSq7jG5eg5IGOaR3A_iIieE-A0KveJSYTx9kozUCPTfHHMdUXNgUbysY9VlY74Cuw0wcn6yGbBSvwKT2FHw&wd=&eqid=bd85a4580003fc440000000359a804a2',
      progress:[
        {time:'2017-7-20', content:' 退款提交请求'},
        {time:'2017-7-21', content:' 平台受理'},
        {time:'2017-7-22', content:'  平台联系客户及服务商'},
      ]
    }
  }
}
const actions={

}
const mutations={
  //点击订单任意按钮，该订单号更新为当前订单号
  updateActiveOrderNo(state,payload){
    state.activeOrderNo=payload
  },
  //更新立即评价对话框显示状态
  updateOrderEvaluationDialog(state,payload){
    state.evaluationDialog.visible=payload
  },

  //更新立即评价对话框显示状态
  updateOrderEvaluationDetailDialogVisible(state,payload){
    state.evaluationDetailDialog.visible=payload
  },
  //更新立即评价对话框评价相关内容
  updateOrderEvaluationDetailDialog(state,payload){
    state.evaluationDetailDialog.evaluation=payload
  },


  //更新申请维权对话框显示状态
  updateOrderApplyToWqDialog(state,payload){
    state.applyToWqDialog.visible=payload
  },

  //更新确定完成对话框显示状态
  updateOrderConfirmDialog(state,payload){
    state.confirmDialog.visible=payload
  },

  //更新取消订单对话框显示状态
  updateOrderCancelDialogVisible(state,payload){
    state.cancelDialog.visible=payload
  },

  //更新确定完成对话框显示状态
  updateOrderWqDetailDialogVisible(state,payload){
    state.wqDetailDialog.visible=payload
  },
  //更新确定完成对话框显示信息
  updateOrderWqDetailDialogInfo(state,payload){
    state.wqDetailDialog.info=payload
  },

  //更新退款详情对话框显示状态
  updateOrderRefundDetailDialogVisible(state,payload){
    state.refundDetailDialog.visible=payload
  },
  //更新退款详情对话框显示信息
  updateOrderRefundDetailDialogInfo(state,payload){
    state.refundDetailDialog.info=payload
  }
}

export default{
  state,
  actions,
  mutations
}

