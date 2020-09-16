<template>
  <div class="qj-banner">
    <div class="block">
      <el-carousel trigger="click" height="440px" class="hover-img-scale">
        <el-carousel-item v-for="item in bannerList">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Uilts from '../../../uitls'
  export default {
    data(){
      return{
        bannerList:[
          {"img":Uilts.publicPath +'static/img/home/home/banner/banner.jpg'},
          {"img":Uilts.publicPath +'static/img/home/home/banner/banner2.jpg'},
          {"img":Uilts.publicPath +'static/img/home/home/banner/banner3.jpg'},
          {"img":Uilts.publicPath +'static/img/home/home/banner/banner4.jpg'},
        ]
      }
    }
  }
</script>
<style scoped>
  @import '../../../../static/css/independent/home/banner/banner.css';

</style>


