/*
 *  订单列表数据
 * Created by zhen wen on 2017/11/24
 */
import Uilts from '../../uitls'

const state = {
  //全部订单
  serviceOrderListAll:[
    {
      orderId:'order-1',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg',
          name:'公司注册服务',
          price:'599',
          status:'服务中',
          statusId:'2',
          progress:'客服已受理',
          orderTime:'2017-2-6 20:10:23',
          payTime:'2017-5-14 15:27:19',
          finishTime:'2017-10-12 11:00:57',
          amount:'1'
        }
      ]
    },
    {
      orderId:'order-2',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'维权中', statusId:'6', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'已完成', statusId:'1', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-3',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待评价', statusId:'3', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-4',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待评价', statusId:'3', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'服务中', statusId:'2', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-5',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'已评价', statusId:'4', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-6',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待支付', statusId:'5', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-7',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待评价', statusId:'3', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'服务中', statusId:'2', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-8',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'已完成', statusId:'1', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-9',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'已完成', statusId:'1', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-10',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待评价', statusId:'3', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-11',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'服务中', statusId:'2', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-12',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'已评价', statusId:'4', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-13',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待支付', statusId:'5', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-14',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'维权完成', statusId:'7', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    }
  ],
  //待评价订单
  serviceOrderListUncommented:[
    {
      orderId:'order-1',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg',
          name:'公司注册服务',
          price:'599',
          status:'待评价',
          statusId:'3',
          progress:'客服已受理',
          orderTime:'2017-2-6 20:10:23',
          payTime:'2017-5-14 15:27:19',
          finishTime:'2017-10-12 11:00:57',
          amount:'1'
        }
      ]
    },
    {
      orderId:'order-2',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待评价', statusId:'3', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'待评价', statusId:'3', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-3',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待评价', statusId:'3', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    }
  ],
  //服务中订单
  serviceOrderListServicing:[
    {
      orderId:'order-1',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg',
          name:'公司注册服务',
          price:'599',
          status:'服务中',
          statusId:'2',
          progress:'客服已受理',
          orderTime:'2017-2-6 20:10:23',
          payTime:'2017-5-14 15:27:19',
          finishTime:'2017-10-12 11:00:57',
          amount:'1'
        }
      ]
    },
    {
      orderId:'order-2',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'服务中', statusId:'2', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'服务中', statusId:'2', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    },
    {
      orderId:'order-3',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'服务中', statusId:'2', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    }
  ],
  //待支付订单
  serviceOrderListUnpayed:[
    {
      orderId:'order-2',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待付款', statusId:'5', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'待付款', statusId:'5', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'2'
        }
      ]
    },
    {
      orderId:'order-3',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'待付款', statusId:'5', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1'
        }
      ]
    }
  ],
  //维权退款订单
  serviceOrderListRefund:[
    {
      orderId:'order-3',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'维权中', statusId:'6', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1', facilitator:'网联财税'
        }
      ]
    },
    {
      orderId:'order-2',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'维权中', statusId:'6', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1', facilitator:'网联财税'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'维权中', statusId:'6', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'2', facilitator:'网联财税'
        }
      ]
    },
    {
      orderId:'order-2',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'维权中', statusId:'6', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1', facilitator:'网联财税'
        },
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'审计服务', price:'200.98', status:'维权中', statusId:'6', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'2', facilitator:'网联财税'
        }
      ]
    },
    {
      orderId:'order-3',
      orderTime:'2017-5-14 15:27:19',
      list:[
        {
          img:Uilts.publicPath+'static/img/home/home/celebration/celebration1.jpg', name:'公司注册服务', price:'599.01', status:'维权中', statusId:'6', progress:'客服已受理', orderTime:'2017-2-6 20:10:23', payTime:'2017-5-14 15:27:19', finishTime:'2017-1-6 11:00:57', amount:'1', facilitator:'网联财税'
        }
      ]
    }
  ],

  serviceOrderAllListTotalAmount:0,    //全部订单总条数
  serviceOrderUncommentedListTotalAmount:0,    //待评价订单总条数
  serviceOrderServicingListTotalAmount:0,    //服务中订单总条数
  serviceOrderUnpayedListTotalAmount:0,    //待支付订单总条数
  serviceOrderRefundListTotalAmount:0    //维权退款订单总条数

  // serviceOrderAll: [
  //   {
  //     id: '08943432132',
  //     time: '2017年11月24日11:18:51',
  //     list:[
  //       {
  //         img:'../../../static/img/home/footer/barCode_cyck.jpg',
  //         name:'有限公司注册',
  //         price:'990',
  //         status:'待评价',
  //         progress:'已确定完成',
  //         operations:[
  //           {tupe:'1', text:'申请退款'},
  //           {tupe:'2', text:'申请维权'},
  //           {tupe:'3', text:'联系客服'}
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: '08943432132',
  //     time: '2017年11月24日11:18:51',
  //     list:[
  //       {
  //         img:'../../../static/img/home/footer/barCode_cyck.jpg',
  //         name:'有限公司注册',
  //         price:'990',
  //         status:'待评价',
  //         progress:'已确定完成',
  //         operations:[
  //           {tupe:'1', text:'申请退款'},
  //           {tupe:'2', text:'申请维权'},
  //           {tupe:'3', text:'联系客服'}
  //         ]
  //       },
  //       {
  //         img:'../../../static/img/home/footer/barCode_cyck.jpg',
  //         name:'有限公司注册',
  //         price:'990',
  //         status:'待评价',
  //         progress:'已确定完成',
  //         operations:[
  //           {tupe:'1', text:'申请退款'},
  //           {tupe:'2', text:'申请维权'},
  //           {tupe:'3', text:'联系客服'}
  //         ]
  //       }
  //
  //     ]
  //   }
  // ],
}
const mutations={
  //更新全部订单
  updateServiceOrderListAll(state,payload){
    state.serviceOrderListAll=payload
  },
  //更新待评价订单
  updateServiceOrderListUncommented(state,payload){
    state.serviceOrderListUncommented=payload
  },
  //更新服务中订单
  updateServiceOrderListServicing(state,payload){
    state.serviceOrderListServicing=payload
  },
  //更新待支付订单
  updateServiceOrderListUnpayed(state,payload){
    state.serviceOrderListUnpayed=payload
  },
  //更新维权退款订单
  updateServiceOrderListRefund(state,payload){
    state.serviceOrderListRefund=payload
  },


  //更新全部订单总条数
  updateServiceOrderAllListTotalAmount(state,payload){
    state.serviceOrderAllListTotalAmount=payload
  },
  //更新待评价订单总条数
  updateServiceOrderUncommentedListTotalAmount(state,payload){
    state.serviceOrderUncommentedListTotalAmount=payload
  },
  //更新服务中订单总条数
  updateServiceOrderServicingListTotalAmount(state,payload){
    state.serviceOrderServicingListTotalAmount=payload
  },
  //更新待支付订单总条数
  updateServiceOrderUnpayedListTotalAmount(state,payload){
    state.serviceOrderUnpayedListTotalAmount=payload
  },
  //更新维权退款订单总条数
  updateServiceOrderRefundListTotalAmount(state,payload){
    state.serviceOrderRefundListTotalAmount=payload
  }

}
const actions={

}

export default {
  state,
  actions,
  mutations
}
