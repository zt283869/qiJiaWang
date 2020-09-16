<template>
   <div class="footer">
      <div class="foot-inner">
          <div class="foot-inner-left">
            <div class="logo-img">LOGO</div>
            <div class="foot-nav">
              <ul>
                <li><router-link :to="{name:'indexS'}">首页</router-link></li>
                <li><router-link :to="{name:'serviceS'}">企加定制</router-link></li>
                <li><router-link :to="{name:'weworkDetailsS'}">众创空间</router-link></li>
                <li><router-link :to="{name:'centrumS'}">招商中心</router-link></li>
                <li><router-link :to="{name:'aboutS'}">联系我们</router-link></li>
              </ul>
            </div>
          </div>
          <div class="foot-inner-center">
            <span>联系我们</span>
            <span>服务电话：15103235623 , 15198567778</span>
            <span>客服邮箱：152368455@qq.com</span>
            <span>地址：西安市长安区长安双创中心7楼</span>
          </div>
          <div class="foot-inner-right">
            <div class="foot-title">合作伙伴</div>
            <ul>
              <li>百度云</li>
              <li>紫蒜双创平台</li>
              <li>淘丁财税</li>
            </ul>
          </div>
          <div class="foot-inner-bord">
            <div class="foot-title">微信公众号</div>
            <span><img src="../../../static/img/home/footer/erweima.jpg" alt=""></span>
            <span><img src="../../../static/img/home/footer/erweima.jpg" alt=""></span>
          </div>
      </div>
     <div class="foot-bottom">
       本网站和服务器运营在百度云，由紫蒜双创平台提供技术支持       陕公网安备110042489244号
     </div>
   </div>
</template>

<script type="text/ecmascript-6">

</script>
<style scoped>
 @import "../../../static/css/independent/footer/footer.css";
</style>


