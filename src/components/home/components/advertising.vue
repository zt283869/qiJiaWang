<template>
  <div class="advertising">
    <div class="advertising-inner">
      <span>在这里，他们完成了需求</span>
      <div class="advertising-bottom">
        <span>
          <p>5年的企业经验累积，为您企业发展提供全方位保驾护航</p>
        </span>
      </div>
      <div class="block">
        <el-carousel indicator-position="outside" :autoplay="false">
          <el-carousel-item v-for="item in 4" :key="item">
            <span v-for="(item,index) in imgContent"><img :src="item.imgName" alt=""></span>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import facilitatorStore from "../../../store/facilitator/facilitatorStore";

    export default {
      data(){
        return{

        }
      },
      computed:{
        imgContent(){
          return this.$store.state.advertising.imgList
        }
      }
    }
</script>
<style scoped>
  @import '../../../../static/css/independent/home/advertising/advertising.css';
</style>


