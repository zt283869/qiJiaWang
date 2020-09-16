/**
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'
import asideServiceNav from './home/asideServiceNav'  //首页侧边服务导航
import homeServiceSwitch from './home/serviceSwitch'  //首页服务切换
import serviceBlocks from './home/serviceBlocks'  //首页服务不规则区块列表
import personals from './userPersonalCenter/personalhead'  //
import personalCenterAside from './userPersonalCenter/aside'  //个人中心侧边栏
import serviceOrderDialogs from './userPersonalCenter/serviceOrderDialogs'  //个人中心订单列表对话框
import serviceOrderList from './userPersonalCenter/serviceOrderList'  //个人中心侧边栏
import headerNav from './home/headerNav.js'  //首页二级导航
import facilitator from './facilitator/facilitatorStore.js'  //全部服务页面图
import service from './service/serviceStore.js'  //企加定制服务页面图
import wework from './wework/weworkStore.js'  //众创空间列表图
import weworkTitle from './wework/weworkTitle.js'  //众创空间title
import advertising from './home/advertising.js'  //首页广告展示
import carrier from './carrierDetails/carrierDetails.js'  //招商信息


Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    asideServiceNav,   //首页侧边服务导航
    homeServiceSwitch,  //首页服务切换
    serviceBlocks,   //首页服务不规则区块列表
    personals,
    personalCenterAside, //个人中心侧边栏
    serviceOrderDialogs, //个人中心订单列表对话框
    serviceOrderList, //个人中心订单列表
    headerNav,             //首页二级导航
    service,             //全部服务页面图
    facilitator,        //企加定制服务页面图
    wework,          //众创空间列表图
    advertising,     //首页广告展示
    carrier,
    weworkTitle      //众创空间title
  }
})
