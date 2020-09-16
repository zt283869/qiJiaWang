<template>
  <div class="call">
      <div class="call-top">
        <div class="call-top-img">
          <img src="../../../../static/img/home/aboutWe/contact.png" alt="">
          <span>
            <img src="../../../../static/img/home/aboutWe/index.jpg" alt="">
          </span>
        </div>
        <div class="call-top-text">
          <p>陕西企加网科技有限公司</p>
          <h4>公司所在地址：</h4>
          <p>陕西省长安区文化中心百度双创中心8楼807室</p>
          <h4>联系电话：</h4>
          <p>029-68538752</p>
        </div>
      </div>
    <div class="XSDFXPage" id="allmap">

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{}
    },
    mounted() {
      var map = new BMap.Map("allmap");    // 创建Map实例
      map.centerAndZoom(new BMap.Point(108.93 , 34.27), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }));
      map.setCurrentCity("西安");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }
  }

</script>
<style>
  @import '../../../../static/css/independent/aboutwe/aboutwe.css';

</style>
