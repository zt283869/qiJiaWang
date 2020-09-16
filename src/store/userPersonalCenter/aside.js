/*
 * 个人中心侧边栏模块数据 Created by zhenwen on 2017-11-22
*/
import Uilts from '../../uitls'

const state = {
  personalInfo: {
    avatar: Uilts.publicPath + 'static/img/home/personalCenter/userDefaultAvatar.png',
    name: '大号青年'
  },
  nav:[
    {
      name:'服务订单',
      icon:'icon-file',
      id:'1',
      subNav:[
        {name:'全部订单', path:'/entrance/personalCenter/order/all', link:'allOrders'},
        {name:'待评价订单', path:'/entrance/personalCenter/order/uncommented', link:'uncommentedOrders'},
        {name:'服务中订单', path:'/entrance/personalCenter/order/servicing', link:'servicingOrders'},
        {name:'待付款订单', path:'/entrance/personalCenter/order/unpayed', link:'unpayedOrders'},
        {name:'维权和退款订单', path:'/entrance/personalCenter/order/safeguard_rights', link:'refundOrders'}
      ]
    },
    {
      name:'购物车',
      path:'/entrance/personalCenter/shoppingCar',
      icon:'icon-cart',
      id:'2',
      link:'shoppingCarS'
    },
    // {
    //   name:'我的优惠券',
    //   path:'3',
    //   icon:'icon-coupon',
    //   link:''
    // },
    {
      name:'设置',
      icon:'icon-shezhi',
      id:'3',
      subNav:[
        {name:'账号信息', path:'/entrance/personalCenter/accountInformation', link:'accountInformationS'},
        {name:'个人资料', path:'/entrance/personalCenter/userinformation', link:'userinformation'}
      ]
    }
  ]
}

const mutations = {}

const actions = {}

export default {
  state,
  mutations,
  actions
}
