<template>
  <div class="exclusive">
    <span></span>
    <div class="exclusive-inner">
      <h3>四大红利  入驻专享</h3>
      <dl v-for="item in exclusiveList">
        <dt><img :src="item.img" alt=""></dt>
        <dd>{{item.name}}</dd>
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
        {"img":Uilts.publicPath +"static/img/home/centrum/e1.png","name":"专业规范的市场管理"},
        {"img":Uilts.publicPath +"static/img/home/centrum/e2.png","name":"线上线下运营支持"},
        {"img":Uilts.publicPath +"static/img/home/centrum/e3.png","name":"海量高端客户"},
        {"img":Uilts.publicPath +"static/img/home/centrum/e4.png","name":"多种资源倾力相助"},

      ]
    }
  },

}
</script>
<style>
  @import '../../../../static/css/independent/centrum/exclusive.css';
</style>
