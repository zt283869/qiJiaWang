import Uilts from '../../uitls'

const state = {
  content:{
    serviceList1:{

      imgs:[Uilts.publicPath +'static/img/home/service/s1.jpg',Uilts.publicPath +'static/img/home/service/s2.jpg',Uilts.publicPath +'static/img/home/service/s3.jpg'],
      name:['有限公司注册服务图','合伙公司注册','公司名称变更'],
      title:'工商服务'
    },
    serviceList2:{
      imgs:[Uilts.publicPath +'static/img/home/service/s4.jpg',Uilts.publicPath +'static/img/home/service/s5.jpg',Uilts.publicPath +'static/img/home/service/s6.jpg'],
      name:['小规模纳税人代理记账','一般纳税人代理记账','验资报告'],
      title:'财税服务'
    },
    serviceList3:{
      imgs:[Uilts.publicPath +'static/img/home/service/s7.jpg'],
      name:['商标注册'],
      title:'知识产权'
    },
    serviceList4:{
      imgs:[Uilts.publicPath +'static/img/home/service/s8.jpg',Uilts.publicPath +'static/img/home/service/s9.jpg'],
      name:['企业社保代理','公积金开户'],
      title:'社保代理'
    },
    serviceList5:{
      imgs:[Uilts.publicPath +'static/img/home/service/s10.jpg',Uilts.publicPath +'static/img/home/service/s11.jpg'],
      name:['编写合同','股权架构设计'],
      title:'法律服务'
    }
  }
};

const mutations = {

};

const actions = {};

export default {
  state,
  mutations,
  actions
}
