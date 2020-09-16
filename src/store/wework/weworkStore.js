import Uilts from '../../uitls'
import Vue from "vue"

const state = {
  weworkListContent:[
    {
      img:Uilts.publicPath +'static/img/home/wework/wew1.jpg',
      title:'长安区百度创新中心',
      address:'陕西省西安市长安区文化中心百度创新大厦',
      tel:'15963259623',
      project:[
        {name:'省级孵化器'},
        {name:'国家级孵化器'},
        ],
      area:'156'
    },{
      img:Uilts.publicPath +'static/img/home/wework/wew2.jpg',
      title:'临潼经济开发',
      address:'陕西省西安市临潼区经济南路',
      tel:'13152369856',
      project:[
        {name:'国家级孵化器'},
        {name:'省级众创空间'},
        {name:'市级众创空间'},
        ],
      area:'234'
    },{
      img:Uilts.publicPath +'static/img/home/wework/wew3.jpg',
      title:'陕西文化有限公司',
      address:'陕西省西安市长安区解放路向南',
      tel:'180123658963',
      project:[
        {name:'省级众创空间'},
        {name:'国家级孵化器'},
        ],
      area:'852'
    },{
      img:Uilts.publicPath +'static/img/home/wework/wew4.jpg',
      title:'长安经济有限公司',
      address:'陕西省西安市碑林区国美大厦',
      tel:'17785236985',
      project:[
        {name:'市级孵化器'},
        {name:'国家级众创空间'},
        ],
      area:'256'
    },
  ],
  newsList:[
    {month:'10.12',year:'2017',title:'新加坡众创空间JustCo 完成B轮融资估值达2亿美元'},
    {month:'10.15',year:'2017',title:'西安省级孵化器JustCo  完成D轮融资估值达4亿美元左右'},
    {month:'10.18',year:'2017',title:'延安市级众创空间JustCo  完成A轮融资估值达8亿美元'},
    {month:'10.20',year:'2017',title:'中国国家级众创空间JustCo  完成B轮融资估值达122亿美元'}
  ],
weworkListContentS:[]
};

const mutations = {
  weworkList (state,obj) {
    state.weworkListContentS=obj
  }

};

const actions = {
  //创业载体列表信息
  weworkListSS ({ commit, dispatch }, obj) {
    Vue.http.get('/createSever_url/web/carrierinformations?format=json&type=2')
      .then((res) =>{
        commit('weworkList', res)
      }).catch(function() {
      // this.$message({
      //   message: '获取数据失败',
      //   type: 'warning'
      // });
    })
  }
};

export default {
  state,
  mutations,
  actions
}
