<template>
    <div class="service-details">
      <serviceDetailsNav></serviceDetailsNav>
      <serviceDetailsEn></serviceDetailsEn>
      <serviceDetailsMore></serviceDetailsMore>
    </div>
</template>

<script type="text/ecmascript-6">
import serviceDetailsNav from './components/detailsNav.vue'
import serviceDetailsEn from './components/enroll.vue'
import serviceDetailsMore from './components/more.vue'


  export default {
    data(){
      return{

      }
    },
    components:{
      serviceDetailsNav,
      serviceDetailsEn,
      serviceDetailsMore,
    }
  }
</script>
<style scoped>
.service-details{
  min-height: 800px;
  width: 1190px;
  margin:0 auto;
  overflow: hidden;
}
</style>
