<template>
    <div class="service">
      <service_nav></service_nav>
      <service_industry></service_industry>
      <service_computer></service_computer>
    </div>
</template>

<script type="text/ecmascript-6">
import service_nav from './components/serviceNav.vue'
import service_industry from './components/industry.vue'
import service_computer from './components/computer.vue'

  export default {
    data(){
      return{

      }
    },
    components:{
      service_nav,
      service_industry,
      service_computer,


    }
  }
</script>
<style scoped>
.service{
  min-height: 800px;
  width: 1190px;
  margin:0 auto;
  overflow: hidden;
}
</style>
