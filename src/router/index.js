import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  //路由用history模式
  mode: 'history',
  base:'/qijia/',
  routes: [
    {
      path: '/',
      redirect: '/entrance'
    },
    {
      //home头和尾,加载中间部分
      path: '/entrance',
      name: 'homeS',
      component: resolve => require(['../entrance/entrance.vue'], resolve),
      children: [
        {
          path: '',
          redirect: '/entrance/index'
        },
        {
          //主页home
          path: 'index',
          name: 'indexS',
          component: resolve => require(['../components/home/index.vue'], resolve)
        },
        {
          //全部服务
          path: 'facilitator',
          name: 'facilitatorS',
          component: resolve => require(['../components/facilitator/facilitator.vue'], resolve)
        },
        {
          //全部服务详情
          path: 'serviceDetails',
          name: 'serviceDetailS',
          component: resolve => require(['../components/serviceDetails/serviceDetails.vue'], resolve),

        },
        {
          //企加定制
          path: 'service',
          name: 'serviceS',
          component: resolve => require(['../components/service/service.vue'], resolve),

        },
        {
          //众创空间页面
          path: 'wework',
          name: 'weworks',
          component: resolve => require(['../components/wework/wework.vue'], resolve),

        },
        {
          //众创空间详情页面
          path: 'weworkDetails',
          name: 'weworkDetailsS',
          component: resolve => require(['../components/weworkDetails/weworkDetails.vue'], resolve),

        },
        {
          //支付成功页面
          path: 'paySuccess',
          name: 'paySuccessS',
          component: resolve => require(['../components/payment/payment.vue'], resolve),

        },
        {
          //关于我们页面
          path: 'about',
          name: 'aboutS',
          component: resolve => require(['../components/aboutWe/aboutwe.vue'], resolve),

        },
        {
          //招商中心
          path: 'centrum',
          name: 'centrumS',
          component: resolve => require(['../components/centrum/centrum.vue'], resolve),

        },
        {
          //服务商入驻
          path: 'enter',
          name: 'enterS',
          component: resolve => require(['../components/enter/enter.vue'], resolve),

        },
        {
          //载体详情
          path: 'carrierDetails',
          name: 'carrierDetailsS',
          component: resolve => require(['../components/carrierDetails/carrierDetails.vue'], resolve),

        },
        {
          //动态新闻详情
          path: 'trendsNews',
          name: 'trendsNewsS',
          component: resolve => require(['../components/trendsNews/trendsNews.vue'], resolve),

        }
      ]
    },


    //拉开间距分别写，减少冲突
    {
      //个人中心头和尾,加载中间部分
      path: '/entrance/personalCenter',
      name: 'personalCenterS',
      component: resolve => require(['../components/personalCenter/personalCenter.vue'], resolve),
      redirect: '/entrance/personalCenter/userinformation',
      children: [
        {
          path: 'userinformation',
          name: 'userinformation',
          component: resolve => require(['../components/personalCenter/components/userPersonalInformation.vue'], resolve)
        },
        {
          path:'order',
          redirect:'/entrance/personalCenter/order/all'
        },
        {
          path:'order/all',
          name:'allOrders',
          component: resolve => require(['../components/personalCenter/components/serviceOrders/serviceOrderAll.vue'], resolve),
        },
        {
          path:'order/uncommented',
          name:'uncommentedOrders',
          component: resolve => require(['../components/personalCenter/components/serviceOrders/serviceOrderUncommented.vue'], resolve)
        },
        {
          path:'order/servicing',
          name:'servicingOrders',
          component: resolve => require(['../components/personalCenter/components/serviceOrders/serviceOrderServicing.vue'], resolve)
        },
        {
          path:'order/unpayed',
          name:'unpayedOrders',
          component: resolve => require(['../components/personalCenter/components/serviceOrders/serviceOrderUnpayed.vue'], resolve)
        },
        {
          path:'order/safeguard_rights',
          name:'refundOrders',
          component: resolve => require(['../components/personalCenter/components/serviceOrders/serviceOrderRefund.vue'], resolve)
        },

        {
          path: 'accountInformation',
          name: 'accountInformationS',
          component: resolve => require(['../components/personalCenter/components/accountInformation.vue'], resolve)
        },
        {
          path: 'resetPassward',
          name: 'resetPasswardS',
          component: resolve => require(['../components/personalCenter/components/resetPassward.vue'], resolve)
        },
        {
          path: 'shoppingCar',
          name: 'shoppingCarS',
          component: resolve => require(['../components/personalCenter/components/shoppingCar.vue'], resolve)
        },
      ]
    },



    //拉开间距分别写，减少冲突
    //登录注册
    {
      path: '/entrance/login',
      name: 'loginIndex',
      component: resolve => require(['../components/login/loginIndex.vue'], resolve),
      redirect: '/entrance/login/',
      children:[
        {
          path:'/',
          name:'userLogin',
          component: resolve => require(['../components/login/components/login.vue'], resolve)
        },
        {
          path:'/entrance/register',
          name:'userRegister',
          component: resolve => require(['../components/login/components/register.vue'], resolve)
        },
        {
          path:'/entrance/passwordFind',
          name:'userPasswordFind',
          component: resolve => require(['../components/login/components/passwordFind.vue'], resolve),
          alias:'/entrance/password/find'
        }
      ]
    }
  ]
})

export default router

router.afterEach((to,from,next)=>{
    window.scrollTo(0,0)    //路由跳转后新页面滚动到最顶端
})
