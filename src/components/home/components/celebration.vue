<template>
  <div class="celebration">
      <ul>
        <li v-for="item in bannerList" class="hover-img-scale hover-border-highlight overflow-h">
          <img :src="item.img" alt="">
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Uilts from '../../../uitls'
 export default {
   data(){
     return{
       bannerList:[
         {"img":Uilts.publicPath +'static/img/home/home/celebration/celebration1.jpg'},
         {"img":Uilts.publicPath +'static/img/home/home/celebration/celebration2.jpg'},
         {"img":Uilts.publicPath +'static/img/home/home/celebration/celebration3.jpg'},

       ]
     }
   }
 }
</script>
<style scoped>
@import '../../../../static/css/independent/home/celebration/celebration.css';

</style>


