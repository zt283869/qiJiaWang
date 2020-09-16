/*
 * 首页服务切换模块数据 Created by zhenwen on 2017-11-15
*/
import Uilts from '../../uitls'

const state={
  switchList:[
    {
      name:'传统企业',
      subList:[
        {title:'一般纳税人申请', subTitle:'繁琐手续，交给我们搞定', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'出纳外包', subTitle:'严谨、规范，解决才问难题', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'高新企业认定', subTitle:'轻松认定，享受国家扶持政策', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'代理记账', subTitle:'资深财务让您省时省心', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'合同文书', subTitle:'专业合同，免费现在', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'}
      ]
    },
    {
      name:'电商企业',
      subList:[
        {title:'电商企业服务1', subTitle:'电商企业服务一句话简介1', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'电商企业服务2', subTitle:'电商企业服务一句话简介2', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'电商企业服务3', subTitle:'电商企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'电商企业服务3', subTitle:'电商企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'电商企业服务4', subTitle:'电商企业服务一句话简介4', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'电商企业服务5', subTitle:'电商企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'}
      ]
    },
    {
      name:'互联网企业',
      subList:[
        {title:'互联网企业服务1', subTitle:'互联网企业服务一句话简介1', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'互联网企业服务2', subTitle:'互联网企业服务一句话简介2', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'互联网企业服务3', subTitle:'互联网企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'互联网企业服务4', subTitle:'互联网企业服务一句话简介4', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'},
        {title:'互联网企业服务5', subTitle:'互联网企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'互联网企业服务5', subTitle:'互联网企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'互联网企业服务5', subTitle:'互联网企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'}
      ]
    },
    {
      name:'餐饮企业',
      subList:[
        {title:'餐饮企业服务1', subTitle:'餐饮企业服务一句话简介1', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'餐饮企业服务2', subTitle:'餐饮企业服务一句话简介2', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'},
        {title:'餐饮企业服务3', subTitle:'餐饮企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'餐饮企业服务4', subTitle:'餐饮企业服务一句话简介4', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'餐饮企业服务5', subTitle:'餐饮企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'}
      ]
    },
    {
      name:'商贸企业',
      subList:[
        {title:'商贸企业服务1', subTitle:'商贸企业服务一句话简介1', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'商贸企业服务2', subTitle:'商贸企业服务一句话简介2', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'商贸企业服务3', subTitle:'商贸企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'商贸企业服务4', subTitle:'商贸企业服务一句话简介4', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'},
        {title:'商贸企业服务5', subTitle:'商贸企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'商贸企业服务5', subTitle:'商贸企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'}
      ]
    },
    {
      name:'金融企业',
      subList:[
        {title:'金融企业服务1', subTitle:'金融企业服务一句话简介1', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'金融企业服务2', subTitle:'金融企业服务一句话简介2', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'金融企业服务3', subTitle:'金融企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'},
        {title:'金融企业服务4', subTitle:'金融企业服务一句话简介4', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'金融企业服务5', subTitle:'金融企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'}
      ]
    },
    {
      name:'自贸区企业',
      subList:[
        {title:'自贸区企业服务1', subTitle:'自贸区企业服务一句话简介1', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'自贸区企业服务2', subTitle:'自贸区企业服务一句话简介2', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'},
        {title:'自贸区企业服务3', subTitle:'自贸区企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'自贸区企业服务4', subTitle:'自贸区企业服务一句话简介4', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'自贸区企业服务5', subTitle:'自贸区企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'自贸区企业服务5', subTitle:'自贸区企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'}
      ]
    },
    {
      name:'游戏企业',
      subList:[
        {title:'游戏企业服务1', subTitle:'游戏企业服务一句话简介1', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-1.png'},
        {title:'游戏企业服务2', subTitle:'游戏企业服务一句话简介2', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'游戏企业服务3', subTitle:'游戏企业服务一句话简介3', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'},
        {title:'游戏企业服务4', subTitle:'游戏企业服务一句话简介4', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-4.png'},
        {title:'游戏企业服务5', subTitle:'游戏企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-5.png'},
        {title:'游戏企业服务5', subTitle:'游戏企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-2.png'},
        {title:'游戏企业服务5', subTitle:'游戏企业服务一句话简介5', link:'javascript:void(0);', icon:Uilts.publicPath + 'static/img/home/home/serviceSwitch/home-service-switch-item1-3.png'}
      ]
    }
  ],
  subList:[],
  activeIndex:null
}

const mutations={
  updateHomeSwitchSubList(state,index){
    state.subList=state.switchList[index].subList
  },
  updateHomeSwitchActiveIndex(state,payload){
    state.activeIndex=payload
  }
}

const actions={

}

export default{
  state,
  mutations,
  actions
}
