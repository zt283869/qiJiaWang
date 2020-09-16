<template>
    <div class="service_computer">
        <div  class="service_computer_service" v-for="(item,index) in serviceList">
          <div class="computer_service">
            <span>{{item['title']}}</span>
            <div class="hr"></div>
          </div>
          <div class="computer_service_list ">
            <router-link :to="{name:'serviceDetailS'}">
              <div class="text-box hover-img-scale overflow-h hover-border-highlight" v-for="(items,index) in item['imgs']">
                <img :src="items" alt="">
                <span>{{item['name'][index]}}</span>
              </div>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{

    }
  },
  computed:{
    serviceList(){
      return this.$store.state.service.content
    }
  }
}
</script>
<style scoped>
  @import '../../../../static/css/independent/service/computer.css';
</style>
