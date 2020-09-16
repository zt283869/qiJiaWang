<template>
<div class="flow">
  <div class="striping"></div>
  <div class="flow-inner">
    <h3>入驻流程</h3>
    <dl v-for="item in exclusiveList">
      <dt><img :src="item.img" alt=""></dt>
      <dd>
        <span>{{item.name}}</span>
        <ul>
          <li v-for="items in item.title"><i></i>{{items.name}}</li>
        </ul>
      </dd>
    </dl>
  </div>
</div>
</template>
<script>
  import Uilts from '../../../uitls'
  export default {
    data(){
      return{
        exclusiveList:[
          {"img":Uilts.publicPath +"static/img/home/centrum/f5.png",
            "name":"在线申请",
            "title":[
              {name:'上传企业基本信息'},
              {name:' 上传企业资质信息'},
              {name:' 上传其他证明材料'},
            ]
          },
          {"img":Uilts.publicPath +"static/img/home/centrum/f6.png",
            "name":"线下签约",
            "title":[
              {name:'完成资质审查'},
              {name:'线下实地验证'},
              {name:'确认入驻协议'},
              {name:'完成签约'},
            ]
          },{"img":Uilts.publicPath +"static/img/home/centrum/f7.png",
            "name":"店铺装修",
            "title":[
              {name:'完善店铺信息'},
              {name:'发布企业服务'},
            ]
          },{"img":Uilts.publicPath +"static/img/home/centrum/f8.png",
            "name":"上线经营",
            "title":[
              {name:'开始店铺经营'},
            ]
          },

        ]
      }
    },

  }
</script>
<style>
@import '../../../../static/css/independent/centrum/flow.css';
</style>
