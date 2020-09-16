<template>
    <div class="facilitator clearfix">
      <facilitator_nav></facilitator_nav>
      <facilitator_classify></facilitator_classify>
      <facilitator_title></facilitator_title>
      <pining></pining>
    </div>
</template>

<script type="text/ecmascript-6">
  import facilitator_nav from './components/facilitatorNav.vue'
  import facilitator_classify from './components/classify.vue'
  import facilitator_title from './components/title.vue'
  import pining from '../public/paging.vue'
  export default {
    data(){
      return{
        name:''
      }
    },
    components:{
      facilitator_nav,
      facilitator_classify,
      facilitator_title,
      pining
    }

  }
</script>
<style scoped>
.facilitator{
  min-height: 800px;
  width: 1190px;
  margin:0 auto;
}
</style>


